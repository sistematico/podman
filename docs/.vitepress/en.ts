export const enConfig: Object = {
  title: 'Podman Recipes',
  description: 'Podman recipes, howtos & cheatsheets',
  themeConfig: {
    logo: '/img/logo.png',
    nav: [
      { text: 'Home', link: '/' },
      { text: 'CheatSheets', link: '/cheatsheet' },
      { text: 'Recipes', link: '/recipes/' },
      { text: 'Howtos', link: '/howtos/' },
      { text: 'Tips & Tricks', link: '/tips/' },
      { text: 'Resources', link: '/resources' }
    ],
    sidebar: [
      {
        text: 'CheatSheet',
        items: [
          { text: 'Pods', link: '/cheatsheet#pods' },
          { text: 'Containers', link: '/cheatsheet#containers' },
          { text: 'Images', link: '/cheatsheet#images' },
          { text: 'Compose', link: '/cheatsheet#compose' }
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
      {
        text: 'Tips & Tricks',
        items: [
          { text: 'Using DockerHub', link: '/tips/using-dockerhub' }
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
}
