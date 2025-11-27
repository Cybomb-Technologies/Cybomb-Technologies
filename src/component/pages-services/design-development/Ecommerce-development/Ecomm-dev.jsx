import Ecommcontent from './Ecomm-content';
import StillNotSure from '../../../common-ui/stillnotsure/StillNotSure';
import Metatags from '../../../../SEO/meta-tags';
import AgileProcess1 from '../../../common-ui/agile-process/agile-process1';

export default function Ecommdev() {
  const metaPropsData = {
    title: "E-commerce Development Services - Cybomb Technologies | Custom Online Store Solutions",
    description: "Cybomb Technologies offers professional E-commerce Development Services including custom store development, platform solutions, payment integration, and mobile-optimized shopping experiences. Build your online store with experts.",
    keyword: "E-commerce Development Services, Online Store Development, E-commerce Website Development, Shopify Development, WooCommerce Development, Magento Development, Payment Gateway Integration, Mobile E-commerce Development",
    url: "https://www.cybomb.com/services/ecommerce-development-services",
    image: "https://www.cybomb.com", 
  };

  const tabsData = [
    {
      id: 'planning',
      title: 'Planning & Consultation',
      description: 'We help you plan a scalable and profitable e-commerce solution with the right strategy and technology stack.',
      cards: [
        {
          title: 'Business Requirement Analysis',
          description: 'We study your products, target customers, and business goals to define the best e-commerce solution.'
        },
        {
          title: 'Platform Consultation',
          description: 'We guide you in choosing the right platform such as Magento, Shopify, WooCommerce, or custom builds.'
        },
        {
          title: 'E-Commerce Architecture Planning',
          description: 'We design workflows for catalogs, checkout, payments, and integrations to ensure scalability.'
        },
        {
          title: 'Resource & Roadmap Planning',
          description: 'We allocate the right developers, designers, and tools while defining a clear project timeline.'
        }
      ]
    },
    {
      id: 'design',
      title: 'UI/UX Design',
      description: 'We design engaging, user-friendly online store experiences that drive conversions and boost sales.',
      cards: [
        {
          title: 'Wireframes & Store Layouts',
          description: 'We design structured store layouts and navigation flows to ensure seamless shopping experiences.'
        },
        {
          title: 'Responsive Store Design',
          description: 'Our designs adapt perfectly across desktops, tablets, and mobiles to enhance usability.'
        },
        {
          title: 'Brand-Aligned Visuals',
          description: 'We create modern e-commerce designs consistent with your brand identity and product niche.'
        },
        {
          title: 'Conversion-Focused UX',
          description: 'We optimize product pages, checkout flows, and CTAs to maximize sales and reduce cart abandonment.'
        }
      ]
    },
    {
      id: 'development',
      title: 'Development',
      description: 'We build powerful, secure, and scalable e-commerce platforms tailored to your business needs.',
      cards: [
        {
          title: 'Custom Store Development',
          description: 'We develop unique storefronts that reflect your brand and deliver personalized shopping experiences.'
        },
        {
          title: 'Shopping Cart & Checkout',
          description: 'We build seamless cart and multi-step checkout processes to ensure smooth transactions.'
        },
        {
          title: 'Payment Gateway Integration',
          description: 'We integrate secure payment systems including Stripe, PayPal, Razorpay, and other options.'
        },
        {
          title: 'Inventory & Order Management',
          description: 'We implement robust backend systems for product management, stock tracking, and fulfillment.'
        }
      ]
    },
    {
      id: 'testing',
      title: 'Testing',
      description: 'We rigorously test your online store to ensure smooth performance, reliability, and security.',
      cards: [
        {
          title: 'Functional Testing',
          description: 'We validate product browsing, cart, checkout, and payment flows for flawless operation.'
        },
        {
          title: 'Usability & Accessibility',
          description: 'We test navigation, filters, and responsiveness to ensure ease of use for all customers.'
        },
        {
          title: 'Performance & Load Testing',
          description: 'We simulate high-traffic scenarios to ensure your store handles peak shopping seasons without downtime.'
        },
        {
          title: 'Security Testing',
          description: 'We test for vulnerabilities like data leaks, fraud, and payment security to protect your customers.'
        }
      ]
    },
    {
      id: 'deployment',
      title: 'Deployment',
      description: 'We launch your e-commerce store with a secure, optimized, and seamless go-live process.',
      cards: [
        {
          title: 'Hosting & Server Setup',
          description: 'We configure cloud hosting and CDN solutions for fast, secure, and reliable performance.'
        },
        {
          title: 'Domain & SSL Setup',
          description: 'We secure your store with SSL certificates, domains, and DNS configuration.'
        },
        {
          title: 'Go-Live Monitoring',
          description: 'We monitor store performance during launch to ensure smooth customer transactions.'
        },
        {
          title: 'Backup & Rollback Plan',
          description: 'We implement backups and rollback strategies to ensure safe deployment and quick recovery.'
        }
      ]
    },
    {
      id: 'maintenance',
      title: 'Maintenance',
      description: 'We provide continuous support, updates, and enhancements to keep your e-commerce store performing at its best.',
      cards: [
        {
          title: 'Regular Updates',
          description: 'We keep your platform, plugins, and integrations updated to avoid issues and security risks.'
        },
        {
          title: 'Bug Fixes & Enhancements',
          description: 'We resolve issues and add new features to improve customer experience and sales.'
        },
        {
          title: 'Security Monitoring',
          description: 'We track threats, apply patches, and ensure safe transactions for your customers.'
        },
        {
          title: 'Scalability & Future Growth',
          description: 'We scale your store to handle more products, users, and integrations as your business expands.'
        }
      ]
    }
  ];

  return (
    <>
      <Ecommcontent />
      <AgileProcess1
        title="Our Agile Process"
        TabsData={tabsData}
        defaultActiveTab="planning"
        accentColor="#1c85cb"
        cardView={true}
      />
      <StillNotSure/>
      <Metatags metaProps={metaPropsData}/>
    </>
  );
}