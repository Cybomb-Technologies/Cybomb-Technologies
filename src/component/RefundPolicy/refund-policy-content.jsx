import "./refund-policy.css";
function Refundpolicycontent() {
return(
    <>
      <section className="refund-policy">
        <div className="container p-5">
          <div className="d-flex align-items-start">
            <span className="count bg-primary">1</span>
            <div className="ms-2">
              <h5 className="text-primary"> Service-Based Products</h5>
              <p className="ms-2">
                As we offer digital and service-based solutions (such as web/app
                development, SaaS platforms, AI solutions, etc.), refunds are
                generally not applicable once the project has been initiated or
                delivered.
              </p>
            </div>
          </div>
          <div className="d-flex align-items-start">
            <span className="count bg-primary">2</span>
            <div className="ms-2">
              <h5 className="text-primary"> Eligibility for Refund</h5>
              <p className="ms-2">
                Refunds may be considered only in the following cases:
              </p>
              <ul className="points">
                <li>
                  Project has not been started within the agreed timeline.
                </li>
                <li>Duplicate payment or accidental transaction.</li>
                <li>
                  Service was not delivered as per the initial written
                  agreement.
                </li>
              </ul>
            </div>
          </div>
          <div className="d-flex align-items-start">
            <span className="count bg-primary">3</span>
            <div className="ms-2">
              <h5 className="text-primary"> Non-Refundable Situations</h5>
              <p className="ms-2">
                No refund will be issued in the following cases:
              </p>
              <ul className="points">
                <li>Change of mind after work has started.</li>
                <li>
                  Delays due to client-side inaction or lack of communication.
                </li>
                <li>Custom work already completed or partially delivered.</li>
              </ul>
            </div>
          </div>
          <div className="d-flex align-items-start">
            <span className="count bg-primary">4</span>
            <div className="ms-2">
              <h5 className="text-primary"> Refund Process</h5>
              <p className="ms-2">
                If you believe you are eligible for a refund, please contact us
                within 7 days of payment. After reviewing your request, approved
                refunds will be processed within 7–10 working days to your
                original payment method.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Refundpolicycontent;