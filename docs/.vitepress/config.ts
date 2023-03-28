import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Podman Recipes",
  description: "Podman recipes, cheatsheets & examples",
  base: '/podman/',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Recipes', link: '/recipes' }
    ],

    sidebar: [
      {
        text: 'Recipes',
        items: [
          { text: 'PostgreSQL', link: '/recipes/postgresql' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/sistematico/podman' }
    ]
  }
})
