export interface ServiceType {
  title: string
  image: string
  desc: string
  link: string
}

export const servicesData: ServiceType[] = [
  {
    title: 'Web Development',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=500&fit=crop&q=80',
    desc: 'Create powerful, responsive websites and web applications that deliver exceptional user experiences. From corporate websites to complex web platforms, we build scalable solutions using modern technologies like React, Next.js, and Node.js that drive engagement and business growth.',
    link: '/services/web-development'
  },
  {
    title: 'Mobile Development',
    image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=500&fit=crop&q=80',
    desc: 'Build native and cross-platform mobile applications for iOS and Android that users love. We create intuitive, high-performance mobile apps with seamless functionality, beautiful interfaces, and robust architecture that keeps users engaged and coming back.',
    link: '/services/mobile-development'
  },
  {
    title: 'E-commerce Solutions',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=500&fit=crop&q=80',
    desc: 'Launch and scale your online store with custom e-commerce platforms that convert visitors into customers. We develop secure, feature-rich shopping experiences with payment integration, inventory management, and analytics to maximize your revenue and streamline operations.',
    link: '/services/ecommerce-solutions'
  },
  {
    title: 'UI/UX Design',
    image: 'https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?w=800&h=500&fit=crop&q=80',
    desc: 'Design beautiful, user-centered interfaces that delight customers and drive results. Our design team creates intuitive user experiences through research, prototyping, and testing, ensuring every interaction is purposeful, accessible, and aligned with your brand identity.',
    link: '/services/ui-ux-design'
  },
  {
    title: 'Cloud & DevOps',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=500&fit=crop&q=80',
    desc: 'Modernize your infrastructure with cloud solutions and DevOps practices that improve reliability and accelerate delivery. We provide cloud architecture, CI/CD pipelines, containerization, and automation on AWS, Azure, and Google Cloud to scale your business efficiently.',
    link: '/services/cloud-devops'
  },
  {
    title: 'Adobe Experience Manager (AEM)',
    image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&h=500&fit=crop&q=80',
    desc: 'Build powerful enterprise content management solutions with Adobe Experience Manager. We create scalable, personalized digital experiences through custom component development, template design, workflow automation, and seamless integrations that empower your marketing teams to deliver exceptional content.',
    link: '/services/adobe-experience-manager'
  },
  {
    title: 'Support & Maintenance',
    image: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800&h=500&fit=crop&q=80',
    desc: 'Keep your applications running smoothly with ongoing support and maintenance services. We provide 24/7 monitoring, regular updates, security patches, performance optimization, and technical support to ensure your digital products remain secure, fast, and reliable.',
    link: '/services/support-maintenance'
  }
];