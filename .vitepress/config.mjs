import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "PaperBeam",
  description: "Now with Flextext",
  themeConfig: {
    logo: '/logo.png',
    nav: [
      { text: 'Products', link: '/products' },
      { text: 'API', link: '/api' },
      {
        text: 'Learning',
        items: [
          { text: 'Documentation', link: '/learning/docs' },
          { text: 'Cheatsheets', link: '/learning/cheatsheets' },
          { text: 'Videos', link: '/learning/videos' }
        ]
      },
      { text: 'Contact', link: '/contact' }
    ],
    sidebar: [
      {
        text: 'Overview',
        items: [
          { text: 'Products', link: '/products' },
          { text: 'API', link: '/api' },
          { text: 'Contact', link: '/contact' }
        ]
      },
      {
        text: 'Learning',
        items: [
          { text: 'Documentation', link: '/learning/docs' },
          { text: 'Cheatsheets', link: '/learning/cheatsheets' },
          { text: 'Videos', link: '/learning/videos' }
        ]
      }
    ]
  }
})