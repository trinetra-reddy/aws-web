import Head from 'next/head'

interface SEOProps {
  title?: string
  description?: string
  keywords?: string
  ogImage?: string
  ogType?: string
  canonical?: string
  noindex?: boolean
  structuredData?: object
}

export default function SEO({
  title = 'Anantha Web Solutions | Anantha Digital | Best Website Developers | Digital Marketing | SEO Services',
  description = 'Anantha Web Solutions (Anantha Digital) - Best website developers, digital marketing agency, SEO experts in India, Andhra Pradesh, Telangana, Anantapur, USA, Canada. Web development, mobile apps, e-commerce, SEO, GEO, social media marketing, digital marketing services. Transform your business with innovative digital solutions.',
  keywords = 'Anantha Web Solutions, Anantha Digital, best website developers, digital marketing agency, SEO services, SEO company, digital marketing services, social media marketing, social media management, content marketing, email marketing, PPC advertising, Google Ads, Facebook Ads, Instagram marketing, LinkedIn marketing, influencer marketing, brand management, online marketing, internet marketing, search engine optimization, local SEO, technical SEO, on-page SEO, off-page SEO, SEO audit, keyword research, link building, GEO optimization, generative engine optimization, AI SEO, marketing automation, marketing management, growth marketing, performance marketing, conversion rate optimization, CRO, web analytics, Google Analytics, marketing strategy, digital strategy, web development company, website developers in India, website developers in Andhra Pradesh, website developers in Telangana, website developers in Anantapur, website developers in USA, website developers in Canada, web development India, mobile app development, e-commerce solutions, e-commerce SEO, Shopify SEO, WooCommerce SEO, UI/UX design, cloud services, DevOps, Adobe Experience Manager, AEM, digital transformation, custom web development, responsive website design, professional web developers, WordPress development, React development, Next.js development, Node.js development, full-stack development, frontend development, backend development, API development, progressive web apps, PWA, mobile-first design, website redesign, website maintenance, website optimization, page speed optimization, Core Web Vitals, mobile optimization, voice search optimization, video marketing, YouTube marketing, TikTok marketing, Twitter marketing, Pinterest marketing, Snapchat marketing, WhatsApp marketing, chatbot marketing, marketing funnel, lead generation, customer acquisition, customer retention, brand awareness, online reputation management, ORM, review management, local business marketing, small business marketing, startup marketing, enterprise marketing, B2B marketing, B2C marketing, ecommerce marketing, SaaS marketing, app marketing, ASO, app store optimization, mobile marketing, SMS marketing, push notifications, retargeting, remarketing, affiliate marketing, referral marketing, viral marketing, guerrilla marketing, experiential marketing, event marketing, webinar marketing, podcast marketing, blog marketing, guest posting, PR marketing, press release, media buying, programmatic advertising, display advertising, native advertising, video advertising, mobile advertising, social commerce, shoppable posts, Instagram shopping, Facebook marketplace, Google Shopping, Amazon marketing, marketplace optimization, multi-channel marketing, omnichannel marketing, cross-channel marketing, marketing attribution, marketing ROI, marketing metrics, KPI tracking, A/B testing, multivariate testing, heat mapping, user behavior analysis, customer journey mapping, persona development, market research, competitor analysis, SWOT analysis, marketing plan, go-to-market strategy, product launch, brand positioning, brand identity, logo design, graphic design, creative services, copywriting, content writing, blog writing, article writing, technical writing, UX writing, email copywriting, ad copywriting, landing page optimization, conversion copywriting, storytelling, brand storytelling, visual content, infographics, motion graphics, animation, video production, photography, image optimization, alt text optimization, schema markup, structured data, rich snippets, featured snippets, knowledge graph, Google My Business, GMB optimization, local citations, NAP consistency, directory listings, review generation, reputation monitoring, crisis management, community management, social listening, sentiment analysis, influencer outreach, partnership marketing, co-marketing, joint ventures, strategic alliances, channel partnerships, reseller programs, white label services, agency services, consulting services, training services, workshops, webinars, online courses, certification programs, marketing tools, marketing software, CRM integration, Salesforce, HubSpot, Marketo, Mailchimp, Hootsuite, Buffer, Sprout Social, SEMrush, Ahrefs, Moz, Google Search Console, Bing Webmaster Tools, Yoast SEO, Rank Math, marketing dashboard, reporting tools, data visualization, business intelligence, predictive analytics, machine learning marketing, AI marketing, chatGPT marketing, automation tools, workflow automation, Zapier integration, API integration, third-party integrations, plugin development, custom solutions, scalable solutions, enterprise solutions, cloud-based solutions, SaaS solutions, mobile solutions, cross-platform solutions, hybrid solutions, native solutions, international marketing, global marketing, multilingual SEO, geo-targeting, location-based marketing, proximity marketing, beacon marketing, NFC marketing, QR code marketing, augmented reality marketing, AR marketing, virtual reality marketing, VR marketing, metaverse marketing, NFT marketing, blockchain marketing, cryptocurrency marketing, Web3 marketing, decentralized marketing, privacy-first marketing, GDPR compliance, data privacy, ethical marketing, sustainable marketing, green marketing, cause marketing, purpose-driven marketing, inclusive marketing, accessibility marketing, ADA compliance, WCAG compliance, mobile accessibility, voice accessibility, screen reader optimization, keyboard navigation, color contrast, readable fonts, clear CTAs, user-friendly design, intuitive navigation, fast loading, secure website, SSL certificate, HTTPS, website security, malware protection, DDoS protection, backup solutions, disaster recovery, uptime monitoring, performance monitoring, error tracking, bug fixing, quality assurance, testing services, UAT, user acceptance testing, beta testing, load testing, stress testing, security testing, penetration testing, vulnerability assessment, code review, code optimization, clean code, best practices, coding standards, version control, Git, GitHub, GitLab, Bitbucket, CI/CD, continuous integration, continuous deployment, DevOps services, cloud hosting, AWS, Azure, Google Cloud, DigitalOcean, Heroku, Netlify, Vercel, serverless, microservices, containerization, Docker, Kubernetes, infrastructure as code, Terraform, monitoring tools, logging tools, analytics tools, business metrics, growth metrics, vanity metrics, actionable metrics, north star metric, pirate metrics, AARRR, acquisition, activation, retention, revenue, referral, customer lifetime value, CLV, customer acquisition cost, CAC, return on ad spend, ROAS, cost per click, CPC, cost per impression, CPM, click-through rate, CTR, conversion rate, bounce rate, exit rate, time on site, pages per session, session duration, new vs returning visitors, traffic sources, organic traffic, paid traffic, direct traffic, referral traffic, social traffic, email traffic, mobile traffic, desktop traffic, tablet traffic, browser analytics, device analytics, demographic analytics, geographic analytics, behavioral analytics, psychographic analytics, technographic analytics, firmographic analytics, intent data, first-party data, second-party data, third-party data, zero-party data, data collection, data analysis, data interpretation, data-driven decisions, data-driven marketing, evidence-based marketing, scientific marketing, growth hacking, lean marketing, agile marketing, scrum marketing, sprint planning, retrospectives, stand-ups, kanban boards, project management, task management, time management, resource management, budget management, vendor management, stakeholder management, client management, account management, relationship management, customer success, customer support, customer service, help desk, ticketing system, knowledge base, FAQ, documentation, user guides, tutorials, video tutorials, screen recordings, demos, presentations, proposals, case studies, white papers, ebooks, guides, checklists, templates, frameworks, methodologies, processes, workflows, SOPs, standard operating procedures, best practices, industry standards, benchmarks, competitive analysis, market analysis, trend analysis, forecasting, planning, strategy, tactics, execution, optimization, iteration, experimentation, innovation, creativity, problem-solving, critical thinking, analytical thinking, strategic thinking, design thinking, systems thinking, holistic approach, integrated approach, comprehensive solutions, end-to-end services, full-service agency, boutique agency, specialized agency, niche agency, vertical-specific, industry-specific, healthcare marketing, finance marketing, real estate marketing, education marketing, hospitality marketing, travel marketing, automotive marketing, retail marketing, fashion marketing, beauty marketing, fitness marketing, wellness marketing, food marketing, restaurant marketing, legal marketing, professional services marketing, technology marketing, software marketing, hardware marketing, electronics marketing, gaming marketing, entertainment marketing, media marketing, publishing marketing, nonprofit marketing, government marketing, political marketing, advocacy marketing, fundraising, donor acquisition, volunteer recruitment, awareness campaigns, public service announcements, PSA, cause awareness, social impact, community engagement, corporate social responsibility, CSR, sustainability initiatives, environmental marketing, eco-friendly marketing, carbon-neutral marketing, net-zero marketing, circular economy, sharing economy, gig economy, creator economy, passion economy, attention economy, experience economy, subscription economy, membership economy, freemium model, premium model, tiered pricing, dynamic pricing, value-based pricing, competitive pricing, penetration pricing, skimming pricing, psychological pricing, charm pricing, prestige pricing, bundle pricing, upselling, cross-selling, downselling, order bumps, one-time offers, OTO, limited-time offers, scarcity marketing, urgency marketing, FOMO marketing, social proof, testimonials, reviews, ratings, case studies, success stories, before-after, transformations, results, outcomes, benefits, features, advantages, unique selling proposition, USP, value proposition, brand promise, brand values, brand mission, brand vision, brand personality, brand voice, brand tone, brand guidelines, style guide, visual identity, color palette, typography, iconography, imagery, photography style, illustration style, design system, component library, pattern library, UI kit, design tokens, accessibility guidelines, inclusive design, universal design, human-centered design, user-centered design, customer-centric, client-focused, results-oriented, ROI-focused, performance-driven, data-backed, research-based, tested, proven, reliable, trustworthy, credible, authoritative, expert, professional, experienced, skilled, talented, creative, innovative, cutting-edge, modern, contemporary, trendy, stylish, elegant, sophisticated, premium, luxury, high-end, boutique, exclusive, bespoke, custom, tailored, personalized, customized, flexible, adaptable, scalable, robust, powerful, efficient, effective, fast, quick, rapid, speedy, instant, immediate, real-time, 24/7, round-the-clock, always-on, responsive, mobile-friendly, mobile-optimized, mobile-first, tablet-friendly, desktop-optimized, cross-browser, cross-platform, cross-device, compatible, accessible, inclusive, user-friendly, easy-to-use, intuitive, simple, straightforward, clear, transparent, honest, ethical, responsible, sustainable, eco-friendly, green, carbon-neutral, environmentally conscious, socially responsible, community-focused, people-first, customer-first, quality-focused, excellence-driven, award-winning, certified, accredited, verified, validated, endorsed, recommended, top-rated, highly-rated, 5-star, best-in-class, industry-leading, market-leading, pioneering, groundbreaking, revolutionary, game-changing, transformative, disruptive, innovative solutions, creative solutions, smart solutions, intelligent solutions, AI-powered, machine learning, deep learning, neural networks, natural language processing, NLP, computer vision, image recognition, voice recognition, speech recognition, chatbots, virtual assistants, conversational AI, predictive analytics, prescriptive analytics, descriptive analytics, diagnostic analytics, big data, data science, data engineering, data warehousing, data lakes, ETL, data pipelines, real-time analytics, streaming analytics, edge computing, fog computing, quantum computing, blockchain technology, distributed ledger, smart contracts, DeFi, decentralized finance, Web3, metaverse, virtual worlds, digital twins, IoT, Internet of Things, connected devices, smart devices, wearables, sensors, beacons, RFID, NFC, QR codes, AR, augmented reality, VR, virtual reality, MR, mixed reality, XR, extended reality, 3D, immersive experiences, interactive experiences, gamification, game mechanics, rewards, badges, leaderboards, challenges, quests, missions, achievements, progress tracking, personalization, customization, recommendation engines, collaborative filtering, content-based filtering, hybrid filtering, dynamic content, adaptive content, responsive content, progressive enhancement, graceful degradation, backwards compatibility, forwards compatibility, future-proof, evergreen content, timeless content, seasonal content, trending content, viral content, shareable content, engaging content, compelling content, persuasive content, converting content, educational content, informative content, entertaining content, inspiring content, motivating content, empowering content, actionable content, practical content, useful content, valuable content, relevant content, targeted content, segmented content, personalized content, localized content, translated content, transcreated content, culturally adapted, globally relevant, locally optimized, glocal approach, think global act local, international expansion, market entry, market penetration, market development, product development, diversification, growth strategies, scaling strategies, exit strategies, acquisition strategies, merger strategies, partnership strategies, collaboration strategies, co-creation, crowdsourcing, open innovation, design sprints, rapid prototyping, MVP, minimum viable product, lean startup, build-measure-learn, pivot, persevere, iterate, validate, test, experiment, hypothesis, assumption, risk, uncertainty, opportunity, threat, strength, weakness, competitive advantage, differentiation, positioning, segmentation, targeting, niche marketing, mass marketing, one-to-one marketing, account-based marketing, ABM, demand generation, lead nurturing, sales enablement, sales funnel, marketing funnel, conversion funnel, customer journey, touchpoints, moments of truth, pain points, gain points, jobs to be done, JTBD, customer needs, customer wants, customer desires, customer expectations, customer satisfaction, customer delight, customer loyalty, customer advocacy, brand advocates, brand ambassadors, word-of-mouth, WOM, referrals, recommendations, testimonials, case studies, social proof, trust signals, credibility indicators, authority markers, expertise demonstration, thought leadership, industry expertise, domain knowledge, subject matter experts, SME, consultants, advisors, strategists, specialists, generalists, full-stack marketers, T-shaped marketers, pi-shaped marketers, comb-shaped marketers, versatile, multi-skilled, cross-functional, collaborative, team players, communicators, presenters, storytellers, educators, trainers, mentors, coaches, leaders, managers, directors, executives, C-suite, CMO, chief marketing officer, VP marketing, marketing director, marketing manager, digital marketing manager, SEO manager, content manager, social media manager, community manager, brand manager, product marketing manager, growth manager, performance manager, analytics manager, CRM manager, email marketing manager, paid media manager, organic media manager, earned media manager, owned media',
  ogImage = 'https://ananthadigital.com/assets/logos/ananthaweb.png',
  ogType = 'website',
  canonical,
  noindex = false,
  structuredData
}: SEOProps) {
  const siteUrl = 'https://ananthadigital.com'
  const fullTitle = title.includes('Anantha') ? title : `${title} | Anantha Web Solutions`
  const canonicalUrl = canonical || siteUrl

  return (
    <Head>
      {/* Primary Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="title" content={fullTitle} />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      
      {/* Robots */}
      {noindex ? (
        <meta name="robots" content="noindex, nofollow" />
      ) : (
        <meta name="robots" content="index, follow" />
      )}
      
      {/* Canonical URL */}
      <link rel="canonical" href={canonicalUrl} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:site_name" content="Anantha Web Solutions" />
      <meta property="og:locale" content="en_US" />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={canonicalUrl} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      
      {/* Additional Meta Tags */}
      <meta name="author" content="Anantha Web Solutions" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
      <meta name="language" content="English" />
      <meta name="revisit-after" content="7 days" />
      
      {/* Geo Tags */}
      <meta name="geo.region" content="IN-AP" />
      <meta name="geo.placename" content="Andhra Pradesh" />
      <meta name="geo.position" content="14.6600224;77.5504773" />
      <meta name="ICBM" content="14.6600224, 77.5504773" />
      
      {/* Structured Data */}
      {structuredData && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      )}
    </Head>
  )
}

// Helper function to generate Organization structured data
export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Anantha Web Solutions",
  "alternateName": ["Anantha Digital", "Anantha Web Solutions Pvt Ltd", "Best Website Developers India"],
  "url": "https://ananthadigital.com",
  "logo": "https://ananthadigital.com/assets/logos/ananthaweb.png",
  "description": "Best website developers and digital marketing agency in India, Andhra Pradesh, Telangana, Anantapur, USA, and Canada. Leading web development, mobile app development, SEO services, digital marketing, social media marketing, and custom digital solutions provider.",
  "slogan": "Transform Your Business with Expert Web Development & Digital Marketing",
  "keywords": "best website developers, digital marketing agency, SEO services, social media marketing, web development India, Anantha Web Solutions, Anantha Digital",
  "makesOffer": [
    {
      "@type": "Offer",
      "itemOffered": {
        "@type": "Service",
        "name": "Web Development Services",
        "description": "Custom website development, responsive design, e-commerce solutions"
      }
    },
    {
      "@type": "Offer",
      "itemOffered": {
        "@type": "Service",
        "name": "Digital Marketing Services",
        "description": "SEO, GEO, social media marketing, content marketing, PPC advertising"
      }
    },
    {
      "@type": "Offer",
      "itemOffered": {
        "@type": "Service",
        "name": "SEO Services",
        "description": "Search engine optimization, local SEO, technical SEO, on-page and off-page SEO"
      }
    },
    {
      "@type": "Offer",
      "itemOffered": {
        "@type": "Service",
        "name": "Social Media Marketing",
        "description": "Social media management, content creation, community management, paid social advertising"
      }
    },
    {
      "@type": "Offer",
      "itemOffered": {
        "@type": "Service",
        "name": "Marketing Management",
        "description": "Marketing strategy, campaign management, performance tracking, ROI optimization"
      }
    }
  ],
  "email": "account@ananthawebsolutions.com",
  "telephone": "+91-7013594249",
  "address": [
    {
      "@type": "PostalAddress",
      "streetAddress": "HPR LUXURY HOUSES, Kakkalapalle Rural",
      "addressLocality": "Andhra Pradesh",
      "addressCountry": "IN",
      "name": "India Office (Headquarters)"
    },
    {
      "@type": "PostalAddress",
      "streetAddress": "380 Southdale Road East",
      "addressLocality": "London",
      "addressRegion": "Ontario",
      "addressCountry": "CA",
      "name": "Canada Office"
    },
    {
      "@type": "PostalAddress",
      "streetAddress": "6115 Abbotts Bridge Rd Apt 1716",
      "addressLocality": "Johns Creek",
      "addressRegion": "GA",
      "postalCode": "30097-5760",
      "addressCountry": "US",
      "name": "USA Office"
    }
  ],
  "sameAs": [
    "https://www.linkedin.com/company/anantha-web-solutions",
    "https://twitter.com/ananthaweb",
    "https://www.facebook.com/ananthawebsolutions"
  ],
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+91-7013594249",
    "contactType": "customer service",
    "email": "account@ananthawebsolutions.com",
    "availableLanguage": ["English", "Hindi"]
  }
}

// Helper function to generate LocalBusiness structured data
export const localBusinessSchema = (office: 'india' | 'canada' | 'usa') => {
  const offices = {
    india: {
      name: "Anantha Web Solutions - India (Headquarters) | Best Website Developers in Andhra Pradesh, Telangana, Anantapur",
      address: {
        streetAddress: "HPR LUXURY HOUSES, Kakkalapalle Rural",
        addressLocality: "Andhra Pradesh",
        addressRegion: "Andhra Pradesh",
        addressCountry: "IN"
      },
      telephone: "+91-7013594249",
      geo: { latitude: "14.6600224", longitude: "77.5504773" },
      areaServed: ["India", "Andhra Pradesh", "Telangana", "Anantapur", "Karnataka", "Tamil Nadu"]
    },
    canada: {
      name: "Anantha Web Solutions - Canada | Best Website Developers in Canada",
      address: {
        streetAddress: "380 Southdale Road East",
        addressLocality: "London",
        addressRegion: "Ontario",
        addressCountry: "CA"
      },
      telephone: "+1-XXX-XXX-XXXX",
      geo: { latitude: "42.9849", longitude: "-81.2453" },
      areaServed: ["Canada", "Ontario", "Toronto", "Vancouver", "Montreal"]
    },
    usa: {
      name: "Anantha Web Solutions - USA | Best Website Developers in USA",
      address: {
        streetAddress: "6115 Abbotts Bridge Rd Apt 1716",
        addressLocality: "Johns Creek",
        addressRegion: "GA",
        postalCode: "30097-5760",
        addressCountry: "US"
      },
      telephone: "+1-470-225-0022",
      geo: { latitude: "34.0289", longitude: "-84.1986" },
      areaServed: ["USA", "Georgia", "Atlanta", "Johns Creek", "Cumming"]
    }
  }

  const officeData = offices[office]

  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": officeData.name,
    "image": "https://ananthadigital.com/assets/logos/ananthaweb.png",
    "url": "https://ananthadigital.com",
    "telephone": officeData.telephone,
    "address": {
      "@type": "PostalAddress",
      ...officeData.address
    },
    "geo": {
      "@type": "GeoCoordinates",
      ...officeData.geo
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      "opens": "09:00",
      "closes": "18:00"
    }
  }
}

