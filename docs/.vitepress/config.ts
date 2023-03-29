import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'Podman Recipes',
  description: 'Podman recipes, howtos & cheatsheets',
  base: process.env.NODE_ENV === 'development' ? '' : '/podman/',
  head: [
    ['link', { rel: 'apple-touch-icon', sizes: '180x180', href: '/assets/favicons/apple-touch-icon.png' }],
    ['link', { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/assets/favicons/favicon-32x32.png' }],
    ['link', { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/assets/favicons/favicon-16x16.png' }],
    ['link', { rel: 'manifest', href: '/assets/favicons/site.webmanifest' }],
    ['link', { rel: 'mask-icon', href: '/assets/favicons/safari-pinned-tab.svg', color: '#3a0839' }],
    ['link', { rel: 'shortcut icon', href: '/assets/favicons/favicon.ico' }],
    ['meta', { name: 'msapplication-TileColor', content: '#3a0839' }],
    ['meta', { name: 'msapplication-config', content: '/assets/favicons/browserconfig.xml' }],
    ['meta', { name: 'theme-color', content: '#ffffff' }],
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:url', content: 'https://sistematico.github.io/podman' }],
    ['meta', { property: 'og:title', content: 'Podman Recipes' }],
    ['meta', { property: 'og:description', content: '' }],
    ['meta', { property: 'og:image', content: 'https://sistematico.github.io/podman/img/logo.png' }]
  ],
  locales: {
    root: {
      label: 'English',
      lang: 'en'
    },
    pt_br: {
      label: 'Português',
      lang: 'pt-br'
    }
  },
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: '/img/logo.png',
    nav: [
      { text: 'Home', link: '/' },
      { text: 'CheatSheet', link: '/cheatsheet' },
      { text: 'Recipes', link: '/recipes/' },
      { text: 'Howtos', link: '/howtos/' },
      { text: 'Resources', link: '/resources' }
    ],
    sidebar: [
      {
        text: 'CheatSheet',
        items: [
          { text: 'Pods', link: '/cheatsheet#pods' },
          { text: 'Containers', link: '/cheatsheet#containers' },
          { text: 'Images', link: '/cheatsheet#images' }
        ]
      },
      {
        text: 'Recipes',
        items: [
          { text: 'Nginx', link: '/recipes/nginx' },
          { text: 'Node.js', link: '/recipes/nodejs' },
          { text: 'PostgreSQL', link: '/recipes/postgresql' }
        ]
      },
      {
        text: 'Howtos',
        items: [
          { text: 'Running Pod as Service', link: '/howtos/pod-as-systemd-service' },
          { text: 'Running Container as Service', link: '/howtos/container-as-systemd-service' }
        ]
      },
      { text: 'More', items: [{ text: 'Resources', link: '/resources' }] }
    ],
    editLink: {
      pattern: 'https://github.com/sistematico/podman/edit/main/docs/:path',
      text: 'Edit this page on GitHub'
    },
    lastUpdatedText: 'Updated Date',
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2013-present Lucas Saliés Brum'
    },

    socialLinks: [{ icon: 'github', link: 'https://github.com/sistematico/podman' }]
  }
})
