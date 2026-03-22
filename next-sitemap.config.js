/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || 'https://ananthawebsolutions.com',
  generateRobotsTxt: true,
  generateIndexSitemap: false,
  exclude: ['/api/*', '/404'],
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/admin/']
      },
      {
        userAgent: 'Googlebot',
        allow: '/',
      },
      {
        userAgent: 'Bingbot',
        allow: '/',
      }
    ],
    additionalSitemaps: [
      'https://ananthawebsolutions.com/sitemap.xml',
    ],
  },
  changefreq: 'weekly',
  priority: 0.7,
  sitemapSize: 5000,
  transform: async (config, path) => {
    // Custom priority for different pages
    let priority = 0.7
    let changefreq = 'weekly'

    // Home page - highest priority
    if (path === '/') {
      priority = 1.0
      changefreq = 'daily'
    }
    // Main pages - high priority
    else if (['/services', '/about', '/contact', '/industries'].includes(path)) {
      priority = 0.9
      changefreq = 'weekly'
    }
    // Service pages - medium-high priority
    else if (path.startsWith('/services/')) {
      priority = 0.8
      changefreq = 'weekly'
    }
    // Legal pages - lower priority
    else if (['/privacy-policy', '/terms-and-conditions', '/cookies'].includes(path)) {
      priority = 0.5
      changefreq = 'monthly'
    }

    return {
      loc: path,
      changefreq,
      priority,
      lastmod: new Date().toISOString(),
    }
  },
}

