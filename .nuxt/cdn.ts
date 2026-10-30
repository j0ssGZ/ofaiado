// @ts-ignore - CDN is deprecated in Nuxt 3.x+, but we can use dynamic imports instead
import { cdn as _cdn } from "nuxt/dist/runtime/server/api/legacy-cdn.js";

export default () => ({
  css: [`${_cdn('css', '/app.css')}`],
});
