import { Link } from "react-router-dom";
import "./portfolio.css";
function Portfoliocontent() {
  return (
    <>
      <section className="portfolio" style={{ padding: "50px 0px" }}>
        <div className="container">
          <div className="row" data-aos="fade-left">
            <div className="col-12 order-1 order-md-1 text-center pb-3">
              <h3 className="mb-3 text-primary">AI Agent for Smart Automation</h3>
            </div>

            <div className="col-md-6 order-2 order-md-2">
              <img
                src="/images/portfolio/ai-agent.jpg"
                alt="AI Agent by Cybomb Technologies"
                className="img-fluid rounded shadow w-100 h-100"
              />
            </div>

            <div className="col-md-6 py-3 order-3 order-md-3">
              <div className="d-flex">
                <i className="bi bi-star-fill text-warning me-2"></i>
                <p className="text-secondary">
                  Cybomb Technologies develops smart AI agents to automate
                  routine tasks and improve business workflows.
                </p>
              </div>
              <div className="d-flex">
                <i className="bi bi-star-fill text-warning me-2"></i>
                <p className="text-secondary">
                  Built using OpenAI, Langchain, and N8N, our AI agent handles
                  roles like development, testing, and project coordination.
                </p>
              </div>

              <div className="d-flex">
                <i className="bi bi-star-fill text-warning me-2"></i>
                <p className="text-secondary">
                  This AI system boosts productivity and adapts to your business
                  needs with powerful integrations and intelligent workflows.
                </p>
              </div>

              <div className="mt-4">
                <a
                  href="/demo/ai-agent/"
                  target="_blank"
                  className="text-decoration-none rounded text-white bg-primary p-2 px-3"
                >
                  <b>Preview</b>
                </a>
              </div>
            </div>
          </div>

          <div className="row mt-5" data-aos="fade-right">
            <div className="col-12 order-1 order-md-1 text-center pb-3">
              <h3 className="mb-3 text-primary">
                HRMS – Streamlining Employee Management
              </h3>
            </div>

            <div className="col-md-6 order-2 order-md-3">
              <img
                src="/images/portfolio/hrms.jpg"
                alt="AI Agent by Cybomb Technologies"
                className="img-fluid rounded shadow w-100 h-100"
              />
            </div>

            <div className="col-md-6 py-3 order-3 order-md-2">
              <div className="d-flex">
                <i className="bi bi-star-fill text-warning me-2"></i>
                <p className="text-secondary">
                  Cybomb Technologies' HRMS system simplifies employee
                  management by centralizing tasks like attendance, payroll, and
                  performance tracking in one smart platform.
                </p>
              </div>
              <div className="d-flex">
                <i className="bi bi-star-fill text-warning me-2"></i>
                <p className="text-secondary">
                  Built with React.js, Node.js, and MongoDB, our HRMS offers
                  secure role-based access for Admins, HR teams, and Employees.
                </p>
              </div>
              <div className="d-flex">
                <i className="bi bi-star-fill text-warning me-2"></i>
                <p className="text-secondary">
                  From automated leave approvals to real-time analytics, this
                  system helps HR teams save time and boost workplace
                  efficiency.
                </p>
              </div>
              <div className="mt-4">
                <a
                  href="/demo/HRMS/"
                  target="_blank"
                  className="text-decoration-none rounded text-white bg-primary p-2 px-3"
                >
                  <b>Preview</b>
                </a>
              </div>
            </div>
          </div>

          <div className="row mt-5" data-aos="fade-left">
            <div className="col-12 order-1 order-md-1 text-center pb-3">
              <h3 className="mb-3 text-primary"> E-Commerce Platform</h3>
            </div>

            <div className="col-md-6 order-2 order-md-2">
              <img
                src="/images/portfolio/ecomm.jpg"
                alt="AI Agent by Cybomb Technologies"
                className="img-fluid rounded shadow w-100 h-100"
              />
            </div>

            <div className="col-md-6 py-3 order-3 order-md-3">
              <div className="d-flex">
                <i className="bi bi-star-fill text-warning me-2"></i>
                <p className="text-secondary">
                  Cybomb Technologies builds robust e-commerce solutions that
                  help businesses sell products online with a smooth, secure,
                  and user-friendly experience.
                </p>
              </div>
              <div className="d-flex">
                <i className="bi bi-star-fill text-warning me-2"></i>
                <p className="text-secondary">
                  Our platform includes essential features like product
                  listings, cart management, secure checkout, and order tracking
                  – all powered by React, Node.js, and MongoDB.
                </p>
              </div>

              <div className="d-flex">
                <i className="bi bi-star-fill text-warning me-2"></i>
                <p className="text-secondary">
                  With responsive design, admin dashboards, and integrated
                  payment gateways, we ensure seamless shopping on both desktop
                  and mobile devices.
                </p>
              </div>

              <div className="mt-3">
                <a
                  href="/demo/E-Commerce/"
                  target="_blank"
                  className="text-decoration-none rounded text-white bg-primary p-2 px-3"
                >
                  <b>Preview</b>
                </a>
              </div>
            </div>
          </div>

          <div className="row mt-5" data-aos="fade-right">
            <div className="col-12 order-1 order-md-1 text-center pb-3">
              <h3 className="mb-3 text-primary">Grocery Delivery App</h3>
            </div>

            <div className="col-md-6 order-2 order-md-3">
              <img
                src="/images/portfolio/grocery.jpg"
                alt="AI Agent by Cybomb Technologies"
                className="img-fluid rounded shadow w-100 h-100"
              />
            </div>

            <div className="col-md-6 py-3 order-3 order-md-2">
              <div className="d-flex">
                <i className="bi bi-star-fill text-warning me-2"></i>
                <p className="text-secondary">
                  Cybomb Technologies developed a modern grocery delivery
                  platform that connects users with nearby stores for fast and
                  convenient shopping.
                </p>
              </div>
              <div className="d-flex">
                <i className="bi bi-star-fill text-warning me-2"></i>
                <p className="text-secondary">
                  Users can browse categories, add items to the cart, schedule
                  deliveries, and make secure online payments – all in a few
                  taps.
                </p>
              </div>
              <div className="d-flex">
                <i className="bi bi-star-fill text-warning me-2"></i>
                <p className="text-secondary">
                  The system includes a responsive user app, admin dashboard,
                  and real-time delivery tracking to streamline the entire
                  grocery order process.
                </p>
              </div>
              <div className="mt-4">
                <a
                  href="/demo/grocery/"
                  target="_blank"
                  className="text-decoration-none rounded text-white bg-primary p-2 px-3"
                >
                  <b>Preview</b>
                </a>
              </div>
            </div>
          </div>

          <div className="row mt-5" data-aos="fade-left">
            <div className="col-12 order-1 order-md-1 text-center pb-3">
              <h3 className="mb-3 text-primary"> School Management System</h3>
            </div>

            <div className="col-md-6 order-2 order-md-2">
              <img
                src="/images/portfolio/school.jpg"
                alt="AI Agent by Cybomb Technologies"
                className="img-fluid rounded shadow w-100 h-100"
              />
            </div>

            <div className="col-md-6 py-3 order-3 order-md-3">
              <div className="d-flex">
                <i className="bi bi-star-fill text-warning me-2"></i>
                <p className="text-secondary">
                  Cybomb Technologies created a complete School Management
                  System to simplify academic and administrative operations in
                  educational institutions.
                </p>
              </div>
              <div className="d-flex">
                <i className="bi bi-star-fill text-warning me-2"></i>
                <p className="text-secondary">
                  The system covers student enrollment, attendance, exams, fees,
                  and timetable management – all under one secure dashboard.
                </p>
              </div>

              <div className="d-flex">
                <i className="bi bi-star-fill text-warning me-2"></i>
                <p className="text-secondary">
                  With separate portals for Admin, Teachers, Students, and
                  Parents, the platform ensures smooth communication and
                  effective digital learning management.
                </p>
              </div>

              <div className="mt-3">
                <a
                  href="/demo/school-mangement" target="_blank"
                  className="text-decoration-none rounded text-white bg-primary p-2 px-3"
                >
                  <b>Preview</b>
                </a>
              </div>
            </div>
          </div>

          <div className="row mt-5" data-aos="fade-right">
            <div className="col-12 order-1 order-md-1 text-center pb-3">
              <h3 className="mb-3 text-primary">Call Taxi Booking Ap</h3>
            </div>

            <div className="col-md-6 order-2 order-md-3">
              <img
                src="/images/portfolio/taxi.jpg"
                alt="AI Agent by Cybomb Technologies"
                className="img-fluid rounded shadow w-100 h-100"
              />
            </div>

            <div className="col-md-6 py-3 order-3 order-md-2">
              <div className="d-flex">
                <i className="bi bi-star-fill text-warning me-2"></i>
                <p className="text-secondary">
                  Cybomb Technologies developed a smart taxi booking system that
                  connects passengers with nearby drivers for quick and reliable
                  rides.
                </p>
              </div>
              <div className="d-flex">
                <i className="bi bi-star-fill text-warning me-2"></i>
                <p className="text-secondary">
                  Users can book rides in real-time, track driver location,
                  calculate fares, and make secure online payments through a
                  seamless mobile interface.
                </p>
              </div>
              <div className="d-flex">
                <i className="bi bi-star-fill text-warning me-2"></i>
                <p className="text-secondary">
                  The platform includes dedicated apps for users and drivers,
                  along with an admin panel to manage bookings, payments, and
                  support efficiently.
                </p>
              </div>
              <div className="mt-4">
                <a target="_blank"
                  href="/demo/taxi-booking-app"
                  className="text-decoration-none rounded text-white bg-primary p-2 px-3"
                >
                  <b>Preview</b>
                </a>
              </div>
            </div>
          </div>

          <div className="row mt-5" data-aos="fade-left">
            <div className="col-12 order-1 order-md-1 text-center pb-3">
              <h3 className="mb-3 text-primary"> Real Estate Platform</h3>
            </div>

            <div className="col-md-6 order-2 order-md-2">
              <img
                src="/images/portfolio/real-estate.jpg"
                alt="AI Agent by Cybomb Technologies"
                className="img-fluid rounded shadow w-100 h-100"
              />
            </div>

            <div className="col-md-6 py-3 order-3 order-md-3">
              <div className="d-flex">
                <i className="bi bi-star-fill text-warning me-2"></i>
                <p className="text-secondary">
                  Cybomb Technologies built a modern real estate platform to
                  help users easily buy, sell, or rent properties with detailed
                  listings and smart filters.
                </p>
              </div>
              <div className="d-flex">
                <i className="bi bi-star-fill text-warning me-2"></i>
                <p className="text-secondary">
                  The system features property search, image galleries, location
                  maps, and enquiry forms – all optimized for mobile and
                  desktop.
                </p>
              </div>

              <div className="d-flex">
                <i className="bi bi-star-fill text-warning me-2"></i>
                <p className="text-secondary">
                  With admin control, agent logins, and real-time listing
                  updates, the platform ensures a smooth experience for both
                  property owners and buyers.
                </p>
              </div>

              <div className="mt-3">
                <a
                target="_blank"
                  href="/demo/real-estate-app"
                  className="text-decoration-none rounded text-white bg-primary p-2 px-3"
                >
                  <b>Preview</b>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Portfoliocontent;
