export default defineAppConfig({
  title: '米粒网络-完整短链服务系统',
  email: '34840489@qq.com',
  github: 'https://github.com/xyz007wjm/sink',
  twitter: '#',
  telegram: '#',
  mastodon: '#',
  blog: 'https://blog.honghe365.com',
  description: '完整短链服务系统(非SAAS)',
  image: 'https://sink.cool/banner.png',
  previewTTL: 300, // 5 minutes
  slugRegex: /^[a-z0-9]+(?:-[a-z0-9]+)*$/i,
  reserveSlug: [
    'dashboard',
  ],
})
