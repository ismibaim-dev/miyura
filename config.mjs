import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'Miyura',
  description: 'A free and open source manga, webtoon, and comics reader you can use anywhere.',
  lang: 'en-US',
  cleanUrls: true,

  head: [
    ['link', { rel: 'icon', type: 'image/svg+xml', href: '/logo.svg' }],
    ['link', { rel: 'apple-touch-icon', href: '/logo.svg' }],
    ['meta', { name: 'theme-color', content: '#0e0e10' }],
    ['meta', { property: 'og:title', content: 'Miyura — Read manga, webtoons, and comics anywhere' }],
    ['meta', { property: 'og:description', content: 'Free, open source, ad-free reader for manga, webtoons, and comics. Install on iOS or Android as a web app.' }],
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { name: 'twitter:card', content: 'summary_large_image' }],
    // Manifest for installable web app
    ['link', { rel: 'manifest', href: '/manifest.webmanifest' }]
  ],

  themeConfig: {
    logo: '/logo.svg',
    siteTitle: 'Miyura',

    nav: [
      { text: 'Home', link: '/' },
      { text: 'Guide', link: '/guide/' },
      { text: 'Contribute', link: '/contributing/' },
      { text: 'Download', link: '/guide/install' }
    ],

    sidebar: {
      '/guide/': [
        {
          text: 'Getting started',
          items: [
            { text: 'Introduction', link: '/guide/' },
            { text: 'Install on your device', link: '/guide/install' },
            { text: 'Adding sources', link: '/guide/sources' },
            { text: 'Reader basics', link: '/guide/reader' }
          ]
        },
        {
          text: 'About',
          items: [
            { text: 'License', link: '/guide/license' },
            { text: 'Credits', link: '/guide/credits' }
          ]
        }
      ],
      '/contributing/': [
        {
          text: 'Contributing',
          items: [
            { text: 'Overview', link: '/contributing/' },
            { text: 'Contributing guide', link: '/contributing/guide' },
            { text: 'Style guide', link: '/contributing/style-guide' },
            { text: 'Code of conduct', link: '/contributing/code-of-conduct' }
          ]
        }
      ]
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/miyura' }
    ],

    footer: {
      message: 'Released under the Apache License 2.0.',
      copyright: 'Built by the community. Free and open source forever.'
    },

    search: {
      provider: 'local'
    },

    outline: {
      level: [2, 3]
    }
  }
})
