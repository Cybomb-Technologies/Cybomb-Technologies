import WooCommerceContent from './woo-commerce-content';
import Metatags from '../../../../../SEO/meta-tags';
import AgileProcess1 from '../../../../common-ui/agile-process/agile-process1';



function WooCommerce() {
  const metaPropsData = {
  title: "WooCommerce Development Services - Cybomb Technologies | Custom WordPress E-Commerce Solutions",
  description:
    "Cybomb Technologies offers WooCommerce development services to build secure, scalable, and conversion-focused online stores. We provide custom theme design, plugin integration, migration, and optimization for WordPress e-commerce websites.",
  keyword:
    "WooCommerce Development Services, WooCommerce Store Setup, WooCommerce Theme Customization, WooCommerce Plugin Development, WooCommerce Migration, WordPress E-Commerce Development, WooCommerce Development India",
  url: "https://www.cybomb.com/Services/woo-commerce",
  image: "https://www.cybomb.com", 
};
const tabsData = [
  {
    id: 'planning',
    title: 'Planning & Strategy',
    description:
      'We define the right WooCommerce strategy to transform your WordPress store into a scalable e-commerce solution.',
    cards: [
      {
        title: 'Business Requirement Analysis',
        description:
          'We evaluate your e-commerce goals and tailor WooCommerce solutions accordingly.'
      },
      {
        title: 'Store Architecture Planning',
        description:
          'We design an efficient store structure for seamless navigation and sales flow.'
      },
      {
        title: 'Plugin & Theme Strategy',
        description:
          'We recommend the best WooCommerce plugins and themes aligned with your brand and functionality needs.'
      },
      {
        title: 'Roadmap & Scalability Planning',
        description:
          'We prepare a clear growth strategy to ensure your WooCommerce store is future-ready.'
      }
    ]
  },
  {
    id: 'design',
    title: 'UI/UX Design',
    description:
      'We craft engaging, mobile-friendly WooCommerce store designs that convert visitors into customers.',
    cards: [
      {
        title: 'Custom Theme Design',
        description:
          'We design pixel-perfect WooCommerce themes that reflect your brand identity.'
      },
      {
        title: 'Responsive Store Layouts',
        description:
          'We ensure your WooCommerce site delivers a flawless experience across all devices.'
      },
      {
        title: 'Conversion-focused UX',
        description:
          'We optimize checkout flows and product pages for maximum conversions.'
      },
      {
        title: 'Brand-consistent UI',
        description:
          'We align colors, typography, and visuals to build a cohesive online shopping experience.'
      }
    ]
  },
  {
    id: 'development',
    title: 'Development',
    description:
      'We build robust WooCommerce stores with custom features, integrations, and optimized performance.',
    cards: [
      {
        title: 'Custom WooCommerce Stores',
        description:
          'We develop fully customized WooCommerce websites tailored to your business needs.'
      },
      {
        title: 'Plugin Development & Customization',
        description:
          'We build or customize WooCommerce plugins to extend store functionality.'
      },
      {
        title: 'Payment Gateway & Shipping Integration',
        description:
          'We integrate multiple payment options and logistics providers for seamless operations.'
      },
      {
        title: 'Headless WooCommerce Solutions',
        description:
          'We combine WooCommerce with modern frontends like React or Vue.js for advanced performance.'
      }
    ]
  },
  {
    id: 'testing',
    title: 'Testing',
    description:
      'We ensure your WooCommerce store works flawlessly with thorough testing and QA processes.',
    cards: [
      {
        title: 'Functional Testing',
        description:
          'We validate product pages, cart, checkout, and payment flows for reliability.'
      },
      {
        title: 'Performance Optimization',
        description:
          'We optimize WooCommerce stores for speed, caching, and scalability under high traffic.'
      },
      {
        title: 'Security Audits',
        description:
          'We implement security best practices, SSL, and fraud prevention measures.'
      },
      {
        title: 'Cross-device & Browser Testing',
        description:
          'We test stores across multiple devices, OS, and browsers for consistent UX.'
      }
    ]
  },
  {
    id: 'deployment',
    title: 'Deployment',
    description:
      'We launch your WooCommerce store with secure, stable, and scalable deployment processes.',
    cards: [
      {
        title: 'Hosting & Server Setup',
        description:
          'We configure optimized hosting environments for WooCommerce and WordPress.'
      },
      {
        title: 'Domain & SSL Configuration',
        description:
          'We ensure secure transactions with proper SSL and domain setup.'
      },
      {
        title: 'Staging to Live Migration',
        description:
          'We move stores from staging to live without downtime or data loss.'
      },
      {
        title: 'SEO & Analytics Integration',
        description:
          'We integrate SEO tools, Google Analytics, and tracking for store performance insights.'
      }
    ]
  },
  {
    id: 'maintenance',
    title: 'Support',
    description:
      'We provide ongoing WooCommerce support, updates, and feature enhancements to keep your store competitive.',
    cards: [
      {
        title: 'Store Monitoring & Updates',
        description:
          'We ensure WooCommerce, WordPress, and plugins are always up-to-date.'
      },
      {
        title: 'Performance Tuning',
        description:
          'We continuously optimize speed, caching, and database performance.'
      },
      {
        title: 'Bug Fixes & Enhancements',
        description:
          'We quickly resolve issues and add new features as your business grows.'
      },
      {
        title: 'Proactive Security Management',
        description:
          'We apply patches, backups, and advanced protection against cyber threats.'
      }
    ]
  }
];

  return (
    <>
      <WooCommerceContent/>
      <AgileProcess1
        title="Our Agile Process"
        TabsData={tabsData}
        defaultActiveTab="planning"
        accentColor="#1c85cb"
        cardView={true}
      />
      <Metatags  metaProps={metaPropsData}/>
      
    </>
  );
}

export default WooCommerce;
