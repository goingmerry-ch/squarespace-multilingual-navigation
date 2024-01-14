import { HeadConfig } from 'vitepress'

const base = process.env.GITHUB_REPOSITORY ? `/${ process.env.GITHUB_REPOSITORY.split('/')[1] }/` : '/'
const fullBase = 'https://' + process.env.VITE_HOSTNAME + base 

export default {
  base: base,
  ignoreDeadLinks: true,
  srcDir: 'content',
  title: 'Squarespace Mutlingual Navigation',
  description: 'An easy and free multilingual navigation for Squarespace',
  sitemap: {
    hostname: fullBase
  },
  locales: {
    en: {
      label: 'English',
      lang: 'en',
      dir: 'en',
      link: '/en/',
      title: 'Squarespace Mutlingual Navigation',
      description: 'Easy and free implementation of multilingual navigation for Squarespace',
      themeConfig: {
        nav: [
          { text: 'Guide', link: '/en/guide/' },
          { text: 'FAQ', link: '/en/faq' },
          { text: 'Github', link: 'https://github.com/goingmerry-ch/squarespace-multilingual-navigation' }
        ],
      }
    },
    fr: {
      label: 'Français',
      lang: 'fr',
      dir: 'fr',
      link: '/fr/',
      title: 'Navigation Multilingue sur Squarespace',
      description: 'Implementez une navigation multilingue sur Squarespace gratuitement et facilement',
      themeConfig: {
        nav: [
          { text: 'Guide', link: '/fr/guide/' },
          { text: 'Questions Frequentes', link: '/fr/faq' },
          { text: 'Github', link: 'https://github.com/goingmerry-ch/squarespace-multilingual-navigation' }
        ],
      }
    },
  },
  head: [
    process.env.VITE_GOOGLE_ANALYTICS_ID ? 
    [
      'script',
      { async: '', src: `https://${ process.env.VITE_GOOGLE_TAG_MANAGER }/gtag/js?id=${process.env.VITE_GOOGLE_ANALYTICS_ID}` }
    ] : [],
    process.env.VITE_GOOGLE_ANALYTICS_ID ? [
      'script',
      {},
      `window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', '${process.env.VITE_GOOGLE_ANALYTICS_ID}', {
        server_container_url: 'https://${ process.env.VITE_GOOGLE_TAG_MANAGER }',
      });`
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
    sidebar: {
      '/en/guide/': [
        {
          text: 'Guide',
          items: [
            { text: 'Quick Start', link: '/en/guide/start' },
            { text: 'Preparation', link: '/en/guide/preparation' },
            { text: 'Alternates', link: '/en/guide/hreflangs' },
            { text: 'Code Insertion', link: '/en/guide/injection' }
            
          ]
        }
      ],
      '/fr/guide/': [
        {
          text: 'Guide',
          items: [
            { text: 'Demarrage Rapide', link: '/fr/guide/start' },
            { text: 'Preparation', link: '/fr/guide/preparation' },
            { text: 'Alternates', link: '/fr/guide/hreflangs' },
            { text: 'Insertion', link: '/fr/guide/injection' },
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