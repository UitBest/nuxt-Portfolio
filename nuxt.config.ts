import vuetify, { transformAssetUrls } from 'vite-plugin-vuetify';

import routerOptions from './app/router.options';

export default defineNuxtConfig({
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      meta: [
        {
          name: 'keywords',
          content:
            'Timo Cuijpers, Timo, Cuijpers, Web Developer, Web, Developer, Frontend, Frontend Developer, Frontend Web Developer, Frontend Web, Web Development, Development, Web, Websites, Website, Webdesign, Web Design, Web Designer, Web, Designer, Web hosting, Hosting, Webhosting, Webhost, Website Best, Ontwikkel websites, Ontwikkel, Websites, Website, Best, Uit Best',
        },
      ],
      link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    },
    pageTransition: { name: 'page', mode: 'out-in' },
  },

  compatibilityDate: '2024-04-03',

  devtools: { enabled: true },

  build: {
    transpile: ['vuetify'],
  },

  modules: ['@nuxtjs/seo', '@nuxt/eslint', 'vuetify-nuxt-module'],

  ssr: true,

  nitro: {
    preset: 'vercel-static',
    prerender: {
      routes: ['/sitemap.xml'],
      failOnError: false,
    },
  },

  serverMiddleware: ['redirect-ssl'],

  routeRules: {
    '/': {
      redirect: { to: '/home', statusCode: 301 },
    },
  },

  vuetify: {
    vuetifyOptions: './plugins/vuetify.config.js',
  },

  sitemap: {
    defaults: {
      lastmod: new Date().toISOString(),
    },
    urls: () => {
      const routes = routerOptions.routes([]).map((route) => route?.path);
      const subRoutes = routerOptions
        .routes([])
        .map((route) => route.children)
        .map((route) => route?.path);
      return [...routes, ...subRoutes];
    },
    excludeAppSources: true,
  },

  site: {
    url: 'https://timo.uit.best',
    name: 'Timo Cuijpers | Portfolio',
  },

  vite: {
    vue: {
      template: {
        transformAssetUrls,
      },
    },
  },
});
