import React from 'react';
import styles from './aws-usecase.module.css';

const AWSUseCase = () => {
  const useCases = [
    {
      text: "Host a global e-commerce platform that auto-scales during sales",
      className: styles.cardBlue
    },
    {
      text: "Launch a serverless app backed by Lambda and DynamoDB",
      className: styles.cardNavy
    },
    {
      text: "Archive company files securely with automated backups",
      className: styles.cardCyan
    },
    {
      text: "Connect a mobile app to AWS backend with GraphQL (AppSync)",
      className: styles.cardDark
    },
    {
      text: "Create CI/CD pipelines that deploy automatically on push",
      className: styles.cardLightBlue
    }
  ];

  return (
    <section className={styles.useCasesSection}>
      <h2 className={styles.sectionTitle}>Use Cases</h2>

      <div className={styles.cardGrid}>
        {useCases.map((useCase, index) => (
          <div key={index} className={`${styles.card} ${useCase.className}`}>
            <p className={styles.cardText}>{useCase.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AWSUseCase;
