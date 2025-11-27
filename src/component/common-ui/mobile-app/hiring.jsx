import styles from './hiring-models.module.css';

const HiringModels = ({ title, cards = [], image }) => {
  return (
  <section className={`${styles.hiringSection}`}>
  <div className="container">
    <div className="row d-flex flex-wrap">
      {/* Left Column (Content) */}
      <div className="col-md-6">
        <div className={`${styles.leftContent}`}>
          <h2 className={styles.sectionTitle}>{title}</h2>
          {cards.map((card, index) => (
            <div className={styles.card} key={index}>
              <h3 className={styles.cardTitle}>{card.title}</h3>
              <p className={styles.cardText}>{card.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Right Column (Image) */}
      <div className="col-md-6">
        <div className={`${styles.rightContent}`}>
          <img 
            src={image} 
            alt="Hiring discussion" 
            className={`${styles.image} w-100 h-100 object-fit-cover`} 
          />
        </div>
      </div>
    </div>
  </div>
</section>
  );
};

export default HiringModels;
