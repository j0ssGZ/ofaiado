# O Faiado - Landing Page Specification

## Project Overview
A minimal, mobile-first static landing page for O Faiado, a local antiques and second-hand shop in Pontevedra, Galicia, Spain.

## Requirements

### Business Information
- **Business Name:** O Faiado
- **Street Address:** Rúa Médico Germán Adrio Sobrido, 4
- **Postal Code:** 36003
- **City:** Pontevedra
- **Region:** Galicia
- **Country:** Spain
- **Google Maps:** https://share.google/WV4r8qxlds75khdTk
- **Instagram:** https://www.instagram.com/ofaiado_pontevedra/

### Content Requirements
1. Display original logo (centered near top)
2. H1: "Antigüedades y segunda mano en Pontevedra"
3. Attractive introduction in natural Spanish
4. Mention of antiques, second-hand objects, and property clear-outs
5. Full address displayed clearly
6. Prominent "Cómo llegar" button linking to Google Maps
7. Prominent "Síguenos en Instagram" link
8. Small footer with O Faiado and Pontevedra

### Design Requirements
- Pure white background
- Original logo centered near top, preserved (alt text included)
- Sepia/brown accents inspired by logo
- Excellent spacing, typography, alignment, responsiveness
- System fonts only
- Mobile-first design starting at 320px width
- Tasteful and simple visual design without large decorative elements
- No stock photos, sliders, unnecessary animations, galleries

### Technology Requirements
- HTML5 + CSS3 only
- No frameworks, build systems, or package managers
- No external dependencies
- No JavaScript necessary (minimal JS)
- Semantic, accessible HTML
- Minimal, readable, maintainable code
- Static assets stored locally

### SEO Requirements
- HTML lang="es" attribute on `<html>` element
- Unique title and meta description targeting O Faiado, Pontevedra, antigüedades, segunda mano
- Exactly one meaningful H1 heading ("Antigüedades y segunda mano en Pontevedra")
- Correct heading hierarchy (H1 → H2 → P)
- Canonical link: https://ofaiado.es/
- Open Graph card metadata for social sharing
- Twitter/X card metadata for social sharing
- Schema.org `LocalBusiness` JSON-LD with verified PostalAddress fields including:
  - `@type`: "LocalBusiness" / "Store"
  - `name`: "O Faiado"
  - `address`: { `type`: "PostalAddress", ... }
    - `streetAddress`: "Rúa Médico Germán Adrio Sobrido, 4"
    - `postalCode`: "36003"
    - `addressLocality`: "Pontevedra"
    - `addressRegion`: "Galicia"
    - `addressCountry': "Spain"` or "ES"
- robots.txt allowing indexing (`User-Agent: *` → `Allow: /`)
- sitemap.xml with production URL (https://ofaiado.es/)
- Descriptive logo alt text for accessibility and SEO
- Natural mentions of key phrases:
  - "antigüedades en Pontevedra"
  - "tienda de segunda mano en Pontevedra"
  - "vaciados de viviendas en Pontevedra"
- No keyword stuffing; natural content placement
- Structured data available in `<script type="application/ld+json">` tag visible to crawlers

### Accessibility Requirements
- Accessible color contrast on all links
- Keyboard-focusable interactive elements
- Touch-friendly link sizes (min 44x44px touch target)
- Semantic HTML5 landmarks
- ARIA labels where necessary

### Quality Checks
- Responsive at 320px and beyond
- All colors passing WCAG AA contrast checks
- No broken links or missing assets
- No placeholder text visible on final build
- No unfinished sections (only header, main content, footer)
- Semantic validation using HTML5 best practices

### Workflows
1. Project setup with Git initialization
2. Create complete landing page in single HTML file
3. Include embedded CSS for portability
4. Write SEO metadata and structured data
5. Set up static files directory structure
6. Create robots.txt permission file
7. Create sitemap.xml
8. Initialize Git repository locally
9. Configure GitHub remote (git@github.com:j0ssGZ/ofaiado.git)
10. Commit landing page with meaningful commit message
11. Push to main branch (or set up if needed then push)
12. Document any remaining deployment requirements

## Acceptance Criteria

### Content
- [x]  Logo displayed with descriptive alt text "Logo de O Faiado - Antigüedades y segunda mano en Pontevedra"
- [x] H1 heading matches exactly: "Antigüedades y segunda mano en Pontevedra"
- [x]  Introduction paragraph in natural Spanish (minimum 80 words)
- [x] Mention of antiques, second-hand items, and property clear-outs
- [x] Full address displayed with all verified fields
- [x] "Cómo llegar" button links to Google Maps URL
- [x] Instagram link formatted as clickable social media section
- [x] Footer displays business name and location

### Design
- [x] Pure white background (#ffffff)
- [x] Sepia/brown accent colors (hex: #8b5a3b for browns, #d2b48c for sepia)
- [x] System font stack (San Francisco, Segoe UI, Roboto, Helvetica, Arial)
- [x] Mobile-first responsive design with breakpoints at 600px and 1024px
- [x] Minimum padding of 20px around content sections
- [x] Button sizes minimum 48px height for touch targets
- [x] No animations requiring JavaScript or blocking page performance

### SEO & Structured Data
- [x] `<html lang="es">` attribute present
- [x] Title: "Antigüedades y segunda mano en Pontevedra - O Faiado | Tienda de antigüedades, vaciados y locales"
- [x] Meta description unique and meaningful (~160 chars max): "Descubre nuestras antigüedades en Pontevedra. Tienda de segunda mano con vaciados de viviendas y locales. Visita Rúa Médico Germán Adrio Sobrido, 4 (36003 Pontevedra)"
- [x] Canonical: `https://ofaiado.es/`
- [x] Open Graph title includes business name and location
- [x] OG description matches meta description with enhanced social context
- [x] OG image placeholder or empty div for future use (alt text included)
- [x] Twitter card cards set up with appropriate values
- [x] LocalBusiness JSON-LD structured data with:
  - `@type` = "LocalBusiness" / "Store" / "General"
  - `name` = "O Faiado"
  - `address` complete PostalAddress object with all verified fields (street, postal code, locality, region, country)
  - `telephone` can be omitted or marked as unverified if placeholder is kept for future use
  - `sameAs` array includes Instagram URL
- [x] robots.txt permits crawling: `User-Agent: * \nAllow: /`
- [x] sitemap.xml contains single entry with canonical production URL
- [x] All text content available in HTML (not JavaScript)

### Accessibility (WCAG 2.1 AA Target)
- [x] High emphasis text (bold headings) passes contrast ratio ≥ 7.0:1 against white background
- [x] Body and link text passes contrast ratio ≥ 4.5:1 against white (#2c3e50 color)
- [x] All interactive elements focus-visible states added for keyboard navigation
- [x] Semantic HTML landmarks (header, main, footer) used properly
- [x] Logo image has descriptive alt text for screen readers
- [x] No decorative content remaining from unused design elements
- [x] Buttons have appropriate `:active` or click focus styles

### Technical Validation
- [x] Single index.html file (or optional CSS-only separation)
- [x] All CSS embedded in header/style section for portability
- [x] No external dependencies (no CDNs, no npm, no build steps)
- [x] Valid HTML5 structure (DOCTYPE, lang, charset)
- [x] Meta tags properly set for viewport (width=device-width, initial-scale=1)
- [x] Image optimization (lazy loading where appropriate)

## File Structure Expected

```
/ofaiado/
  README.md     - Project description and deployment instructions
  .gitignore    - Git ignore file
  index.html    - Landing page main content
  css/
    style.css   - External stylesheet (optional separation)
  images/
    logo.png    - Original business logo (provided)
  metadata/
    robots.txt   - Search engine accessibility permissions
  metadata/
    sitemap.xml  - XML sitemap for search engines
```

## Development Notes

- Start with a single HTML file approach for simplicity and portability
- CSS can be embedded if needed for deployment simplicity, or separated to external stylesheet
- All content is static - no server-side rendering
- Minimal JavaScript: only essential utility functions (none required)
- No caching issues due to clean asset delivery

## Success Metrics

- Landing page fully rendered with all content sections visible
- Mobile responsiveness validated at 320px, 600px, and 1024px breakpoints
- Accessibility contrast validated for all text elements
- Structured data correctly formatted and parseable by JSON-LD validators
- SEO metadata properly implemented and crawlable
- GitHub repository configured with proper remote and main branch
- Git commit with meaningful message created successfully
- Push to GitHub main branch succeeds without errors

## Deployment Notes

This landing page is deployable via:
- GitHub Pages (https://github.com/j0ssGZ/ofaiado/tree/main)
- Static hosting platforms (Netlify, Vercel, Cloudflare Pages)
- Any static hosting service requiring HTML and CSS only

No deployment configuration or server setup is required on the web side. The site is pure static with zero external dependencies.
