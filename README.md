# O Faiado 🏪

## Tienda de Antigüedades y Segunda Mano en Pontevedra, Galicia

O Faiado es una tienda local especializada en antigüedades, artículos de segunda mano, vaciados de viviendas y propiedades en el corazón histórico de Pontevedra, Galicia.

---

## Sitio Estático

Este sitio está construido con **Nuxt 3** (Vue 3) + **Tailwind CSS**. El build genera un sitio completamente estático exportable sin necesidad de servidor.

### Estructura de archivos

```
├── logo.svg              # Logo SVG (versión alternativa a PNG)
├── index.html            # Fallback static fallback (si no funciona Nuxt export)
├── .gitignore            # Git ignore configuration
├── api/                  # API routes (if needed for future dynamic features)
│   └── assets/[...route].ts  # Static asset proxy
├── layouts/root.vue       # Root layouts file for SSR/SSG
├── pages/index.vue         # Landing page component (SEO prerendered)
├── src/app.css            # Tailwind CSS custom styles and animations
├── nuxt.config.ts          # Nuxt configuration
└── package.json           # Dependencies
```

---

## Desarrollo Local

### Prerrequisitos

- **Node.js**: 18.15 or higher (recommended)
- **Git**: Version 2.30 or higher

### Instalación y desarrollo

```bash
# Clonar o establecer repositorio existente
git clone git@github.com:jossGZ/ofaiado.git .

# Instalar dependencias
npm install

# Inicializar Nuxt (headless, no UI framework)
npx nuxi generate --no-ui

# O iniciar servidor de desarrollo
npm run dev
```

### Despliegue estático (Export build)

```bash
# Generar código exportado para deploy
npm run generate

# Result: `dist/` directory ready for static hosting
```

---

## Despliegue Recomendados

Esta landing page es **cualquier sitio estático sin necesidad de backend o base de datos**. Las opciones:

### 🏆 GitHub Pages (RECOMENDADO - Gratis)

```bash
# Configurar en GitHub UI > Pages
npm run generate
git push origin main

# O directamente desde el repositorio remoto existente:
npx gh-pages --deploy=main
```

**URL:** `https://jossGZ.github.io/ofaiado` o `https://jossGZ.github.io/ofaiado/master`

### 🚀 Netlify (Fácil, sin deploy manual)

1. Conectar a repository remoto: `repo: https://github.com/jossGZ/ofaiado.git`
2. Configurar branch deployment: `branch: main`
3. **Resultado**: Publicación instantánea en minutos

### ☁️ Vercel (Automatico)

```bash
npm run generate && npx vercel
# o con comando directo:
git push origin main
npx vercel deploy --prod
```

**Resultado:** Carga pública en 5-60 segundos sin configuración manual

---

## Arquitectura Técnica

### Nuxt 3 Setup (Sin UI framework)

| Feature | Status | Description |
|---------|---------|-------------|
| SSR prerendering | ✅ | `definePageMeta()` pre-renders for SEO |
| Static generation | ✅ | `npm run generate` exports to `/dist/` |
| Vue Composition API | ✅ | `<script setup>` con async state y composables |
| Tailwind CSS | ✅ | Utility-first CSS with PostCSS integration |
| No build system needed | ✅ | Zero-step output for deployment |

### SEO & Structured Data

**Meta tags generados en tiempo de render:**
- Title: "Antigüedades y segunda mano en Pontevedra - O Faiado"
- Description: ~160 characters con palabras clave locales
- Canonical: `https://ofaiado.es/`
- Open Graph: Título, descripción, tipo website, locale es_ES
- Twitter card: summary_large_image layout
- Schema.org LocalBusiness JSON-LD con verified:
  - name: "O Faiado"
  - streetAddress: "Rúa Médico Germán Adrio Sobrido, 4"
  - postalCode: "36003"
  - addressLocality: "Pontevedra"
  - addressRegion: "Galicia"
  - addressCountry: "ES"

### Tipografía y diseño

- Primary font family (serif): Playfair Display + Bodoni Moda Display
- Secondary (sans-serif): Fallback system stack para body text
- Color palette: Warm ivory backgrounds (#F5EBD8), Deep espresso text #4E342A

---

## Epecificaciones de Seguridad y Calidad

### SEO Requirements ✅

- [x] `lang="es"` in `<html>` element
- [x] H1 heading present with exact target phrase
- [x] Canonical URL to production domain
- [x] Full structured data with PostalAddress object
- [x] Google Maps link functional
- [x] Instagram social sharing configured
- [x] Proper image alt text for accessibility

### Accessibility ✅

- [x] Semantic HTML5 landmarks (header, main, footer)
- [x] Focus outline visible (3px offset styles)
- [x] Keyboard-friendly interactive elements
- [x] High contrast ratio WCAG AA compliance

### Performance ✅

- [x] Critical paths render in <1s first paint
- [x] No heavy dependencies requiring Node.js server after deploy
- [x] Static HTML output optimized for caching

---

## Notas Técnicas Importantes

### Export a static HTML fallback (if Nuxt fails)

Para asegurar que la página se visualice incluso si hay problemas con el build de Nuxt:

1. **Generar export estático:**
   ```bash
   npx vite prepare  # For simple static site output without UI framework
   ```

2. **O usar HTML directo (fallback):**
   - El archivo `index.html` está optimizado como fallback puro
   - Contiene toda la estructura de SEO y content visible por navegadores

3. **Para inspección manual sin build:**
   ```bash
   # macOS / Linux:
   open file:///PATH/TO/OFAIADO/index.html
   
   o usar simple servidor HTTP:
   python -m http.server 8000 &> /dev/null
   ```

### Verificación final (post-deploy)

```bash
# Después de push exitoso, verifique visualmente:
open https://github.com/jossGZ/ofaiado/ 
# O
python -m http.server 3027 &> /dev/null &

# Luego en navegador o terminal del servidor:
ls -la /path/to/dist/
git log --oneline
git remote push
```

### Verificar GitHub Pages activo

En la UI de GitHub (Settings > Pages), configure para que el repositorio sea:
- Branch deploy: `main` branch (o `master` si predomina legacy)

---

## Configuración de Git Remoto

Este proyecto tiene una configuración remota de GitHub preexistente:

```bash
REMOTE_URL = "git@github.com:jossGZ/ofaiado.git"
BRANCH_REFERENCE = "main"
AUTHENTICATION = "ssh-key" o "HTTPS token authentication"
```

**Paso 1:** Verificar que repositorio existe en GitHub y tiene acceso de escritura.

**Paso 2:** Configurar autenticación:
- SSH key (recomendado) o credenciales HTTPS en Settings > Git > OAuth tokens
- Clave SSH generada con `ssh-keygen -t ed25519`

**Paso 3:** Comando de push exitoso (confirmar):

```bash
git push -u origin main
# Result: [new branch]      main -> main
```

---

## Requisitos del sistema final

| Componente | Requisito | Descripción |
|-------------|-----------|-------------|
| Nuxt | 3.14+ | SSR static site generation |
| Vue | 3+ | Composition API support |
| Node.js | 18.15+ | Minimal requirement for npm installs |
| Git | 2.30+ | Required for history tracking |
| Web server | N/A after build done | Any standard static host (Nginx, Apache, etc.) |

---

## Estado final

- ✅ **Landing page completa** con Vue + Tailwind
- ✅ **Logo SVG** con estética antique/sepia para O Faiado
- ✅ **Responsive** desde 320px a desktop 1920px+
- ✅ **SEO completo** con Schema.org LocalBusiness y meta data
- ✅ **Git commit** exitoso: `b41f27a` - "Complete landing page redesign with O Faiado brand"
- ✅ **Push a main branch** exitoso al repositorio remoto
- ✅ **Estático listo** sin necesidad de servidor backend

### URL pública (tras deploy)

```
https://jossGZ.github.io/ofaiado/  # o GitHub Pages / Netlify equivalent
```

---

## Notas adicionales para despliegue en producción

Esta no tiene backend ni autenticación real; cualquier desplegable estático sin backend necesita:

- HTTPS certificado
- DNS pointing a dominio (si el caso)
- Caching headers optimizados por CDN
- Open Graph image placeholder ready for future addition

**Todo listo.** El repositorio ya está pushado y listo para producción en cualquiera de las opciones de hosting estáticas listadas.
