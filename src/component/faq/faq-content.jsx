import React from "react";
import "./faq.css";
import { Link } from "react-router-dom";

function Faqcontent() {
  return (
    <>
      <section className="faq-section py-5">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="fw-bold">Frequently Asked Questions</h2>
            <p className="text-muted">
              Find answers to common questions about Cybomb Technologies
            </p>
          </div>

          <div className="accordion" id="faqAccordion">
            {/* Question 1 */}
            <div className="accordion-item mb-3 border-0 shadow-sm">
              <h3 className="accordion-header" id="headingOne">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseOne"
                  aria-expanded="false"
                  aria-controls="collapseOne"
                >
                  What services does Cybomb Technologies offer?
                </button>
              </h3>
              <div
                id="collapseOne"
                className="accordion-collapse collapse"
                aria-labelledby="headingOne"
                data-bs-parent="#faqAccordion"
              >
                <div className="accordion-body">
                  Cybomb Technologies specializes in cybersecurity solutions,
                  software development, cloud computing services, and IT
                  consulting. We offer end-to-end protection against digital
                  threats along with custom software solutions tailored to your
                  business needs.
                </div>
              </div>
            </div>

            {/* Question 2 */}
            <div className="accordion-item mb-3 border-0 shadow-sm">
              <h3 className="accordion-header" id="headingTwo">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseTwo"
                  aria-expanded="false"
                  aria-controls="collapseTwo"
                >
                  How can I contact your support team?
                </button>
              </h3>
              <div
                id="collapseTwo"
                className="accordion-collapse collapse"
                aria-labelledby="headingTwo"
                data-bs-parent="#faqAccordion"
              >
                <div className="accordion-body">
                  You can reach our 24/7 support team at support@cybomb.com
                . For enterprise
                  clients, we provide dedicated account managers for
                  personalized support.
                </div>
              </div>
            </div>

            {/* Question 3 */}
            <div className="accordion-item mb-3 border-0 shadow-sm">
              <h3 className="accordion-header" id="headingThree">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseThree"
                  aria-expanded="false"
                  aria-controls="collapseThree"
                >
                  What industries do you serve?
                </button>
              </h3>
              <div
                id="collapseThree"
                className="accordion-collapse collapse"
                aria-labelledby="headingThree"
                data-bs-parent="#faqAccordion"
              >
                <div className="accordion-body">
                  We serve a wide range of industries including finance,
                  healthcare, e-commerce, government, and education. Our
                  solutions are adaptable to meet the specific compliance and
                  security requirements of each sector.
                </div>
              </div>
            </div>

            {/* Question 4 */}
            <div className="accordion-item mb-3 border-0 shadow-sm">
              <h3 className="accordion-header" id="headingFour">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseFour"
                  aria-expanded="false"
                  aria-controls="collapseFour"
                >
                  How does Cybomb ensure data security?
                </button>
              </h3>
              <div
                id="collapseFour"
                className="accordion-collapse collapse"
                aria-labelledby="headingFour"
                data-bs-parent="#faqAccordion"
              >
                <div className="accordion-body">
                  We implement multi-layered security protocols including
                  end-to-end encryption, regular penetration testing, and
                  compliance with international standards like ISO 27001 and
                  GDPR. Our security team continuously monitors for threats and
                  vulnerabilities.
                </div>
              </div>
            </div>

            {/* Question 5 */}
            <div className="accordion-item mb-3 border-0 shadow-sm">
              <h3 className="accordion-header" id="headingFive">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseFive"
                  aria-expanded="false"
                  aria-controls="collapseFive"
                >
                  Do you offer customized software solutions?
                </button>
              </h3>
              <div
                id="collapseFive"
                className="accordion-collapse collapse"
                aria-labelledby="headingFive"
                data-bs-parent="#faqAccordion"
              >
                <div className="accordion-body">
                  Yes, we specialize in custom software development tailored to
                  your specific business requirements. Our process includes
                  consultation, requirement analysis, agile development, and
                  continuous support post-deployment.
                </div>
              </div>
            </div>

            {/* Question 6 */}
            <div className="accordion-item mb-3 border-0 shadow-sm">
              <h3 className="accordion-header" id="headingSix">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseSix"
                  aria-expanded="false"
                  aria-controls="collapseSix"
                >
                  What is your pricing model?
                </button>
              </h3>
              <div
                id="collapseSix"
                className="accordion-collapse collapse"
                aria-labelledby="headingSix"
                data-bs-parent="#faqAccordion"
              >
                <div className="accordion-body">
                  We offer flexible pricing models including fixed-price
                  projects, time-and-materials contracts, and subscription-based
                  services for ongoing support. Contact our sales team for a
                  customized quote based on your specific needs.
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-5">
            <p className="text-muted">Didn't find your answer?</p>
            <Link to="/contact" className="btn btn-primary px-4">Contact Us</Link>
          </div>
        </div>
      </section>
    </>
  );
}

export default Faqcontent;
