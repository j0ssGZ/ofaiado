# O Faiado: despliegue estático en OVH

## Infraestructura existente

- VPS Ubuntu: `198.244.233.153` (`vps-543b5b89`).
- Acceso: `ssh ubuntu@198.244.233.153` con la clave SSH existente; `sudo` sin interacción.
- Proxy público: contenedor existente `gateway-caddy-1`, Caddy 2.10.2, red `host`.
- Configuración: `/opt/gateway/Caddyfile`, montada de solo lectura en `/etc/caddy/Caddyfile`.
- Compose: `/opt/gateway/compose.yaml`. No se necesita modificarlo ni recrear el contenedor.
- Volumen existente `gateway_caddy_config`, montado en `/config`.
- DNS autoritativos: `ns61.domaincontrol.com` y `ns62.domaincontrol.com`.
- DNS requerido: `ofaiado.es A 198.244.233.153`, `www CNAME ofaiado.es`, sin AAAA conflictivo.

## Directorios

El despliegue reutiliza el volumen que Caddy ya tiene montado para servir otros sitios estáticos:

```text
/srv/www/ofaiado -> /var/lib/docker/volumes/gateway_caddy_config/_data/ofaiado
  releases/<release-id>/   # solo contenido de .output/public
  current -> releases/<release-id>
  previous -> releases/<release-anterior>  # desde el segundo despliegue

/config/ofaiado/current   # ruta equivalente dentro de Caddy
/opt/gateway/backups/ofaiado/<release-id>/  # copias y metadatos, fuera del directorio público
```

El directorio real del volumen debe obtenerse con `docker volume inspect gateway_caddy_config --format '{{.Mountpoint}}'`; no debe asumirse si cambia Docker. Propietario `root:root`, directorios `0755`, archivos `0644`. La fuente, `node_modules`, secretos y documentación permanecen fuera del directorio público.

## Compilación local

Clonar `main` en un directorio limpio y registrar `git rev-parse HEAD`. Usar el lockfile:

```sh
npm ci
npm run generate
test -s .output/public/index.html
test -s .output/public/robots.txt
test -s .output/public/sitemap.xml
```

La salida real es `.output/public`, no `dist`. La página y sus metadatos están prerenderizados. Producción solo requiere Caddy, sin proceso Node.js.

El script `npm run lint` del repositorio original invoca ESLint, pero no hay dependencia ni configuración de ESLint. Se registra como comprobación no disponible; no se añade un sistema de lint en este despliegue.

Antes de transferir: verificar todas las rutas locales referenciadas por HTML/CSS/JS, el logo, el contenido principal, canonical, `og:url`, JSON-LD, robots y sitemap. Inspeccionar la página en un navegador servido como sitio estático.

## Configuración de Caddy

El fragmento completo está en `deploy/Caddyfile.ofaiado`. Añade únicamente los hosts `ofaiado.es` y `www.ofaiado.es`. La web usa `root * /config/ofaiado/current`, compresión gzip/zstd, cabeceras de seguridad y `file_server` sin `browse`. `www` redirige con 308 a `https://ofaiado.es{uri}`, conservando ruta y consulta. Caddy gestiona automáticamente los certificados de ambos nombres y la redirección HTTP a HTTPS.

Antes del primer cambio: guardar una copia del Caddyfile y del JSON efectivo obtenido de `http://127.0.0.1:2019/config/`, comprobar que el Caddyfile adaptado coincide con el JSON activo y registrar hosts, contenedores, IDs, arranques y salud. No guardar claves ni variables de entorno en esos registros. Comprobar DNS y puertos antes de activar los hosts HTTPS.

Preparar un Caddyfile candidato con todos los hosts previos y el fragmento nuevo. Validarlo dentro del contenedor existente y comparar estructuralmente las rutas antiguas. Solo entonces añadir el fragmento al archivo existente, preservando su inode para el bind mount. No sustituir el archivo por `mv`, no cambiar las rutas previas y no recrear el proxy.

```sh
docker exec gateway-caddy-1 caddy validate --config /etc/caddy/Caddyfile --adapter caddyfile
docker exec gateway-caddy-1 caddy reload --config /etc/caddy/Caddyfile --adapter caddyfile
```

La recarga es graceful. No usar `docker compose down`, reinicios de servicios, Certbot ni cambios de DNS automáticos.

## Redespliegue manual seguro

1. Clonar/fetch `main`, registrar SHA, instalar con `npm ci`, generar y validar localmente.
2. Crear un release nuevo bajo `/srv/www/ofaiado/releases/<UTC>-<SHA-corto>`, sin tocar releases previos.
3. Transferir **solo** el contenido de `.output/public` al release nuevo. Verificar lista y SHA-256 de todos los archivos transferidos; rechazar symlinks y archivos ajenos a la salida estática.
4. Establecer permisos `root:root`, directorios `0755` y archivos `0644`; confirmar lectura desde `gateway-caddy-1`.
5. Guardar SHA, release, manifest de archivos y estado previo en `/opt/gateway/backups/ofaiado/<release-id>/`, fuera de la web.
6. Guardar el destino anterior de `current`. Si existe, crear `previous` apuntando a ese release. Preparar `current.next -> releases/<release-id>` y activar con `sudo mv -Tf /srv/www/ofaiado/current.next /srv/www/ofaiado/current`. La sustitución del symlink es atómica.
7. No recargar Caddy para un cambio exclusivamente de archivos. Validar HTTP, TLS, recursos y hosts existentes. Conservar el release anterior y las copias.

## Verificación

```sh
dig @ns61.domaincontrol.com ofaiado.es A +norecurse
dig @ns62.domaincontrol.com ofaiado.es AAAA +norecurse
dig @ns62.domaincontrol.com www.ofaiado.es CNAME +norecurse
curl -I https://ofaiado.es/
curl -I 'https://www.ofaiado.es/robots.txt?verificacion=1'
curl -I 'http://ofaiado.es/robots.txt?verificacion=1'
curl -fsS https://ofaiado.es/robots.txt
curl -fsS https://ofaiado.es/sitemap.xml
openssl s_client -connect ofaiado.es:443 -servername ofaiado.es -verify_return_error </dev/null
```

Comprobar también `www` con SNI propio, cadena confiable, fechas y SAN del certificado; no usar `curl -k` como prueba de HTTPS. La portada debe devolver 200, HTTP debe devolver 308 a HTTPS y `www` debe devolver 308 al dominio canónico conservando ruta y consulta. Los recursos han de responder 200 con MIME correcto. Las rutas `/.git/config`, `/.env`, `/package.json`, `/node_modules/` y un directorio sin índice deben devolver 404.

Comparar los hosts existentes antes/después mediante `curl --resolve HOST:443:198.244.233.153 https://HOST/`, además de estado, ID, fecha de arranque y salud de los contenedores. La API de administración de Caddy permanece en loopback.

## Rollback

Si `previous` existe, comprobar su destino y su `index.html`, preparar `current.rollback` con el mismo destino y sustituir `current` atómicamente con `mv -Tf`. No borrar el release fallido ni el anterior. No hace falta recargar Caddy para revertir archivos.

Si falla la primera incorporación de hosts, no existe un release anterior de O Faiado. Tras comprobar que no hay cambios concurrentes, restaurar el Caddyfile respaldado escribiendo sobre el archivo existente (preservando inode), validarlo y recargar graceful. La copia JSON efectiva permite confirmar exactamente las rutas previas. No restaurar a ciegas una copia si hubo cambios de otras aplicaciones: retirar exclusivamente el bloque de O Faiado.

## Registro de despliegue

El SHA exacto, release activo, copia de configuración, resultados HTTP/TLS y comprobaciones de regresión se registran en `/opt/gateway/backups/ofaiado/<release-id>/`. La ejecución inicial dejará constancia adicional en este documento al completar la verificación pública.
