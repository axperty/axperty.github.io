import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "Axperty",
  description: "Creating Minecraft content that focuses on details and the player experience.",
  head: [
    ['link', { rel: 'icon', href: '/assets/avatar.png' }],
    ['meta', { name: 'theme-color', content: '#b38b59' }],
    ['meta', { property: 'og:title', content: 'Axperty' }],
    ['meta', { property: 'og:description', content: 'Creating Minecraft content that focuses on details and the player experience.' }],
    ['meta', { property: 'og:image', content: 'https://axperty.com/assets/hero.png' }],
    ['meta', { name: 'twitter:card', content: 'summary_large_image' }],
    ['meta', { name: 'twitter:image', content: 'https://axperty.com/assets/hero.png' }]
  ],
  sitemap: {
    hostname: 'https://axperty.com'
  },
  themeConfig: {
    search: {
      provider: 'local'
    },
    logo: '/assets/avatar.png',
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Projects', link: '/projects' },
      { text: 'Donate', link: '/donate' }
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/axperty' },
      { icon: 'discord', link: 'https://discord.gg/v2QqhXKsaQ' },
      { icon: 'youtube', link: 'https://www.youtube.com/@axperty' }
    ],
    footer: {
      message: '<a href="/privacy">Privacy Policy</a> <br/>Not an official Minecraft product. Not approved by or associated with Mojang or Microsoft. <br/>All other trademarks and logos are property of their respective owners.<br>',
      copyright: 'Copyright © 2026 Axperty. Website source code is under the MIT License.'
    }
  }
})
