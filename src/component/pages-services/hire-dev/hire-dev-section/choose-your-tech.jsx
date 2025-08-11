import React, { useState } from "react";
import styles from "./choose-your-tech.module.css";
import { FaGlobe, FaMobileAlt, FaCloud, FaRobot, FaCogs } from "react-icons/fa";

const products = [
  { id: "web", title: "Web Development", icon: <FaGlobe /> },
  { id: "mobile", title: "Mobile App Development", icon: <FaMobileAlt /> },
  { id: "saas", title: "SaaS Platforms", icon: <FaCogs /> },
  { id: "cloud", title: "Cloud Infrastructure & API Integrations", icon: <FaCloud /> },
  { id: "ai", title: "AI / ML", icon: <FaRobot /> },
];

const techData = {
  web: [
    {
      category: "Languages",
      items: [
        { name: "HTML5", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
        { name: "CSS3", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
        { name: "JavaScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
        { name: "Bootstrap", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" },
        { name: "Tailwind CSS", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/2560px-Tailwind_CSS_Logo.svg.png" },
      ],
    },
    {
      category: "Frameworks",
      items: [
        { name: "React", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
        { name: "Next.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
        { name: "Vue.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg" },
        { name: "jQuery", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jquery/jquery-original.svg" },
      ],
    },
    {
      category: "CMS Platforms",
      items: [
        { name: "WordPress", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-original.svg" },
        { name: "Webflow", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/webflow/webflow-original.svg" },
        { name: "Ghost", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ghost/ghost-original.svg" },
        { name: "Strapi", logo: "https://assets.super.so/e7c0f16c-8bd3-4c76-8075-4c86f986e1b2/uploads/favicon/9c68ae10-0a8a-4e3f-9084-3625b19df9cb.png" },
      ],
    },
    {
      category: "eCommerce",
      items: [
        { name: "WooCommerce", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/woocommerce/woocommerce-original.svg" },
        { name: "Shopify", logo: "https://www.vectorlogo.zone/logos/shopify/shopify-icon.svg" },
        { name: "BigCommerce", logo: "https://www.vectorlogo.zone/logos/bigcommerce/bigcommerce-icon.svg" },
      ],
    },
    {
      category: "Backend Languages",
      items: [
        { name: "Node.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
        { name: "PHP", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg" },
        { name: "Python", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
        { name: "MySQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
        { name: "MongoDB", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
      ],
    },
    {
      category: "Hosting",
      items: [
        { name: "Vercel", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vercel/vercel-original.svg" },
        { name: "Netlify", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/netlify/netlify-original.svg" },
        { name: "Hostinger", logo: "https://cdn.worldvectorlogo.com/logos/hostinger.svg" }, // custom
        { name: "AWS", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Amazon_Web_Services_Logo.svg/768px-Amazon_Web_Services_Logo.svg.png" },
        { name: "GoDaddy", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/GoDaddy_logo.svg/1200px-GoDaddy_logo.svg.png?20250508095437" }, // custom
      ],
    },
    {
      category: "Design Tools",
      items: [
        { name: "Figma", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" },
        { name: "Adobe XD", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/xd/xd-plain.svg" },
        { name: "Photoshop", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/photoshop/photoshop-line.svg" },
        { name: "Canva", logo: "https://static.canva.com/static/images/favicon.ico" }, // custom
      ],
    },
  ],

  mobile: [
    {
      category: "Languages",
      items: [
        { name: "Java", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
        { name: "Kotlin", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kotlin/kotlin-original.svg" },
        { name: "Swift", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/swift/swift-original.svg" },
        { name: "Dart", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dart/dart-original.svg" },
        { name: "C#", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg" },
      ],
    },
    {
      category: "Frameworks",
      items: [
        { name: "Flutter", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg" },
        { name: "React Native", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
        { name: "Ionic", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ionic/ionic-original.svg" },
        { name: "Xamarin", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/xamarin/xamarin-original.svg" },
      ],
    },
    {
      category: "Backend & APIs",
      items: [
        { name: "Firebase", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg" },
        { name: "Node.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
        { name: "AWS Amplify", logo: "https://images.seeklogo.com/logo-png/42/1/aws-amplify-logo-png_seeklogo-426696.png" },
        { name: "GraphQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg" },
      ],
    },
  ],

  saas: [
    {
      category: "Core Languages",
      items: [
        { name: "JavaScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
        { name: "TypeScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
        { name: "Python", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
        { name: "Go", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original.svg" },
      ],
    },
    {
      category: "Frameworks & Platforms",
      items: [
        { name: "Next.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
        { name: "Node.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
        { name: "Django", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg" },
        { name: "Laravel", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg" },
      ],
    },
    {
      category: "Databases",
      items: [
        { name: "PostgreSQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
        { name: "MongoDB", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
        { name: "MySQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
        { name: "Redis", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg" },
      ],
    },
    {
      category: "Auth & Payments",
      items: [
        { name: "Auth0", logo: "https://cdn.worldvectorlogo.com/logos/auth0.svg" },
        { name: "Firebase Auth", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg" },
        { name: "Stripe", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Stripe_Logo%2C_revised_2016.svg/2560px-Stripe_Logo%2C_revised_2016.svg.png" },
        { name: "PayPal", logo: "https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg" },
      ],
    },
    {
      category: "DevOps & Monitoring",
      items: [
        { name: "Docker", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
        { name: "Kubernetes", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg" },
        { name: "Sentry", logo: "https://images.icon-icons.com/2108/PNG/512/sentry_icon_130834.png" },
        { name: "Grafana", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/grafana/grafana-original.svg" },
      ],
    },
  ],

  ai: [
    {
      category: "Languages",
      items: [
        { name: "Python", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
        { name: "R", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/r/r-original.svg" },
        { name: "Julia", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/julia/julia-original.svg" },
        { name: "Scala", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/scala/scala-original.svg" },
      ],
    },
    {
      category: "Frameworks & Libraries",
      items: [
        { name: "TensorFlow", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg" },
        { name: "PyTorch", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg" },
        { name: "Scikit-learn", logo: "https://upload.wikimedia.org/wikipedia/commons/0/05/Scikit_learn_logo_small.svg" },
        { name: "Keras", logo: "https://upload.wikimedia.org/wikipedia/commons/a/ae/Keras_logo.svg" },
        { name: "OpenCV", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/opencv/opencv-original.svg" },
      ],
    },
    {
      category: "MLOps & Deployment",
      items: [
        { name: "MLflow", logo: "https://mlflow.org/docs/latest/api_reference/_static/MLflow-logo-final-black.png" },
        { name: "Kubeflow", logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyqIMv0611Ygfu3Od8U9p9uf6sYwKuTpUp8w&s" },
        { name: "DVC", logo: "https://upload.wikimedia.org/wikipedia/commons/a/af/Data_Version_Control._Official_Logo_by_Iterative.ai.png" },
      ],
    },
  ],

  cloud: [
    {
      category: "Cloud Platforms",
      items: [
        { name: "AWS", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Amazon_Web_Services_Logo.svg/768px-Amazon_Web_Services_Logo.svg.png" },
        { name: "Microsoft Azure", logo: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Microsoft_Azure.svg" },
        { name: "Google Cloud", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg" },
      ],
    },
    {
      category: "DevOps Tools",
      items: [
        { name: "Docker", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
        { name: "Kubernetes", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg" },
        { name: "Jenkins", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jenkins/jenkins-original.svg" },
        { name: "Terraform", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/terraform/terraform-original.svg" },
        { name: "Ansible", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ansible/ansible-original.svg" },
      ],
    },
    {
      category: "Cloud Databases",
      items: [
        { name: "AWS RDS", logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2FrKzOSe8tulfZqJEVmzMAVefqKTKo62dcQ&s" },
        { name: "Azure Cosmos DB", logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCB9KegOAVMObG06LLz3etygmPOZG1hV0fUQ&s" },
        { name: "Firestore", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg" },
      ],
    },
  ],
};

function ChooseYourTech() {
  const [selectedProduct, setSelectedProduct] = useState("web");

  return (
    <section className={styles.techSection}>
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>Choose Your Tech</h2>

        {/* Product Cards */}
        <div className={styles.productsRow}>
          {products.map((product) => (
            <div
              key={product.id}
              className={`${styles.productCard} ${
                selectedProduct === product.id ? styles.active : ""
              }`}
              onClick={() => setSelectedProduct(product.id)}
            >
              <div className={styles.icon}>{product.icon}</div>
              <span>{product.title}</span>
            </div>
          ))}
        </div>

        {/* Tech Details - Row with Tech Cards */}
          <div className={styles.techDetails}>
            {techData[selectedProduct]?.map((group) => (
              <div key={group.category} className={styles.techRow}>
                
                {/* Category Title */}
                <div className={styles.techCategory}>
                  <h3>{group.category}</h3>
                </div>

                {/* Tech Cards */}
                  <div className={styles.techItemsRow}>
                    {group.items.map((tech) => (
                      <div key={tech.name} className={styles.techCard}>
                        <img src={tech.logo} alt={tech.name} />
                        <span>{tech.name}</span>
                      </div>
                    ))}
                  </div>
              </div>
            ))}
          </div>

      </div>
    </section>
  );
}

export default ChooseYourTech;
