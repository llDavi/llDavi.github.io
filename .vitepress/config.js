import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'davi',
  description: 'Hacking, one page at a time.',
  srcDir: 'src',
  cleanUrls: true,
  appearance: 'force-dark',

  head: [
    // CSP — restricts resource loading to prevent XSS and data injection
    ['meta', {
      'http-equiv': 'Content-Security-Policy',
      content: [
        "default-src 'self'",
        "script-src 'self' 'unsafe-inline'",
        "style-src 'self' 'unsafe-inline' https://cdnjs.cloudflare.com",
        "font-src 'self' https://cdnjs.cloudflare.com",
        "img-src 'self' data:",
        "connect-src 'self'",
        "base-uri 'self'",
        "form-action 'self'",
      ].join('; ')
    }],
    // Font Awesome — SRI hash prevents CDN tampering
    ['link', {
      rel: 'stylesheet',
      href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css',
      integrity: 'sha384-/o6I2CkkWC//PSjvWC/eYN7l3xM3tJm8ZzVkCOfp//W05QcE3mlGskpoHB6XqI+B',
      crossorigin: 'anonymous',
    }],
  ],

  themeConfig: {
    logo: null,
    siteTitle: false,

    nav: [
      { text: 'Home', link: '/' },
    ],

    sidebar: [
      {
        text: '🎙️ Il Podcast',
        items: [
          { text: 'Tutti gli episodi', link: '/episodi/' },
        ]
      },
      {
        text: '📼 Stagione 1',
        collapsed: false,
        items: [
          { text: 'E01 — Unlimited', link: '/episodi/stagione-1/ep01-unlimited' },
          { text: 'E02 — Operazione Fantasma', link: '/episodi/stagione-1/ep02-operazione-fantasma' },
          { text: 'E03 — Il Principe Nigeriano', link: '/episodi/stagione-1/ep03-il-principe-nigeriano' },
          { text: 'E04 — Il Mercato più Pericoloso del Mondo', link: '/episodi/stagione-1/ep04-il-mercato-piu-pericoloso' },
        ]
      },
      {
        text: '🔜 Stagione 2',
        collapsed: true,
        items: [
          { text: 'Prossimamente...', link: '/episodi/' },
        ]
      },
    ],

    search: {
      provider: 'local'
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/lldavi' }
    ],
  }
})
