# O Faiado - Creative Design Direction

## Visual Identity & Philosophy

A contemporary boutique antique shop design for the modern age. The visual identity should reflect:

- **Timelessness over trends**: Designs that won't feel dated in 5 years
- **Craftsmanship over polish**: Hand-feel details, imperfect perfection
- **Editorial elegance**: High-end fashion magazine meets museum catalog
- **Warmth over sterility**: Ivory shadows, warm browns, rich golds

---

## Color Palette

### Primary Colors (Hex)

| Name | Hex | Usage | Description |
|------|-----|-------|-------------|
| Rich Sepia | #8B5A3B | Primary brand element | Traditional brown from aged wood/leather |
| Deep Espresso | #4E342A | Headings, primary text | Dark espresso, sophisticated depth |
| Antique Gold | #D4AF37 | Accents, stars | Muted metallic glint, not flashy |
| Warm Ivory | #F5EBD8 | Backgrounds | Warm off-white, softer than #ffffff |
| Soft Taupe | #D2B48C | Subtle backgrounds | Natural leather tone |

### Usage Guidelines

- Primary text: `#4E342A` (espresso brown) - readable contrast on any background
- Secondary/accents: `#8B5A3B` and `#D4AF37` - use sparingly, < 15% of visual weight
- Backgrounds: Warm Ivory (#F5EBD8) for main sections, pure white (#FFFAF0) for negative space

---

## Typography System

### Primary Font Family

**Body**: *Playfair Display* (serif) - elegant, classic but not outdated  
- `font-weight: 400` – Regular elegance  
- `font-size: clamp(1.25rem, 2vw, 1.6rem)` – Responsive sizing
- `line-height: 1.6` – Comfortable reading rhythm

**Headings**: *Bodoni Condensed* or *Playfair Display Display* (serif display)  
- `font-weight: 700` – Bold statements with presence
- Large, expressive sizes that set the mood immediately
- Tight leading to feel confident and bold

### Type Scale

| Element | Size | Weight | Leading Spacing |
|---------|------|--------|------------------|
| H1 Hero | 48px - 72px | 700 | 50% (tight, confident) |
| H2 Section | 32px - 40px | 600 | 55% (editorial feel) |
| H3 Element | 24px - 28px | 600 | 55% |
| Body Text | 17px-18px | 400 | 1.6x (readable rhythm) |
| Captions | 14px | 400 | 1.3x (tight, intentional) |

---

## Composition & Layout

### The B&W Grid Foundation

The underlying layout uses a 12-column responsive grid with wide margins. Key constraints:

- **Maximum content width**: 720px for desktop
- **Side padding**: 24px minimum, 32px on larger screens
- **Vertical rhythm**: Multiple of 16px throughout

### Asymmetrical Balance

Balance through white space rather than symmetry:

- Off-center elements with deliberate breathing room
- Left-aligned text blocks balanced by right-side negative space
- Use the "rule of thirds" for important visual anchors
- Create visual weight distribution rather than mirror placement

### The Editorial Layout Pattern

1. **Full-header**: Logo left, H1 centered with ample top/bottom margin (48px)
2. **Hero section**: Large text + single elegant element or subtle abstract background pattern
3. **Section columns**: Alternating text (left) + image (right), but images can be 60% width in favor of copy
4. **Editorial divider**: Subtle horizontal line under H2 sections, maybe 3px thin

---

## Material Design Elements

### Texture Layers (Subtle Only)

**Layer 1: Base Canvas** - Warm ivory (#F5EBD8), minimal noise texture

**Layer 2: Grain Overlay** - Very subtle 50% opacity paper grain pattern using canvas filter
  
```
canvas.filter('contrast(95%) brightness(100%) blur(0.5px)')
```

**Layer 3: Paper Edge Shadow** on container borders when scrolled into view, max 2px soft brown shadow

### Border Treatment

- Use 1px solid `rgba(78, 52, 42, 0.15)` for subtle edges (not pure black)
- Rounded corners: `border-radius: 4px` or `border-radius: 6px` - elegant but not cartoonish
- More important than "rounded" is the **consistent use** of border to define structure

---

## Motion & Animation Philosophy

### Duration Rhythm

| Event | Duration | Easing |
|-------|----------|--------|
| Initial load reveal | 600ms | cubic-bezier(0.24, 0, 0.33, 1) - fast forward |
| Scroll-triggered element enter | 750ms | ease-out (exponential feel) |
| Scroll-triggered background change | no animation, use CSS opacity fade | n/a |
| Button hover scale | 200ms | cubic-bezier(0.34, 1.56, 0.64, 1) - elastic bounce |

### Key Animations (Inspira UI components)

**1. FadeUp** – Elements fade in from below (initial and scroll-triggered)

   - `opacity: 0 → 1; transform: translateY(32px)`
   - Duration: 600-750ms with ease-out easing
   - Scroll observer triggers after visible threshold of 25%

**2. Staggered Reveal** – Sections appear sequentially, not all at once

   - Section 1 enters first @ 0ms, then next section appears after delay (300ms)
   - Each section gets `display: none` + `opacity: 0; opacity: 0;` + transform Y

**3. Subtle background movement** – Use CSS only or very light animation for "breath"

   - Background gradient shift: < 0.5 degrees per scroll frame
   - Not obvious to user, but subtle parallax effect for hero elements

**4. Elegant button hover** – Micro-interactions with feedback

   - Button scales slightly up (1.02x) on hover with bounce-back
   - Secondary element (icon/arrow) slides into view from right
   - No color changes unless explicitly requested

### Motion Constraints (For Accessibility)

```javascript
{ prefers-reduced-motion: true }
// → Disable all animations except essential interactions only
// → Use 200ms static transitions as fallback instead of complex animations
```

---

## Component Breakdown

### Navigation Bar Component

- **Layout**: Flexbox, left-aligned logo, right-aligned links (on desktop)
- **Background**: Warm ivory (#F5EBD8), no borders on top (pure header) + 1px bottom border
- **Typography**: Logo image with alt text visible to browsers; H1 large below in dark brown (`#4E342A`)

### Hero Section Component

- **H1 typography**: 48-72px, Playfair Display, weight 700, tight leading (50%)
- **Content alignment**: Centered or slight right bias (640px margin)
- **Background**: Minimal pattern with warm ivory overlay (not pure white)
- **Motion**: Fade up from bottom after ~200ms on mount

### Section Component

- **Structure**: Alternating left-right, alternating margins
- **Left column**: Text block (max-width 16 chars, 8px line)
- **Right column**: Either image (max-width 58%, margin), or continuation paragraph (max-wider)
- **Divider**: Thin brown line under H2 sections

### Divider Component

- **Style**: Single-line horizontal divider at 3px using `color: rgba(139, 90, 59, 0.6)`
- **Spacing**: Above and below dividers are ~48px
- **Optional pattern**: Very subtle wave/texture on edges for interesting detail

### CTA Sections Component

- **Primary button**: Large (min-height: 48px), deep brown background (#4E342A), white text
- **Icon motion**: Small SVG arrow or "arrow →" icon with slide-right animation on hover
- **Typography weight**: 600 for titles, 400 for body

---

## Inspiration References (For Design Direction)

1. **Tastemakers Magazine** – Editorial typography, clean grid layout, premium feel
2. **Vogue Architecture** – Sophisticated layouts with generous white space around key elements
3. **Bergdorf Goodman / Neiman Marcus** – Luxury retail editorial aesthetic
4. **Antique shop websites like Christie's online** – Old-world prestige meets modern digital UX

Avoid: Generic SaaS gradients, flashy particle effects, or startup-styled typography like Inter/Roboto

---

## Responsive Strategy

| Breakpoint | Width | Layout Change |
|------------|--------|---------------|
| Base | 320px-640px (Mobile) | Single column text flow, centered headings |
| Tablet | 641px-768px | Side padding adjusted to 28px, sections align left/right |
| Desktop | 769px+ and above | Wider margins (32px), more generous grid columns |

---

## Accessibility Requirements

- **Contrast ratio**: Minimum 4.5:1 for all text on backgrounds (WCAG AA)
- **Focus outline**: 3px dashed or solid (#8B5A3B) with offset (Inspira UI `focus-visible` utility)
- **Reduce Motion**: Use CSS media query to disable animations (`prefers-reduced-motion`)
- **Sensory markers**: All interactive elements should be focus-trappable
- **Alt text**: Full image descriptions, especially for decorative images

---

## Technical Implementation Notes

### Nuxt 3 + Vue 3 Setup

Use `nuxt@3.2+` or `nuxt@4+` with these features:

- Server-side rendered (SSR) HTML for SEO
- Vue Composition API with `<script setup>` for concise code
- TailwindCSS utility-first approach via PostCSS/automatically injected

### Tailwind Configuration

Colors to map in tailwind.config.js:
```js
export default {
  theme: {
    extend: {
      colors: {
        sepia: '#8B5A3B',
        espresso: '#4E342A',
        'antique-gold': '#D4AF37',
        warm-ivory: '#F5EBD8',
        taupe: '#D2B48C'
      }
    }
  }
}
```

Font family order (CSS fallback):
```css
/* Use via @import or font-family declaration */
@font-family: 'Playfair Display'; /* Primary body serif */
@font-family: 'Bodoni Condensed', 'Playfair Display Display'; /* Headings */
@font-family: sans-serif; /* Fallback for any other text */
```

---

## Implementation Priority (Phase 1 Focus)

### Phase 1 - Core Foundation (Immediate)

1. Setup Nuxt 3 + Vue 3 project with Tailwind via PostCSS
2. Implement warm-ivory background palette
3. Set up typography hierarchy using Playfair/Bodoni fonts
4. Create single page as landing page without any external dependencies or frameworks
5. Ensure static production build generates valid HTML

### Phase 2 - Motion & Polish (Subsequent)

6. Add Inspira UI fade-up animations for scroll-triggered content
7. Implement staggered reveal on sections
8. Micro-interaction polish on buttons and links
9. Subtle background texture pattern

---

## What Changed from Previous Implementation

| Aspect | v1 (HTML/CSS Only) | v2 (Nuxt 3 + Vue + Tailwind) |
|--------|---------------------|-------------------------------|
| **Technologies** | No framework, pure CSS | Nuxt 3, Vue 3 Composition API, Tailwind CSS |
| **Typography** | Generic system fonts | Playfair Display (body) + Bodoni Condensed (headings) |
| **Background** | #ffffff (pure white) | Warm ivory #F5EBD8 with paper grain texture |
| **Animations** | None / static | Subtle fade-up, staggered reveal, micro-interactions |
| **Color Accents** | Generic brown/gray | Sepia #8B5A3B, Deep Espresso #4E342A, Antique Gold |
| **Composition** | Standard centered layout | Asymmetrical editorial balance with left/right sections |
| **Visual Quality** | Basic landing page | Premium boutique antique shop presentation |

---

## Acceptance Criteria - Success Metrics

The design should achieve:

- ✅ Professional appearance comparable to luxury retail websites (Vogue, Bergdorf Goodman)
- ✅ Strong visual hierarchy and clear content flow on mobile-first design
- ✅ Distinctive character without "technology startup" look
- ✅ Subtle motion adding polish without slowing load times
- ✅ Preserved SEO and accessibility features from v1
- ✅ Exportable as static HTML/CSS/JS for production
