export const ptConfig: Object = {
  title: 'Guia do Podman',
  description: 'Podman recipes, howtos & cheatsheets',
  themeConfig: {
    logo: '/img/logo.png',
    nav: [
      { text: 'Início', link: '/pt/' },
      { text: 'CheatSheets', link: '/pt/cheatsheet' },
      { text: 'Tutoriais', link: '/pt/tutoriais/' },
      { text: 'Howtos', link: '/pt/howtos/' },
      { text: 'Dicas & Truques', link: '/pt/dicas/' },
      { text: 'Recursos', link: '/pt/resources' }
    ],
    sidebar: [
      {
        text: 'CheatSheets',
        items: [
          { text: 'Pods', link: '/pt/cheatsheet#pods' },
          { text: 'Containers', link: '/pt/cheatsheet#containers' },
          { text: 'Images', link: '/pt/cheatsheet#images' }
        ]
      },
      {
        text: 'Tutoriais',
        items: [
          { text: 'Nginx', link: '/pt/tutoriais/nginx' },
          { text: 'Node.js', link: '/pt/tutoriais/nodejs' },
          { text: 'PostgreSQL', link: '/pt/tutoriais/postgresql' }
        ]
      },
      {
        text: 'Howtos',
        items: [
          { text: 'Running Pod as Service', link: '/pt/howtos/pod-as-systemd-service' },
          { text: 'Running Container as Service', link: '/pt/howtos/container-as-systemd-service' }
        ]
      },
      {
        text: 'Dicas e Truques',
        items: [
          { text: 'Usando DockerHub', link: '/pt/dicas/usando-o-dockerhub' }
        ]
      },
      { text: 'Mais', items: [{ text: 'Recursos', link: '/pt/resources' }] }
    ],
    editLink: {
      pattern: 'https://github.com/sistematico/podman/edit/main/docs/:path',
      text: 'Editar no GitHub'
    },
    lastUpdatedText: 'Última atualização',
    footer: {
      message: 'Licenciado sob a licença MIT.',
      copyright: 'Copyright © 2013-atual Lucas Saliés Brum'
    },

    socialLinks: [{ icon: 'github', link: 'https://github.com/sistematico/podman' }]
  }
}
