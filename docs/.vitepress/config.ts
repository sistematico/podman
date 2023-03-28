import { defineConfig } from 'vitepress'
// import { SearchPlugin } from 'vitepress-plugin-search'

// const flexSearchIndexOptions = ["title", "description", "keywords", "body", "anchor"]

// let options = {
//   flexSearchIndexOptions,
//   previewLength: 62,
//   buttonLabel: 'Search',
//   placeholder: 'Search docs'
// }

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'Podman Recipes',
  description: 'Podman recipes, cheatsheets & examples',
  base: process.env.NODE_ENV === 'development' ? '' : '/podman/',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Recipes', link: '/recipes/' }
    ],

    sidebar: [
      {
        text: 'Recipes',
        items: [{ text: 'PostgreSQL', link: '/recipes/postgresql' }]
      }
    ],

    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2013-present Lucas Saliés Brum'
    },

    socialLinks: [{ icon: 'github', link: 'https://github.com/sistematico/podman' }]
  },
  // vite: {
  //   plugins: [SearchPlugin(options)]
  // }
})
