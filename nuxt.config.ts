export default defineNuxtConfig({
  // Static site generation - no server required for production
  dev: process.env.NODE_ENV !== 'production',
  
  modules: [],
  
  // CSS configuration
  css: [
    'src/app.css'
  ],
  
  // Tailwind config
  tailwindcss: {
    css: '\$font-family-definitions;',
  },
  
  compatibilityDate: '2024-01-01',
  
  // Build configuration for production
  nitro: {
    prerender: {
      full: process.env.NODE_ENV === 'development',
    }
  }
})
