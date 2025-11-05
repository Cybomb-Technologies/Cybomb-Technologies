import { useState } from "react";
import { Container, Row, Col, Card, Button, Badge, Accordion } from "react-bootstrap";
import styles from "./GlobalPresence.module.css";
import HomeService from "./Global-service";
import HomePartners from "../../component/home/home-partners";
const LOCATIONS = {
  india: {
    key: "india",
    label: "India",
    // Use your exact office address here if you want a precise pin:
    addressLines: [
      "Cybomb Technologies Pvt Ltd,",
      "Chennai, Tamil Nadu",
      "India"
    ],
    phone: "+91 9715092104",
    email: "support@cybomb.com",
    mapsQuery: "Cybomb%20Technologies%20Chennai%20Tamil%20Nadu",
    // Small map embed for the card:
    cardMapSrc:
      "https://maps.google.com/maps?q=Cybomb%20Technologies%20Chennai%20Tamil%20Nadu&t=&z=12&ie=UTF8&iwloc=&output=embed",
  },
  usa: {
    key: "usa",
    label: "USA",
    addressLines: [
      "Cybomb Technologies Inc.",
      "30 N Gould St Ste R",
      "Sheridan, Wyoming 82801",
      "United States"
    ],
    // phone: "+1 —",
    email: "support@cybomb.com",
    mapsQuery:
      "30%20N%20Gould%20St%20Ste%20R,%20Sheridan,%20Wyoming%2082801",
    cardMapSrc:
      "https://maps.google.com/maps?q=30%20N%20Gould%20St%20Ste%20R,%20Sheridan,%20Wyoming%2082801&t=&z=14&ie=UTF8&iwloc=&output=embed",
  },
};

export default function GlobalPresence() {
  const [activeKey, setActiveKey] = useState("india");
  const active = LOCATIONS[activeKey];

  const bigMapSrc = `https://maps.google.com/maps?q=${active.mapsQuery}&t=&z=12&ie=UTF8&iwloc=&output=embed`;

  return (
    <div className={styles.pageWrap}>
      {/* ===== Banner ===== */}
   <section className={styles.banner}>
  <Container className="py-5 mt-5 d-flex flex-column justify-content-center align-items-center text-center">
    <h1 className={styles.bannerTitle}>Global Presence</h1>
    <p className={`mb-3 ${styles.bannerSub}`}>
      We serve clients worldwide with teams across India & the United States.
    </p>
    <Badge bg="primary" className={styles.pillBadge}>
      Trusted by teams globally
    </Badge>
  </Container>
</section>


      {/* ===== Locations + Big Map ===== */}
      <section className={styles.locations}>
        <Container>
          <Row className="g-4">
            <Col lg={7} className="order-2 order-lg-1">
              <div className={styles.mapHeader}>
                <div className="d-flex gap-2">
                  <Button
                    variant={activeKey === "india" ? "primary" : "outline-primary"}
                    size="sm"
                    onClick={() => setActiveKey("india")}
                    aria-pressed={activeKey === "india"}
                  >
                    India
                  </Button>
                  <Button
                    variant={activeKey === "usa" ? "primary" : "outline-primary"}
                    size="sm"
                    onClick={() => setActiveKey("usa")}
                    aria-pressed={activeKey === "usa"}
                  >
                    USA
                  </Button>
                </div>
                <div className={styles.mapNote}>
                  Click to switch the main map view
                </div>
              </div>

              <div className={styles.mapFrameWrap}>
                <iframe
                  title={`Map - ${active.label}`}
                  src={bigMapSrc}
                  className={styles.mapFrame}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </Col>

            <Col lg={5} className="order-1 order-lg-2">
              <div className="d-flex flex-column gap-4">
                {/* INDIA CARD */}
                <Card className={styles.locationCard}>
                  <Card.Body>
                    <div className="d-flex justify-content-between align-items-start gap-3">
                      <div>
                        <Card.Title className="mb-1">Cybomb — India</Card.Title>
                        <Card.Subtitle className="text-muted">Chennai, Tamil Nadu</Card.Subtitle>
                      </div>
                      <Badge bg="secondary">Head Office</Badge>
                    </div>

                    <hr className="my-3" />

                    <Row className="g-3">
                      <Col xs={12} md={6}>
                        <ul className={styles.addrList}>
                          {LOCATIONS.india.addressLines.map((l) => (
                            <li key={l}>{l}</li>
                          ))}
                        </ul>
                        <div className="small text-muted">
                          Phone: {LOCATIONS.india.phone}<br />
                          Email: {LOCATIONS.india.email}
                        </div>
                      </Col>
                      <Col xs={12} md={6}>
                        <div className={styles.cardMap}>
                          <iframe
                            title="Map - India"
                            src={LOCATIONS.india.cardMapSrc}
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                          />
                        </div>
                      </Col>
                    </Row>
                  </Card.Body>
                </Card>

                {/* USA CARD */}
                <Card className={styles.locationCard}>
                  <Card.Body>
                    <div className="d-flex justify-content-between align-items-start gap-3">
                      <div>
                        <Card.Title className="mb-1">Cybomb — USA</Card.Title>
                        <Card.Subtitle className="text-muted">Sheridan, Wyoming</Card.Subtitle>
                      </div>
                      <Badge bg="secondary">Global Office</Badge>
                    </div>

                    <hr className="my-3" />

                    <Row className="g-3">
                      <Col xs={12} md={6}>
                        <ul className={styles.addrList}>
                          {LOCATIONS.usa.addressLines.map((l) => (
                            <li key={l}>{l}</li>
                          ))}
                        </ul>
                        <div className="small text-muted">
                          Phone: {LOCATIONS.usa.phone}<br />
                          Email: {LOCATIONS.usa.email}
                        </div>
                      </Col>
                      <Col xs={12} md={6}>
                        <div className={styles.cardMap}>
                          <iframe
                            title="Map - USA"
                            src={LOCATIONS.usa.cardMapSrc}
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                          />
                        </div>
                      </Col>
                    </Row>
                  </Card.Body>
                </Card>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* ===== Your existing section goes here ===== */}
      {/* Replace <TrustedBySection/> with the component you already have */}
      <section className={styles.customSlot}>
       <HomeService />
       <HomePartners/>
      </section>

      {/* ===== FAQ ===== */}
      <section className={styles.faq}>
        <Container>
          <Row className="justify-content-center">
            <Col lg={9}>
              <div className="text-center mb-4">
                <h2 className="mb-2">Frequently Asked Questions</h2>
                <p className="text-muted mb-0">
                  Quick answers about our offices, availability, and engagement.
                </p>
              </div>

              <Accordion alwaysOpen>
                <Accordion.Item eventKey="0">
                  <Accordion.Header>
                    Do you support clients outside India and the USA?
                  </Accordion.Header>
                  <Accordion.Body>
                    Yes. Our distributed team works across time zones and can align overlap
                    hours for North America, Europe, the Middle East, and APAC. We use
                    secure collaboration and deployment workflows to serve global clients.
                  </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="1">
                  <Accordion.Header>
                    Can we visit your offices?
                  </Accordion.Header>
                  <Accordion.Body>
                    Absolutely. Please reach out to <a href="mailto:support@cybomb.com">support@cybomb.com</a> to
                    schedule a visit to our Chennai (India) office or our
                    Sheridan (USA) office. We’ll share visitor access and timings.
                  </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="2">
                  <Accordion.Header>
                    What engagement models do you offer?
                  </Accordion.Header>
                  <Accordion.Body>
                    We support fixed-scope delivery, time & material, and dedicated squads /
                    staff augmentation. We’ll recommend the best model based on your
                    timeline, risk profile, and budget.
                  </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="3">
                  <Accordion.Header>
                    Do you sign NDAs and follow compliance standards?
                  </Accordion.Header>
                  <Accordion.Body>
                    Yes. We sign mutual NDAs, follow least-privilege access, and adhere
                    to secure SDLC practices. On request, we work within your SOC-2/ISO
                    aligned processes and provide artifacts for audits.
                  </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="4">
                  <Accordion.Header>
                    How quickly can you start a new project?
                  </Accordion.Header>
                  <Accordion.Body>
                    For most engagements we can start within 1–2 weeks after scoping and
                    resource alignment. If you have urgent needs, tell us — we’ll see how
                    to expedite.
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
}
