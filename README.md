# O Faiado

## Tienda de Antigüedades y Segunda Mano en Pontevedra

O Faiado es una tienda local especializada en antigüedades, artículos de segunda mano, vaciados de viviendas y propiedades en el corazón de Pontevedra, Galicia.

## Sitio Web Estático

Este sitio está construido con HTML5 y CSS3 puro, sin dependencias externas ni frameworks. Está optimizado para carga rápida y acceso desde cualquier dispositivo.

### Estructura de archivos

```
.
├── index.html       - Página principal (landing page)
├── logo.png         - Logo original proporcionado por el propietario
├── robots.txt       - Directiva de permisos para motores de búsqueda
├── sitemap.xml      - Mapa XML para SEO y indexing
└── README.md        - Este archivo con instrucciones de despliegue
```

### Información del Negocio

**Nombre:** O Faiado  
**Dirección:** Rúa Médico Germán Adrio Sobrido, 4  
**Código Postal:** 36003  
**Localidad:** Pontevedra  
**Región:** Galicia  
**País:** España  

**Links Sociales:**
- [Google Maps](https://share.google/WV4r8qxlds75khdTk)
- [Instagram](https://www.instagram.com/ofaiado_pontevedra/)

## Previsualización Local

Para previsualizar la página sin necesidad de un servidor, puedes usar:

```bash
# Opción 1: Usando Python (3.8+)
python -m http.server 8000

# Opción 2: Usando Node.js y 'serve'
npx serve .

# Opción 3: Simple echo de archivo local
open index.html
```

Comandos de ejemplo:

```bash
# En macOS
open -W "file:///Users/josefanjul/www/ofaiado/index.html"

# En Linux / macOS con Python
python -m http.server 8000 &gt; /dev/null &
```

### Notas sobre previsualización local

- **No es necesario instalar Node.js o otros frameworks** para ver la página (es HTML/CSS puro)
- Los navegadores pueden mostrar `index.html` directamente y renderizar el contenido de forma completa sin necesidad de un servidor web.
- Para inspeccionar el CSS, puedes usar desarrolladores de navegador y abrir la ventana en modo "Simular dispositivo móvil" o "Inspect Element".

## Requisitos Técnicos

Esto es **HTML5 + CSS3 100% puro**, sin dependencias externas:

- **Nada a instalar:** no se requiere ningún framework, build paso o gestor de paquetes
- **Solo navegadores modernos:** la página carga nativamente en Chrome, Firefox, Safari y Edge
- **Responsive:** funciona automáticamente entre dispositivos móviles (320px) y escritorio (1200px+)

## Configuración de Git

### Remoto GitHub Configurar

Antes de subir este proyecto a su repositorio remoto en GitHub:

```bash
git remote add origin git@github.com:jossGZ/ofaiado.git

git branch -M main
```

O alternativamente, usar el comando para establecer un fork remoto:

```bash
git push -u origin main
```

### Notas sobre configuración de Git

- Este proyecto puede ser alojado en **GitHub Pages** sin necesidad de infraestructura adicional.
- GitHub Pages no requiere que uses un servidor web externo ni se preocupe por configuraciones complejas de HTTPS o SSH.
- Si el código está en `/ofaiado`, las páginas en `https://github.com/jossGZ/ofaiado/tree/main` se cargarán automáticamente sin configuración extra.

### Notas técnicas sobre configuración de repositorios remotos

Este repositorio requiere que tenga acceso a:
- **GitHub:** git@github.com:jossGZ/ofaiado.git (o un nombre remoto alternativo configurado)
- SSH key o HTTPS con credenciales si se requiere autenticación
- Un usuario y directorio en GitHub con acceso de escritura (main / master)

### Notas sobre despliegue sin configuración actual de repositorios remotos

Si no estás trabajando directamente a este código en un repositorio remoto actual en GitHub, puedes crear primero que el nuevo repo:

```bash
# En GitHub Web UI > Nueva pestaña (para un repositorio público):
git clone git@github.com:jossGZ/ofaiado.git .
git branch -M main
```

Luego `push` para subir el código completo con la configuración de remotos.

### Notas de infraestructura no requerida

Este proyecto es **estático**: no necesita ninguna configuración adicional (no hay backend, bases de datos ni aplicaciones en tiempo real que configuren). Se publica directamente como código HTML y CSS puro. Las únicas cosas necesarias son los archivos listados. Si tienes GitHub Pages o un hosting estático disponible, simplemente haz push desde tu terminal y el proyecto estará alojado y accesible en segundos.

## Validaciones Ejecutadas

### Estructura de Archivos ✅

- [x] `index.html` - Página principal con estructura semántica HTML5
- [x] `robots.txt` - Permisos para crawlers de motores de búsqueda
- [x] `sitemap.xml` - Mapa XML para SEO
- [x] `README.md` - Instrucciones de desplegar
- [x] `logo.png` - Asegurar que el archivo logo se encuentra en la carpeta

### Contenido y SEO ✅

- [x] `lang="es"` atribuido al elemento `<html>`
- [x] Meta descripción única y significativa (~160 caracteres)
- [x] Title tag único: "Antigüedades y segunda mano en Pontevedra - O Faiado | Tienda de antigüedades, vaciados y locales"
- [x] Canonical link a `https://ofaiado.es/`
- [x] JSON-LD estructurado LocalBusiness con todos los campos verificadas
  - name: "O Faiado"
  - streetAddress: "Rúa Médico Germán Adrio Sobrido, 4"
  - postalCode: "36003"
  - addressLocality: "Pontevedra"
  - addressRegion: "Galicia"
  - addressCountry: "ES"
- [x] Meta tags para Open Graph (og:title, og:description, og:type)
- [x] Meta tags para Twitter Card (twitter:image, twitter:card, etc.)

### Accesibilidad ✅

- [x] Alto contraste de colores (pelo oscuro contra blanco puro)
- [x] Enlaces con `focus` visible (outline de 3px sólido en color sepia)
- [x] Elementos semánticos HTML5 (header, main, footer, nav, section)
- [x] Etiquetas alt text descriptivas para la imagen del logo
- [x] Navegación completa con teclado
- [x] Botones grandes y claramente identificados

### SEO Local ✅

- [x] Menciones naturales de "antigüedades en Pontevedra"
- [x] Menciones naturales de "tienda de segunda mano en Pontevedra"
- [x] Menciones naturales de "vaciados de viviendas en Pontevedra"
- [x] Dirección completa visible y accesible: Rúa Médico Germán Adrio Sobrido, 4
- [x] Código postal (36003) e incluido en todos los bloques de contacto

### Responsividad ✅

- [x] Diseño mobile-first desde 320px
- [x] Media queries para pantallas de menos de 768px
- [x] Media queries para pantallas de menos de 480px (móviles pequeños)
- [x] Contenedores con máximo de 720px
- [x] Padding adaptativo para diferentes tamaños de pantalla

## Despliegue Futuro

### GitHub Pages

Esta es la forma más sencilla y recomendada de desplegar el sitio:

```bash
# Configurar en GitHub:
Settings > Pages > Source > Deploy from branch: main
git push -u origin main

# O si prefieres master (legacy) como alternativa:
git branch -M master
git push -u origin master
```

**Resultado:** `https://jossGZ.github.io/ofaiado` o `https://jossGZ.github.io/ofaiado/master`

### Alternativas de Depósito Estático

- **Netlify:** Arrastra el repositorio a https://app.netlify.com
- **Vercel:** https://vercel.com (conexión automática)
- **Cloudflare Pages:** `wrangler pages deploy .`

**Resultado:** Acceso público rápido sin configuración adicional. El contenido estático siempre carga en minutos desde cualquier lugar del mundo.

### Notas sobre infraestructura no requerida

La página estática y los archivos HTML + CSS puro no requieren ningún servidor backend, base de datos o aplicación de tiempo real. Se sube con git push (o se arrastra directamente a GitHub Pages / Netlify), ya esté disponible públicamente y carga rápidamente por su naturaleza sin dependencias externas. No necesitas configurar nada más salvo el repositorio remoto en GitHub con el dominio `jossGZ`.

## Estado Final

- [x] Página de aterrizaje completa y funcional
- [x] Archivo logo.png presente localmente
- [x] Estructura semántica HTML5 validada
- [x] CSS para diseño responsivo e inclusivo incluido
- [x] SEO completo con JSON-LD estructurado LocalBusiness
- [x] Robots permissions and sitemap configured
- [x] Código pushable a GitHub remote

## Reporte de Éxito

El proyecto está listo para:
1. Previsualización local usando `open -W index.html` o `python -m http.server 8000`
2. Configuración de repositorio remoto remota en GitHub
3. Commit y push con `git push -u origin main`
4-5 Despliegue sin configuración adicional

---

**Nota Importante:** El despliegue en GitHub Pages requerirá que el usuario tenga un acceso al directorio remoto `/ofaiado` en git@github.com:jossGZ/ofaiado.git. Si este no existe o la clave SSH, deberá ser configurada por primera vez antes de `git push`.
