import styles from "./CaseChallenges.module.css";
import challengeImg from "../../../assets/technologies/case-challenge.png"; // Replace with your image path
// case-challenge.png
const CaseChallenges = () => {
  const leftCards = [
    "Balancing aesthetic appeal with functionality.",
    "Creating content that is both educational and promotional.",
    "Built a template that can serve as a SaaS landing page or AI startup website."
  ];

  const rightCards = [
    "Ensuring mobile responsiveness across all sections.",
    "Delivered a professional portfolio-ready project with strong branding.",
    "Demonstrated expertise in web design, content structuring, and conversion optimization."
  ];

  return (
    <div className={styles.challengeSection}>
      <h2 className={styles.title}>Challenges</h2>
      <div className={styles.container}>
        {/* Left Column */}
        <div className={styles.column}>
          {leftCards.map((text, index) => (
            <div
              key={index}
              className={`${styles.card} ${index === 1 ? styles.blackCard : ""}`}
            >
              {text}
            </div>
          ))}
        </div>

        {/* Center Image */}
        <div className={styles.centerColumn}>
          <img src={challengeImg} alt="Challenges" className={styles.image} />
        </div>

        {/* Right Column */}
        <div className={styles.column}>
          {rightCards.map((text, index) => (
            <div
              key={index}
              className={`${styles.card} ${index === 1 ? styles.blackCard : ""}`}
            >
              {text}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CaseChallenges;
