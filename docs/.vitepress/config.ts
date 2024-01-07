import { HeadConfig } from 'vitepress'

const base = process.env.GITHUB_REPOSITORY ? `/${ process.env.GITHUB_REPOSITORY.split('/')[1] }/` : '/'
const fullBase = 'https://' + process.env.GITHUB_REPOSITORY_OWNER + '.github.io' + base 

export default {
  base: base,
  ignoreDeadLinks: true,
  srcDir: 'content',
  title: 'Squarespace Mutlingual Navigation',
  description: 'An easy and free multilingual navigation for Squarespace',
  locales: {
    en: {
      label: 'English',
      lang: 'en',
      dir: 'en',
      link: '/en/guide',
      title: 'Squarespace Mutlingual Navigation',
      description: 'Easy and free implementation of multilingual navigation for Squarespace',
      themeConfig: {
        nav: [
          { text: 'Guide', link: '/en/guide/' },
          { text: 'About', link: '/en/about' },
          { text: 'Github', link: 'https://github.com/goingmerry-ch/squarespace-multilingual-navigation' }
        ],
      }
    },
    fr: {
      label: 'Français',
      lang: 'fr',
      dir: 'fr',
      link: '/fr/guide',
      title: 'Navigation Multilingue sur Squarespace',
      description: 'Implementez une navigation multilingue sur Squarespace gratuitement et facilement',
      themeConfig: {
        nav: [
          { text: 'Guide', link: './guide' },
          { text: 'A Propos', link: './a-propos' },
          { text: 'Github', link: 'https://github.com/goingmerry-ch/squarespace-multilingual-navigation' }
        ],
      }
    },
  },
  head: [
    process.env.VITE_GOOGLE_ANALYTICS_ID ? 
    [
      'script',
      { async: '', src: `https://www.googletagmanager.com/gtag/js?id=${process.env.VITE_GOOGLE_ANALYTICS_ID}` }
    ] : [],
    process.env.VITE_GOOGLE_ANALYTICS_ID ? [
      'script',
      {},
      `window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', '${process.env.VITE_GOOGLE_ANALYTICS_ID}');`
    ] : []
  ],
  async transformHead({ pageData }) {
    const head: HeadConfig[] = []
    const alternates = pageData.frontmatter.alternates
    if (alternates) {
      alternates.forEach(({href, hreflang}) => {
        head.push([
          'link',
          {
            rel: 'alternate',
            href: fullBase + href,
            hreflang: hreflang
          }
        ])
      })
    }
    return head
  },
  themeConfig: {
    siteTitle: 'Squarespace Multilingual Navigation',
    logo: '/logo.png',
    nav: [
      { text: 'Guide', link: './guide' },
      { text: 'About', link: './about' },
      { text: 'Github', link: 'https://github.com/goingmerry-ch/squarespace-multilingual-navigation' }
    ],
    sidebar: {
      '/en/guide': [
        {
          text: 'Guide',
          items: [
            { text: 'Hreflangs', link: './en/guide' },
            { text: 'Scripts', link: './en/guide' },
            { text: 'Navigation', link: './en/guide' }
          ]
        }
      ],
      '/fr/guide': [
        {
          text: 'Guide',
          items: [
            { text: 'Hreflangs', link: '/fr/guide/' },
            { text: 'Scripts', link: '/fr/guide/' },
            { text: 'Navigation', link: '/fr/guide/' }
          ]
        }
      ]
    },
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2023-present Goingmerry'
    }
  }
}