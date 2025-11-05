import "./usa-home-process.css";

function HomeProcess() {
  const processSteps = [
    {
      icon: "bi bi-chat-dots",
      title: "Discovery & Consultation",
      description:
        "We begin by understanding your vision, goals, and requirements through detailed discussions to create a solid project foundation.",
    },
    {
      icon: "bi bi-pencil-square",
      title: "Planning & Strategy",
      description:
        "Our team creates comprehensive project plans, technical specifications, and development roadmaps tailored to your business needs.",
    },
    {
      icon: "bi bi-code-slash",
      title: "Development & Implementation",
      description:
        "We build your solution using cutting-edge technologies with regular updates and transparent communication throughout the process.",
    },
    {
      icon: "bi bi-rocket-takeoff",
      title: "Testing & Deployment",
      description:
        "Rigorous testing ensures quality and performance before we deploy your solution and provide comprehensive documentation.",
    },
    {
      icon: "bi bi-headset",
      title: "Support & Maintenance",
      description:
        "We offer ongoing support, maintenance, and updates to keep your solution running smoothly and efficiently.",
    },
  ];

  return (
    <section className="process-bg" style={{ padding: "80px 0px" }}>
      <div className="container">
        {/* Heading */}
        <div className="text-center mb-5">
          <h2 className="fw-bold mb-3" style={{ color: "#003459" }}>
            Our Development Process
          </h2>
          <p className="fs-5 text-muted">
            A structured approach to turning your ideas into successful digital
            solutions
          </p>
        </div>

        {/* Process Steps */}
        <div className="row g-4 justify-content-center">
          {processSteps.map((step, index) => (
            <div key={index} className="col-lg-4 col-md-6 mb-4">
              <div className="card h-100 shadow-sm process-card p-4">
                {/* Step Icon */}
                <div className="process-icon">
                  <i className={step.icon}></i>
                </div>

                {/* Step Content */}
                <div className="card-body text-center p-0">
                  <h4 className="process-title">{step.title}</h4>
                  <p className="process-text">{step.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-5">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div
                className="cta-box p-4 rounded-4 text-white"
                style={{ background: "#007ea7" }}
              >
                <h3 className="fw-bold mb-3">Ready to Start Your Project?</h3>
                <p className="mb-4">
                  Let's discuss your project requirements and begin the journey
                  to create something amazing together.
                </p>
                <div className="d-flex flex-column flex-md-row justify-content-center gap-3">
                  <a
                    href="#start-project"
                    className="btn btn-light px-4 fw-semibold text-primary py-2"
                  >
                    Start Your Project
                  </a>
                  <a
                    href="/contact"
                    className="btn btn-outline-light px-4 fw-semibold py-2"
                  >
                    Schedule a Call
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HomeProcess;
