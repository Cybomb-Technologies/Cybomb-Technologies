import React, { useState } from "react";
import styles from "./../../../common-ui/design-and-development/development-technologies-dnd.module.css";
import { Link } from "react-router-dom";

const techData = {
  Protocols: ["REST API", "GraphQL", "Webhooks", "SOAP"],
  Languages: ["Node.js", "Python", "Java", "PHP"],
  Platforms: ["Salesforce", "SAP", "HubSpot", "Zoho", "QuickBooks", "Shopify", "Razorpay"],
  Databases: ["MySQL", "MongoDB", "PostgreSQL", "Firebase"],
  "Middleware Tools": ["Zapier", "Make (Integromat)", "custom microservices"],
  Security: ["OAuth2", "JWT", "API keys", "SSL encryption"],
};
 
const techLogos = {
  // Protocols
  "REST API": "https://uxwing.com/wp-content/themes/uxwing/download/web-app-development/rest-api-icon.png",
  "GraphQL": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg",
  "Webhooks": "https://cdn-icons-png.flaticon.com/512/9240/9240256.png",
  "SOAP": "https://www.svgrepo.com/show/530564/soap.svg",
 
  // Languages
  "Node.js": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  "Python": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
  "Java": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
  "PHP": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg",
 
  // Platforms
  "Salesforce": "https://cdn-icons-png.flaticon.com/512/5968/5968855.png",
  "SAP": "https://upload.wikimedia.org/wikipedia/commons/5/59/SAP_2011_logo.svg",
  "HubSpot": "https://cdn.iconscout.com/icon/free/png-512/hubspot-3628782-3030006.png",
  "Zoho": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/ZOHO_logo_2023.svg/768px-ZOHO_logo_2023.svg.png?20231106145651",
  "QuickBooks": "https://cdn.iconscout.com/icon/free/png-512/intuit-282295.png",
  "Shopify": "https://cdn.worldvectorlogo.com/logos/shopify.svg",
  "Razorpay": "https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/razorpay-icon.png",
 
  // Databases
  "MySQL": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
  "MongoDB": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
  "PostgreSQL": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
  "Firebase": "https://img.icons8.com/?size=160&id=ROMfFZ1tMhpk&format=png",
 
  // Middleware
  "Zapier": "https://cdn.iconscout.com/icon/free/png-512/zapier-2-555599.png",
  "Make (Integromat)": "https://cdn.brandfetch.io/idxzQ5rVNK/theme/dark/logo.svg?c=1dxbfHSJFAPEGdCLU4o5B",
  "custom microservices": "https://cdn-icons-png.flaticon.com/512/8763/8763243.png",

  // Security
  "OAuth2": "https://www.svgrepo.com/show/354135/oauth.svg",
  "JWT": "https://jwt.io/img/pic_logo.svg",
  "API keys": "https://cdn-icons-png.flaticon.com/512/2103/2103654.png",
  "SSL encryption": "https://cdn-icons-png.flaticon.com/512/3064/3064197.png",
};
 
const techUrls = {

  // Protocols
  "REST API": "",
  "GraphQL": "",
  "Webhooks": "",
  "SOAP": "",

  // Languages
  "Node.js": "/services/nodejs-development-service",
  "Python": "/services/python-development-service",
  "Java": "",
  "PHP": "/services/php-development-service",

  // Platforms
  "Salesforce": "/services/salesforce-services ",
  "SAP": "",
  "HubSpot": "/services/hubspot-services ",
  "Zoho": "/services/zoho-services ",
  "QuickBooks": "",
  "Shopify": "/services/shopify",
  "Razorpay": "",

  // Databases
  "MySQL": "",
  "MongoDB": "",
  "PostgreSQL": "",
  "Firebase": "",

  // Middleware Tools
  "Zapier": "",
  "Make (Integromat)": "",
  "custom microservices": "",

  // Security
  "OAuth2": "",
  "JWT": "",
  "API keys": "",
  "SSL encryption": "",
};
 
 
const TechToolsSection = () => {
  const categories = Object.keys(techData);
  const [selected, setSelected] = useState(categories[0]);
 
  return (
	<section className={styles.section}>
		<div className={styles.container}>
			<h2 className={styles.title}>Custom Software Integration Technologies</h2>

				{/* Tabs */}
				<div className={styles.tabWrapper}>
					{categories.map((cat) => (
						<button
							key={cat}
							className={`${styles.tab} ${selected === cat ? styles.activeTab : ""}`}
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
							to={techUrls[item] || "/integration"} 
							className="text-decoration-none"
							>
							<div className={styles.techCard}>
								<img
									src={techLogos[item]}
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
//   Protocols: ["REST API", "GraphQL", "Webhooks", "SOAP"],
//   Languages: ["Node.js", "Python", "Java", "PHP"],
//   Platforms: ["Salesforce", "SAP", "HubSpot", "Zoho", "QuickBooks", "Stripe", "Shopify", "Razorpay"],
//   Databases: ["MySQL", "MongoDB", "PostgreSQL", "Firebase"],
//   "Middleware Tools": ["Zapier", "Make (Integromat)", "custom microservices"],
//   Security: ["OAuth2", "JWT", "API keys", "SSL encryption"],
// };

// const techLogos = {
//   // Protocols
//   "REST API": "https://uxwing.com/wp-content/themes/uxwing/download/web-app-development/rest-api-icon.png",
//   "GraphQL": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg",
//   "Webhooks": "https://cdn-icons-png.flaticon.com/512/9240/9240256.png",
//   "SOAP": "https://www.svgrepo.com/show/530564/soap.svg",

//   // Languages
//   "Node.js": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
//   "Python": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
//   "Java": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
//   "PHP": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg",

//   // Platforms
//   "Salesforce": "https://cdn-icons-png.flaticon.com/512/5968/5968855.png",
//   "SAP": "https://upload.wikimedia.org/wikipedia/commons/5/59/SAP_2011_logo.svg",
//   "HubSpot": "https://cdn.iconscout.com/icon/free/png-512/hubspot-3628782-3030006.png",
//   "Zoho": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/ZOHO_logo_2023.svg/768px-ZOHO_logo_2023.svg.png?20231106145651",
//   "QuickBooks": "https://cdn.iconscout.com/icon/free/png-512/intuit-282295.png",
//   "Stripe": "https://www.svgrepo.com/show/354401/stripe.svg",
//   "Shopify": "https://cdn.worldvectorlogo.com/logos/shopify.svg",
//   "Razorpay": "https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/razorpay-icon.png",

//   // Databases
//   "MySQL": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
//   "MongoDB": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
//   "PostgreSQL": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
//   "Firebase": "https://img.icons8.com/?size=160&id=ROMfFZ1tMhpk&format=png",

//   // Middleware
//   "Zapier": "https://cdn.iconscout.com/icon/free/png-512/zapier-2-555599.png",
//   "Make (Integromat)": "https://cdn.brandfetch.io/idxzQ5rVNK/theme/dark/logo.svg?c=1dxbfHSJFAPEGdCLU4o5B",
//   "custom microservices": "https://cdn-icons-png.flaticon.com/512/8763/8763243.png",

//   // Security
//   "OAuth2": "https://www.svgrepo.com/show/354135/oauth.svg",
//   "JWT": "https://jwt.io/img/pic_logo.svg",
//   "API keys": "https://cdn-icons-png.flaticon.com/512/2103/2103654.png",
//   "SSL encryption": "https://cdn-icons-png.flaticon.com/512/3064/3064197.png",
// };


// const TechToolsSection = () => {
//   const categories = Object.keys(techData);
//   const [selected, setSelected] = useState(categories[0]);

//   return (
//     <section className={styles.section}>
//       <div className={styles.container}>
//         <h2 className={styles.title}>Custom Software Integration Technologies</h2>

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
//                 src={techLogos[item]}
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
