import React from "react";
import styles from "../../../common-ui/enterprise-services/crm-platforms.module.css";

const platforms = [
  {
    name: "Amazon Web Services (AWS)",
    logo: "https://cdn.worldvectorlogo.com/logos/aws-2.svg",
  },
  {
    name: "Microsoft Azure",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Microsoft_Azure.svg/2048px-Microsoft_Azure.svg.png",
  },
  {
    name: "Google Cloud Platform (GCP)",
    logo: "https://cdn.worldvectorlogo.com/logos/google-cloud-1.svg",
  },
  {
    name: "DigitalOcean",
    logo: "https://assets.wheelhouse.com/media/_solution_logo_09222023_11957561.png",
  },
  {
    name: "Oracle Cloud",
    logo: "https://logos-world.net/wp-content/uploads/2020/09/Oracle-Logo.png",
  },
  {
    name: "Heroku",
    logo: "https://cdn.worldvectorlogo.com/logos/heroku-4.svg",
  },
  {
    name: "Docker, Kubernetes, Helm",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqea62MI9LsCBEPZ4WCRjBO7eKY08zYXacGg&s",
  },
  {
    name: "Terraform, Ansible",
    logo: "https://cdn.worldvectorlogo.com/logos/terraform-enterprise.svg",
  },
  {
    name: "Cloudflare, Vercel, Netlify",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvaQqABKT1-8jjuiFfj1Wn1OqKUBIatY6ZHw&s",
  },
];

function CloudPlatforms() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.title}>Platforms We Work With</h2>
        <div className={styles.marquee}>
          <div className={styles.track}>
            {platforms.map((platform, index) => (
              <div key={index} className={styles.card}>
                <img src={platform.logo} alt={platform.name} />
              </div>
            ))}
            {platforms.map((platform, index) => (
              <div key={`dup-${index}`} className={styles.card}>
                <img src={platform.logo} alt={platform.name} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default CloudPlatforms;
