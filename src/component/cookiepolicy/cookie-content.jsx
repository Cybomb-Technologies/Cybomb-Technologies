import "./cookie.css";

function Cookiecontent() {
  return (
    <>
      <section className="cookie-policy-content">
        <div className="container p-5" >
          <h2 className="text-primary">Cookie Policy – Cybomb Technologies</h2>
          <h5 className="mt-3">Understanding Our Use of Cookies</h5>

          <div className="mt-4">
            <p>
              This Cookie Policy explains how Cybomb Technologies ("we", "our", or "us") uses cookies and similar technologies to recognize you when you visit our website at www.cybomb.com. It explains what these technologies are, why we use them, and your rights to control their use.
            </p>
            <p>
              By continuing to browse or use our site, you agree to our use of cookies as described in this policy.
            </p>
          </div>

          <h6>1. What Are Cookies?</h6>
          <p>
            Cookies are small data files that are placed on your device when you visit a website. They are widely used to make websites work, or to work more efficiently, as well as to provide reporting information.
          </p>

          <h6>2. Why We Use Cookies</h6>
          <p>We use cookies to:</p>
          <ul>
            <li>Recognize returning visitors</li>
            <li>Understand user behavior and site interaction</li>
            <li>Customize and enhance your experience</li>
            <li>Track traffic and performance analytics</li>
            <li>Improve website functionality and usability</li>
          </ul>

          <h6>3. Types of Cookies We Use</h6>
          <ul>
            <li><strong>Essential Cookies:</strong> Necessary for website functionality.</li>
            <li><strong>Analytics Cookies:</strong> Help us understand how users interact with our site.</li>
            <li><strong>Preference Cookies:</strong> Store your settings and preferences.</li>
            <li><strong>Marketing Cookies:</strong> Used to deliver personalized ads based on browsing activity.</li>
          </ul>

          <h6>4. Third-Party Cookies</h6>
          <p>
            We may allow third-party service providers, such as Google Analytics or Facebook Pixel, to use cookies on our site to analyze usage and serve advertisements. These third-party cookies are subject to the respective providers’ privacy and cookie policies.
          </p>

          <h6>5. How to Control Cookies</h6>
          <p>
            You have the right to decide whether to accept or reject cookies. Most web browsers automatically accept cookies, but you can usually modify your browser setting to decline cookies if you prefer.
          </p>
          <ul>
            <li>Visit your browser settings to manage cookies</li>
            <li>Opt-out of tracking through ad preference tools</li>
            <li>Note: Disabling cookies may affect website functionality</li>
          </ul>

          <h6>6. Changes to This Cookie Policy</h6>
          <p>
            We may update this Cookie Policy occasionally to reflect changes to our practices or for operational, legal, or regulatory reasons. Any updates will be posted on this page with a revised "Effective Date."
          </p>

          <h6>7. Contact Us</h6>
          <p>If you have any questions about our use of cookies or this Cookie Policy, you can contact us at:</p>
          <ul className="list-unstyled">
            <li>
              📧{" "}
              <a href="mailto:support@cybomb.com">
                Email: support@cybomb.com
              </a>
            </li>
            <li>
              🌐{" "}
              <a href="https://cybomb.com/">
                Website: www.cybomb.com
              </a>
            </li>
          </ul>

          <p>
            By using{" "}
            <a href="https://cybomb.com/">
              www.cybomb.com
            </a>, you consent to our use of cookies as described in this Cookie Policy.
          </p>
        </div>
      </section>
    </>
  );
}

export default Cookiecontent;
