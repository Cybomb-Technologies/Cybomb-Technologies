// CaseObjective.jsx
import React from "react";
import styles from "./case-objective.module.css";
import objectiveImg from "../../../assets/technologies/it-support-matters-img.jpg";
const CaseObjective = ({ title, objectives, imageUrl, imageAlt }) => {
  return (
    <section className={`${styles.caseObjective} container py-2`}>
      <div className="row align-items-center">
        <div className="col-md-6">
          <div className={styles.objectiveContent}>
            <h2>{title}</h2>
            <ul>
              {objectives.map((objective, index) => (
                <li key={index}>{objective}</li>
              ))}
            </ul>
          </div>
        </div>
        <div className="col-md-6">
          <div className={styles.objectiveImage}>
            {/* {imageUrl ? ( */}
              <img src={objectiveImg} alt={imageAlt} className="img-fluid" />
            {/* ) : (
              <div className={styles.placeholderImage}>Project Image</div>
            )} */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseObjective;