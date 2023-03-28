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
  description: 'Podman recipes, howtos & cheatsheets',
  base: process.env.NODE_ENV === 'development' ? '' : '/podman/',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'CheatSheet', link: '/cheatsheet' },
      { text: 'Recipes', link: '/recipes/' },
      { text: 'Howtos', link: '/howtos/' },
      { text: 'Resources', link: '/resources' }
    ],

    sidebar: [
      { text: 'CheatSheet', items: [
        { text: 'Pods', link: '/cheatsheet#pods' },
        { text: 'Containers', link: '/cheatsheet#containers' }
      ]},
      { text: 'Recipes', items: [
        { text: 'Nginx', link: '/recipes/nginx' },
        { text: 'PostgreSQL', link: '/recipes/postgresql' }
      ]},
      { text: 'Howtos', items: [{ text: 'Running Pod as Service', link: '/howtos/pod-as-systemd-service' }]},
      { text: 'More', items: [{ text: 'Resources', link: '/resources' }]}
    ],

    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2013-present Lucas Saliés Brum'
    },

    socialLinks: [{ icon: 'github', link: 'https://github.com/sistematico/podman' }]
  }
  // vite: {
  //   plugins: [SearchPlugin(options)]
  // }
})
