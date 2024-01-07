import { HeadConfig } from 'vitepress'

const base = process.env.GITHUB_REPOSITORY ? `/${ process.env.GITHUB_REPOSITORY.split('/')[1] }/` : '/'
const fullBase = 'https://' + process.env.GITHUB_REPOSITORY_OWNER + '.github.io' + base 

export default {
  base: base,
  srcDir: 'pages',
  locales: {
    en: {
      label: 'English',
      lang: 'en',
      dir: 'en',
      link: '/en/guide'
    },
    fr: {
      label: 'Français',
      lang: 'fr',
      dir: 'fr',
      link: '/fr/guide'
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