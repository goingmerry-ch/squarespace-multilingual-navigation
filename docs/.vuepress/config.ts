import { defineConfig } from "vuepress/config";

export default defineConfig({
  base: process.env.GITHUB_REPOSITORY ? `/${ process.env.GITHUB_REPOSITORY.split('/')[1] }/` || '/',
  locales: {
    '/': {
      lang: 'en',
      title: 'Squarespace Multilingual Navigation',
      description: 'An easy and free alternative to add multilingual navigation to your squarespace website'
    },
    '/fr/': {
      lang: 'fr',
      title: 'Navigation Multilingual Squarespace',
      description: 'Une alternative facile et gratuite pour ajouter une navigation multilingue à votre site Squarespace.'
    },
  },
  markdown: {
    toc: { includeLevel: [2,3] }
  },
  themeConfig: {
    logo: '/logo.png',
    nav: [
      { text: 'Guide', link: '/guide' },
      { text: 'Demo', link: '/demo' },
      { text: 'Github', link: 'https://example.com' }
    ],
    sidebar: {
      '/': [
        '',
        'guide',
        'about'
      ],
      '/fr': [
        '',
        'guide',
        'a-propos'
      ]
    }
  }
})