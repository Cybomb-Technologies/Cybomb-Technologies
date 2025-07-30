import React from 'react';
import styles from "./service-offerings.module.css";

// const services = [
//   {
//     title: 'Mobile Game Development',
//     description:
//       'Addictive games for Android and iOS using Unity, Flutter, or native SDKs.',
//   },
//   {
//     title: '2D & 3D Game Design',
//     description:
//       'From platformers and puzzles to simulations and first-person shooters-we handle all visual styles.',
//   },
//   {
//     title: 'Game Art, UI/UX & Animation',
//     description:
//       'Custom-designed characters, environments, sounds, and animations for maximum appeal.',
//   },
//   {
//     title: 'Multiplayer & Online Games',
//     description:
//       'Real-time multiplayer using Photon, Firebase, or WebSocket tech.',
//   },
//   {
//     title: 'Educational & Serious Games',
//     description:
//       'Build games for learning, employee training, or awareness campaigns.',
//   },
//   {
//     title: 'Gamification Solutions',
//     description:
//       'Add game mechanics like rewards, points, badges, and leaderboards to apps or platforms.',
//   },
//   {
//     title: 'AR/VR Game Development',
//     description:
//       'Immersive experiences for headsets and mobile AR using Unity or Unreal Engine.',
//   },
//   {
//     title: 'Publishing & Monetization',
//     description:
//       'We help you launch to Google Play, App Store, or Steam, and set up ads or in-game purchases.',
//   },
// ];
// Services

function ServicesOfferings({title, Services }) {
  return (
    <section className={styles.androidServicesSection}>
      <h2 className={styles.sectionTitle}>{title}</h2>
      <div className={styles.sectionLayer}>
        <div className={styles.grid}>
          {Services.map((Services, index) => (
            <div key={index} className={styles.card}>
              <h3 className={styles.cardTitle}>{Services.title}</h3>
              <p className={styles.cardDescription}>{Services.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ServicesOfferings;
