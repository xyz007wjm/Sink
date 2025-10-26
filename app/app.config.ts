export default defineAppConfig({
  title: '米粒科技-短链服务-Cn-url.cn',
  email: '34840489@qq.com',
  github: 'https://github.com/xyz007wjm/sink',
  twitter: '#',
  telegram: '#',
  mastodon: '#',
  blog: '#',
  description: 'A Simple / Speedy / Secure Link Shortener with Analytics, 100% run on Cloudflare.',
  image: 'https://sink.cool/banner.png',
  previewTTL: 300, // 5 minutes
  slugRegex: /^[a-z0-9]+(?:-[a-z0-9]+)*$/i,
  reserveSlug: [
    'dashboard',
  ],
})
