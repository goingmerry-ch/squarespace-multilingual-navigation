
export default {
  base: process.env.GITHUB_REPOSITORY ? `/${ process.env.GITHUB_REPOSITORY.split('/')[1] }/` : '/',
  locales: {
    root: {
      label: 'English',
      lang: 'en',
    },
    fr: {
      label: 'Français',
      lang: 'fr',
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
  themeConfig: {
    siteTitle: 'Squarespace Multilingual Navigation',
    logo: '/logo.png',
    nav: [
      { text: 'Guide', link: '/guide' },
      { text: 'Demo', link: '/demo' },
      { text: 'Github', link: 'https://example.com' }
    ],
    sidebar: {
      '/guide': [
        {
          text: 'Guide',
          items: [
            { text: 'Hreflangs', link: '/guide/' },
            { text: 'Scripts', link: '/guide/' },
            { text: 'Navigation', link: '/guide/' }
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