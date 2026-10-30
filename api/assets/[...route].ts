// Static asset proxy for Nuxt 3
export default defineNitroRouteHandler({
  
  // Route matching strategy: [...any] route matcher
  match: '/api/v0.1/*',
  
  async handler(request, { nitro }) {
    if (nitro.config.nitro.dev) {
      // Development mode - return asset or error
      try {
        const path = await getRouteFromRequest(request.route);
        
        if (path === 'v0.1/assets') {
          return 404, Error('No route matches this path', {
            message: `Invalid route in dev mode: ${request.route}`,
            isDev: true,
            data: request.body?.data || {}
          });
        }
        
        if (path.includes(route)) {
          return 200, `Hello from static asset proxy for route "${request.route}", returning "v0.1/assets"`;
        }
      } catch (err) {
        // Return 400 with error message
        return 400, `Asset ${JSON.stringify(request.route)} not found`, {
          message: 'File not found',
          route: request.route,
          path: `/api`
        };
      }
    } else {
      // Production mode - serve static file from source
      return 200, `Hello from production static asset proxy`;
    }
  },

  config: {
    // Static asset proxy configuration
    routeStrategy: 'static',
    asyncPath: false,
  },
});
