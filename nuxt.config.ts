// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  ssr: false,
  app: {
    head: {
      link: [{href: "/assets/css/style.css", rel: "stylesheet", type: "text/css"}]
    }
  },
  components: [
    "~/components",
    {
      path: "~/components/global",
      prefix: "g",
      pathPrefix: false,
    },
    {
      path: "~/pages",
      pattern: "*/components/**",
      pathPrefix: false,
    },
  ],
  hooks: {
    "pages:extend"(pages) {
      for (const page of pages) {
        if (page.path.includes("component"))
          pages.splice(pages.indexOf(page), 1);
      }
    },
  },

  modules: ["@unocss/nuxt"],
  css: [
    "@unocss/reset/sanitize/sanitize.css",
    "@unocss/reset/sanitize/assets.css",
    "assets/scss/_vars.scss"
  ],
});
