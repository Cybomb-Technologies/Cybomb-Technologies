import React from "react";
import styles from "./solar-layout.module.css";

const DevelopmentProcess = ({ title, Process }) => {
  const radiusX = 320;
  const radiusY = 170;
  const centerX = 450;
  const centerY = 275;

  const totalPoints = 360; // resolution for arc length calculation
  const ellipsePoints = [];
  let arcLengths = [0];
  let totalLength = 0;

  // Calculate ellipse points & cumulative arc lengths
  for (let i = 1; i <= totalPoints; i++) {
    const t1 = ((i - 1) / totalPoints) * 2 * Math.PI;
    const t2 = (i / totalPoints) * 2 * Math.PI;

    const x1 = centerX + radiusX * Math.cos(t1);
    const y1 = centerY + radiusY * Math.sin(t1);
    const x2 = centerX + radiusX * Math.cos(t2);
    const y2 = centerY + radiusY * Math.sin(t2);

    const dist = Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);
    totalLength += dist;

    ellipsePoints.push({ angle: t2, x: x2, y: y2 });
    arcLengths.push(totalLength);
  }

  // Function to get angle for a given arc length fraction
  const getAngleAtFraction = (fraction) => {
    const targetLength = fraction * totalLength;
    for (let i = 0; i < arcLengths.length; i++) {
      if (arcLengths[i] >= targetLength) {
        return ellipsePoints[i].angle;
      }
    }
    return 0;
  };

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        {/* Oval Path */}
        <svg
          className={styles.svgCircle}
          width="900"
          height="550"
          xmlns="http://www.w3.org/2000/svg"
        >
          <ellipse
            cx={centerX}
            cy={centerY}
            rx={radiusX}
            ry={radiusY}
            fill="none"
            stroke="black"
            strokeWidth="3"
          />
        </svg>

        {/* Center Title */}
        <div className={styles.centerTitle}>
          <h2>{title}</h2>
        </div>

        {/* Cards equally spaced along oval */}
        {Process.map((desc, index) => {
          const fraction = index / Process.length;
          const angle = getAngleAtFraction(fraction);

          const x = centerX + radiusX * Math.cos(angle);
          const y = centerY + radiusY * Math.sin(angle);

          return (
            <div
              key={index}
              className={styles.card}
              style={{
                left: `${x - 70}px`, // center horizontally
                top: `${y - 70}px`,  // center vertically
              }}
            >
              <p>{desc}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default DevelopmentProcess;
