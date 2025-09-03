import React, { useState } from "react";
import styles from "./../../../common-ui/design-and-development/development-technologies-dnd.module.css";
import { Link } from "react-router-dom";

const techData = {
  Frontend: ["HTML5", "CSS3", "JavaScript", "React.js", "Next.js", "Tailwind"],
  Platforms: [
    "Shopify",
    "WooCommerce",
    "Magento",
    "BigCommerce",
    "Custom React",
    "Node",
  ],
  Backend: ["Node.js", "Express.js", "PHP", "Laravel", "Django"],
  Databases: ["MongoDB", "MySQL", "PostgreSQL"],
  Payments: ["Stripe", "PayPal", "Phonepe", "UPI"],
  CMS: ["WordPress", "Contentful", "Firebase", "Cloudinary"],
  APIs: ["REST", "GraphQL", "MongoDB", "Express.js", "Django"],
};

const TechLogos = {
  HTML5:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
  CSS3: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
  JavaScript:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  "React.js":
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  "Next.js":
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
  Tailwind: "https://icon.icepanel.io/Technology/svg/Tailwind-CSS.svg",
  Shopify:
    "https://cdn3.iconfinder.com/data/icons/social-media-2068/64/_shopping-512.png",
  WooCommerce:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/woocommerce/woocommerce-original.svg",
  Magento:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/magento/magento-original.svg",
  BigCommerce:
    "https://www.vectorlogo.zone/logos/bigcommerce/bigcommerce-icon.svg",
  "Custom React":
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  Node: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  "Node.js":
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  "Express.js":
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
  PHP: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg",
  Laravel:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg",
  Django: "https://www.svgrepo.com/show/373554/django.svg",
  MongoDB:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
  MySQL:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
  PostgreSQL:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
  Stripe: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQGluJhW7I1NYU7jF77E-9K9I46_ib_DUNHw&s",
  PayPal:
    "https://cdn.pixabay.com/photo/2018/05/08/21/29/paypal-3384015_640.png",
  Phonepe:
    "https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/phonepe-icon.png",
  UPI: "https://www.vectorlogo.zone/logos/upi/upi-ar21.svg",
  WordPress:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-plain.svg",
  Contentful: "https://www.svgrepo.com/show/353600/contentful.svg",
  Firebase:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg",
  Cloudinary: "https://www.svgrepo.com/show/353566/cloudinary.svg",
  REST: "https://uxwing.com/wp-content/themes/uxwing/download/web-app-development/rest-api-icon.png",
  GraphQL:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg",
};

const techUrls = {
  // Frontend
  HTML5: "/services/html5-development-service",
  CSS3: "",
  JavaScript: "/services/javascript-development-service",
  "React.js": "",
  "Next.js": "/services/javascript-development-service",
  Tailwind: "",

  // Platforms
  Shopify: "/services/shopify",
  WooCommerce: "/services/woo-commerce",
  Magento: "/services/magento",
  BigCommerce: "/services/big-commerce",
  "Custom React": "",
  Node: "",

  // Backend
  "Node.js": "/services/javascript-development-service",
  "Express.js": "",
  PHP: "/services/php-development-service",
  Laravel: "/services/laravel-development-service",
  Django: "",

  // Databases
  MongoDB: "",
  MySQL: "",
  PostgreSQL: "",
  // Payments
  Stripe: "",
  PayPal: "",
  Phonepe: "",
  UPI: "",
  // CMS
  WordPress: "/services/wordpress ",
  Contentful: "",
  Firebase: "",
  Cloudinary: "",
  // APIs
  REST: "",
  GraphQL: "",
  // "MongoDB": "",
  // "Express.js": "",
  // "Django": "",
};

const TechToolsSection = () => {
  const categories = Object.keys(techData);
  const [selected, setSelected] = useState(categories[0]);

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.title}>API Development Technologies</h2>

        {/* Tabs */}
        <div className={styles.tabWrapper}>
          {categories.map((cat) => (
            <button
              key={cat}
              className={`${styles.tab} ${
                selected === cat ? styles.activeTab : ""
              }`}
              onClick={() => setSelected(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Tech Cards */}
        <div className={styles.cardGrid}>
          {techData[selected].map((item) => (
            <Link
              key={item}
              to={techUrls[item]}
              className="text-decoration-none"
            >
              <div className={styles.techCard}>
                <img
                  src={TechLogos[item]}
                  alt={`${item} logo`}
                  className={styles.logo}
                />
                <span>{item}</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechToolsSection;

// import React, { useState } from "react";
// import styles from "./../../../common-ui/design-and-development/development-technologies-dnd.module.css";

// const techData = {
//   Frontend: ["HTML5", "CSS3", "JavaScript", "React.js", "Next.js", "Tailwind"],
//   Platforms: ["Shopify", "WooCommerce", "Magento", "BigCommerce", "Custom React", "Node"],
//   Backend: ["Node.js", "Express.js", "PHP", "Laravel", "Django"],
//   Databases: ["MongoDB", "MySQL", "PostgreSQL"],
//   Payments: ["Stripe", "PayPal", "Phonepe", "UPI"],
//   CMS: ["WordPress", "Contentful", "Firebase", "Cloudinary"],
//   APIs: ["REST", "GraphQL", "MongoDB","Express.js","Django"],
// };

// const TechLogos = {
//   "HTML5": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
//   "CSS3": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
//   "JavaScript": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
//   "React.js": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
//   "Next.js": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
//   "Tailwind": "https://icon.icepanel.io/Technology/svg/Tailwind-CSS.svg",
//   "Shopify": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Shopify_logo_2018.svg/768px-Shopify_logo_2018.svg.png?20240107131458",
//   "WooCommerce": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/woocommerce/woocommerce-original.svg",
//   "Magento": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/magento/magento-original.svg",
//   "BigCommerce": "https://www.vectorlogo.zone/logos/bigcommerce/bigcommerce-icon.svg",
//   "Custom React": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
//   "Node": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
//   "Node.js": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
//   "Express.js": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
//   "PHP": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg",
//   "Laravel": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg",
//   "Django": "https://www.svgrepo.com/show/373554/django.svg",
//   "MongoDB": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
//   "MySQL": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
//   "PostgreSQL": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
//   "Stripe": "https://www.vectorlogo.zone/logos/stripe/stripe-ar21~bgwhite.svg",
//   "PayPal": "https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/paypal-icon.png",
//   "Phonepe": "https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/phonepe-icon.png", // This is an example, you would need a proper logo link
//   "UPI": "https://www.vectorlogo.zone/logos/upi/upi-ar21.svg",
//   "WordPress": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-plain.svg",
//   "Contentful": "https://www.svgrepo.com/show/353600/contentful.svg",
//   "Firebase": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg",
//   "Cloudinary": "https://www.svgrepo.com/show/353566/cloudinary.svg",
//   "REST": "https://cdn-icons-png.flaticon.com/512/907/907773.png",
//   "GraphQL": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg"
// };

// const TechToolsSection = () => {
//   const categories = Object.keys(techData);
//   const [selected, setSelected] = useState(categories[0]);

//   return (
//     <section className={styles.section}>
//       <div className={styles.container}>
//         <h2 className={styles.title}>API Development Technologies</h2>

//         {/* Tabs */}
//         <div className={styles.tabWrapper}>
//           {categories.map((cat) => (
//             <button
//               key={cat}
//               className={`${styles.tab} ${selected === cat ? styles.activeTab : ""}`}
//               onClick={() => setSelected(cat)}
//             >
//               {cat}
//             </button>
//           ))}
//         </div>

//         {/* Tech Cards */}
//         <div className={styles.cardGrid}>
//           {techData[selected].map((item) => (
//             <div key={item} className={styles.techCard}>
//               <img
//                 src={TechLogos[item]}
//                 alt={`${item} logo`}
//                 className={styles.logo}
//               />
//               <span>{item}</span>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default TechToolsSection;
