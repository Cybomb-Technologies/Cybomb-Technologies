import "./home-ui-ux.css";

function HomeUIUX() {

  const services = [
  {
    icon: "bi-people",
    title: "User Research & Personas",
    description:
      "Understand your audience deeply through surveys, interviews, and data-driven analysis.",
  },
  {
    icon: "bi-vector-pen",
    title: "Wireframing & Prototyping",
    description:
      "Bring your ideas to life with rapid prototyping and interactive mockups.",
  },
  {
    icon: "bi-easel",
    title: "UI Design",
    description:
      "Beautiful, brand-aligned, responsive interfaces that stand out on every screen.",
  },
  {
    icon: "bi-diagram-3",
    title: "UX Design",
    description:
      "Crafted workflows and navigation that minimize friction and maximize clarity.",
  },
  {
    icon: "bi-ui-checks-grid",
    title: "Usability Testing",
    description:
      "Validate every interaction and optimize for real-world performance.",
  },
  {
    icon: "bi-layers",
    title: "Design Systems",
    description:
      "Maintain design consistency across products with scalable systems and component libraries.",
  },
  ];

  return (
    <section className="uiux-section">
      <div className="container-uiux">
        <h1 className="section-title-uiux" style={{color:"#003459"}}>
          Mobile App & Web Development with top UI/UX Services
        </h1>
          <div className="services-grid-uiux" data-aos="fade-up">
            {services.map((service, index) => (
              <div key={index} className="service-card-uiux">
                <h3 className="service-title-uiux">
                  <i className={`bi ${service.icon}`} style={{ marginRight: "0.5rem" }}></i>
                  {service.title}
                </h3>
                <p className="service-description-uiux">{service.description}</p>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
}

export default HomeUIUX;
