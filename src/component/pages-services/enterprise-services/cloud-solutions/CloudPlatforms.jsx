import React from 'react';
import styles from '../../../common-ui/enterprise-services/crm-platforms.module.css';

const platforms = [
  {
    name: 'Amazon Web Services (AWS)',
    logo: 'https://cdn.worldvectorlogo.com/logos/aws-2.svg',
  },
  {
    name: 'Microsoft Azure',
    logo: 'https://cdn.worldvectorlogo.com/logos/microsoft-azure-1.svg',
  },
  {
    name: 'Google Cloud Platform (GCP)',
    logo: 'https://cdn.worldvectorlogo.com/logos/google-cloud-1.svg',
  },
  {
    name: 'DigitalOcean',
    logo: 'https://cdn.worldvectorlogo.com/logos/digital-ocean-2.svg',
  },
  {
    name: 'Oracle Cloud',
    logo: 'https://cdn.worldvectorlogo.com/logos/oracle-6.svg',
  },
  {
    name: 'Heroku',
    logo: 'https://cdn.worldvectorlogo.com/logos/heroku-4.svg',
  },
  {
    name: 'Docker, Kubernetes, Helm',
    logo: 'https://cdn.worldvectorlogo.com/logos/docker.svg',
  },
  {
    name: 'Terraform, Ansible',
    logo: 'https://cdn.worldvectorlogo.com/logos/terraform-enterprise.svg',
  },
  {
    name: 'Cloudflare, Vercel, Netlify',
    logo: 'https://cdn.worldvectorlogo.com/logos/cloudflare-1.svg',
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
