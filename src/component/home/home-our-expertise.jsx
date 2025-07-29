import React, { useState } from "react";
import "./home-our-expertise.css";

const techData = {
  Frontend: ["HTML5", "CSS3", "JavaScript", "Bootstrap", "Tailwind CSS"],
  Frameworks: ["React", "Vue.js", "Angular", "Next.js", "Svelte"],
  "CMS Platforms": ["WordPress", "Webflow", "Drupal", "Ghost", "Strapi"],
  eCommerce: ["Shopify", "WooCommerce", "Magento", "BigCommerce", "Ecwid"],
  Backend: ["Node.js", "Express.js", "Spring Boot", "PHP", "Python Django"],
  Hosting: ["Vercel", "Netlify", "Hostinger", "AWS", "DigitalOcean"],
  "Design Tools": ["Figma", "Adobe XD", "Photoshop", "Illustrator", "Canva"]
};

// UI class variables
const title = "text-white mt-5";
const tabButton = "btn btn-outline-light m-1";
const active = "active";
const tabGrid = "mt-3";
const techCard = "border p-2 text-white bg-dark rounded text-center small";

function Homeourexpertise() {
  const [activeTab, setActiveTab] = useState("Frontend");

  return (
    <>
      <section className="our-expertise-bg" style={{ padding: "60px 0px" }}>
        <div className="container">
          <h2 className="text-white text-center" data-aos="zoom-out-right">Our Expertise</h2>
          <p className="text-white text-center" data-aos="zoom-out-left">
            Technologies we master to build exceptional solutions
          </p>

          {/* Static Tech Cards Row */}
          <div className="row mt-5">
            {/* Example Card */}
            <div className="col-6 col-sm-6 col-lg-4 col-xl-2 mt-3">
              <div className="card shadow border-0 p-4 expertise-card text-center" data-aos="zoom-out-up">
                <i className="bi bi-android2 text-success fs-1"></i>
                <p className="text-black">Android</p>
              </div>
            </div>

            {/* Apple */}
            <div className="col-6 col-sm-6 col-lg-4 col-xl-2 mt-3">
              <div className="card shadow border-0 p-4 expertise-card text-center" data-aos="zoom-out-down">
                <i className="bi bi-apple fs-1 text-secondary"></i>
                <p className="text-black">Apple</p>
              </div>
            </div>

            {/* React */}
            <div className="col-6 col-sm-6 col-lg-4 col-xl-2 mt-3">
              <div data-aos="zoom-out-up" className="card shadow border-0 expertise-card d-flex flex-column align-items-center justify-content-center" style={{ padding: "37px" }}>
                <img src="https://cdn-icons-png.flaticon.com/128/1260/1260667.png" alt="React" width="40" height="40" />
                <p className="mt-2 mb-0 text-black">React</p>
              </div>
            </div>

            {/* Flutter */}
            <div className="col-6 col-sm-6 col-lg-4 col-xl-2 mt-3">
              <div data-aos="zoom-out-down" className="card shadow border-0 expertise-card d-flex flex-column align-items-center justify-content-center" style={{ padding: "37px" }}>
                <img src="https://storage.googleapis.com/cms-storage-bucket/0dbfcc7a59cd1cf16282.png" alt="Flutter" width="40" height="40" />
                <p className="mt-2 mb-0 text-black">Flutter</p>
              </div>
            </div>

            {/* Node.js */}
            <div className="col-6 col-sm-6 col-lg-4 col-xl-2 mt-3">
              <div data-aos="zoom-out-up" className="card shadow border-0 expertise-card d-flex flex-column align-items-center justify-content-center" style={{ padding: "37px" }}>
                <img src="https://cdn-icons-png.flaticon.com/512/5968/5968322.png" alt="Node.js" width="40" height="40" />
                <p className="mt-2 mb-0 text-black">Node.js</p>
              </div>
            </div>

            {/* Python */}
            <div className="col-6 col-sm-6 col-lg-4 col-xl-2 mt-3">
              <div data-aos="zoom-out-down" className="card shadow border-0 expertise-card d-flex flex-column align-items-center justify-content-center" style={{ padding: "37px" }}>
                <img src="https://cdn-icons-png.flaticon.com/512/5968/5968350.png" alt="Python" width="40" height="40" />
                <p className="mt-2 mb-0 text-black">Python</p>
              </div>
            </div>
          </div>

          {/* More Icons */}
          <div className="row mt-5">
            {[
              { name: "JavaScript", img: "https://cdn-icons-png.flaticon.com/512/5968/5968292.png" },
              { name: "TypeScript", img: "https://cdn-icons-png.flaticon.com/512/5968/5968381.png" },
              { name: "MongoDB", img: "https://cdn.iconscout.com/icon/free/png-256/free-mongodb-4-1175139.png" },
              { name: "AWS", img: "https://a0.awsstatic.com/libra-css/images/logos/aws_logo_smile_1200x630.png" },
              { name: "Docker", img: "https://cdn-icons-png.flaticon.com/512/919/919853.png" },
              { name: "Git", img: "https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg" },
            ].map((tech, index) => (
              <div className="col-6 col-sm-6 col-lg-4 col-xl-2 mt-3" key={index}>
                <div data-aos="zoom-out-up" className="card shadow border-0 expertise-card d-flex flex-column align-items-center justify-content-center" style={{ padding: "37px" }}>
                  <img src={tech.img} alt={tech.name} width="40" height="40" />
                  <p className="mt-2 mb-0 text-black">{tech.name}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Tabs Section */}
          <h5 className="mt-4 text-center text-secondary">
            And many more cutting-edge technologies to bring your vision to life
          </h5>
          <div className="container text-center">
            <h2 className={title}>Technologies &amp; Tools We Use</h2>

            <div className={`row justify-content-center ${tabGrid}`}>
              {Object.keys(techData).map((tab) => (
                <div className="col-auto px-1" key={tab}>
                  <button
                    onClick={() => setActiveTab(tab)}
                    className={`${tabButton} ${activeTab === tab ? active : ""}`}
                  >
                    {tab}
                  </button>
                </div>
              ))}
            </div>

            <div className="row justify-content-center mt-4 g-3">
              {techData[activeTab].map((item, idx) => (
                <div key={idx} className="col-6 col-sm-4 col-md-3 col-lg-2">
                  <div className="bg-white p-2 rounded">{item}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Homeourexpertise;
