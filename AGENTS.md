# O Faiado: reglas de trabajo

## Diseño, imágenes y móvil

- Mantener el carácter de O Faiado: crema, burdeos, tipografía editorial y antigüedades.
- Priorizar el móvil en cada cambio. Comprobar en navegador tamaños pequeños (320, 375 y 390 px), tableta y escritorio antes de publicar; revisar desbordamientos, legibilidad, navegación y botones táctiles.
- Añadir imágenes de ambiente pertinentes, optimizadas y servidas localmente; registrar procedencia y licencia. Distinguirlas del inventario real y no prometer disponibilidad.
- Usar Inspira UI como referencia para efectos discretos. Mantener el contenido prerenderizado, respetar `prefers-reduced-motion` y evitar efectos de ratón en pantallas táctiles.
- Usar SVG monocromos para iconos; evitar caracteres que iOS convierta en emojis.
- Mantener los vaciados de viviendas y locales visibles en la portada, con acceso claro a su sección.

## Publicación y seguridad

- Publicar en producción cuando el usuario lo autorice explícitamente. Esta regla no autoriza futuros despliegues por sí sola.
- Generar con `npm ci` y `npm run generate`; la salida estática es `.output/public`.
- Seguir `DEPLOYMENT.md`: conservar el release anterior, activar mediante symlink atómico, verificar HTTPS, recursos y servicios existentes.
- Reutilizar Caddy existente. No sobrescribir su configuración, detener servicios ajenos, cambiar DNS, exponer secretos, limpiar globalmente ni usar force-push. Detenerse si aparece un conflicto de infraestructura.

## CI token-efficiency policy

- After a push or pull request update, check CI status once. If any checks are pending or running, report their status and end the turn immediately; ask the user to return when CI finishes or fails.
- Do not poll continuously, use `gh run watch`, sleep loops, repeated status checks, or background agents solely to wait for CI.
- When the user returns, inspect the results and fix actual failures if necessary. After triggering new CI, check its status once and stop again if it is pending or running.
- Never automatically merge or deploy. Explicitly authorized production operations that require active monitoring are the only exception to the CI waiting restriction.
- Preserve all existing security requirements and approval gates.
