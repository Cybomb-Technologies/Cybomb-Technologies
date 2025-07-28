import { Link } from "react-router-dom";

function Technologiesdropdown({ onLinkClick }) {
  return (
    <li className="nav-item dropdown custom-nav-item position-static">
      <Link
        className="nav-link dropdown-toggle custom-nav-link"
        to="/services"
        role="button"
        data-bs-toggle="dropdown"
        aria-expanded="false"
        // onClick={onDropdownClick}
      >
        Technologies
      </Link>

      <div className="dropdown-menu mega-dropdown container">
        <div className="row">
          <div className="col-xxl-2">
            <a className="dropdown-item text-primary">Mobile Apps</a>
            <Link
              className="dropdown-item"
              to="technologies/android-app-development"
              target="_blank"
              onClick={onLinkClick}
            >
              {/* <i
                className="bi bi-arrow-right arrow-right-icon bg-primary"
                style={{ fontSize: "10px" }}
              ></i>{" "} */}
              Android
            </Link>
            <a
              className="dropdown-item"
              href="/demo/HRMS/"
              target="_blank"
              onClick={onLinkClick}
            >
              {/* <i
                className="bi bi-arrow-right arrow-right-icon bg-primary"
                style={{ fontSize: "10px" }}
              ></i>{" "} */}
              React Native
            </a>
            <a
              className="dropdown-item"
              href="/demo/E-Commerce/"
              target="_blank"
              onClick={onLinkClick}
            >
              {/* <i
                className="bi bi-arrow-right arrow-right-icon bg-primary"
                style={{ fontSize: "10px" }}
              ></i>{" "} */}
              Ios
            </a>
            <a
              className="dropdown-item"
              href="/demo/E-Commerce/"
              target="_blank"
              onClick={onLinkClick}
            >
              {/* <i
                className="bi bi-arrow-right arrow-right-icon bg-primary"
                style={{ fontSize: "10px" }}
              ></i>{" "} */}
              Flutter
            </a>
            <a
              className="dropdown-item"
              href="/demo/E-Commerce/"
              target="_blank"
              onClick={onLinkClick}
            >
              {/* <i
                className="bi bi-arrow-right arrow-right-icon bg-primary"
                style={{ fontSize: "10px" }}
              ></i>{" "} */}
              Swift
            </a>
            <a
              className="dropdown-item"
              href="/demo/E-Commerce/"
              target="_blank"
              onClick={onLinkClick}
            >
              {/* <i
                className="bi bi-arrow-right arrow-right-icon bg-primary"
                style={{ fontSize: "10px" }}
              ></i>{" "} */}
              Kotlin
            </a>
            <a
              className="dropdown-item"
              href="/demo/E-Commerce/"
              target="_blank"
              onClick={onLinkClick}
            >
              {/* <i
                className="bi bi-arrow-right arrow-right-icon bg-primary"
                style={{ fontSize: "10px" }}
              ></i>{" "} */}
              Xamarin
            </a>
          </div>

          <div className="col-xxl-2">
            <a className="dropdown-item text-primary">Ecommerce</a>
            <a
              className="dropdown-item"
              href="/demo/grocery/"
              target="_blank"
              onClick={onLinkClick}
            >
              {/* <i
                className="bi bi-arrow-right arrow-right-icon bg-primary"
                style={{ fontSize: "10px" }}
              ></i>{" "} */}
              Adobe Commerce
            </a>
            <a
              className="dropdown-item"
              href="/demo/school-mangement"
              target="_blank"
              onClick={onLinkClick}
            >
              {/* <i
                className="bi bi-arrow-right arrow-right-icon bg-primary"
                style={{ fontSize: "10px" }}
              ></i>{" "} */}
              Shopify
            </a>
            <a
              className="dropdown-item"
              href="/demo/grocery/"
              target="_blank"
              onClick={onLinkClick}
            >
              {/* <i
                className="bi bi-arrow-right arrow-right-icon bg-primary"
                style={{ fontSize: "10px" }}
              ></i>{" "} */}
              Symfony
            </a>
            <a
              className="dropdown-item"
              href="/demo/school-mangement"
              target="_blank"
              onClick={onLinkClick}
            >
              {/* <i
                className="bi bi-arrow-right arrow-right-icon bg-primary"
                style={{ fontSize: "10px" }}
              ></i>{" "} */}
              WooCommerce
            </a>
            <a
              className="dropdown-item"
              href="/demo/school-mangement"
              target="_blank"
              onClick={onLinkClick}
            >
              {/* <i
                className="bi bi-arrow-right arrow-right-icon bg-primary"
                style={{ fontSize: "10px" }}
              ></i>{" "} */}
              BigCommerce
            </a>{" "}
            <a
              className="dropdown-item"
              href="/demo/school-mangement"
              target="_blank"
              onClick={onLinkClick}
            >
              {/* <i
                className="bi bi-arrow-right arrow-right-icon bg-primary"
                style={{ fontSize: "10px" }}
              ></i>{" "} */}
              Magento
            </a>
          </div>

          <div className="col-md-4">
            <a className="dropdown-item text-primary">CMS</a>
            <div className="row">
              <div className="col-md-6">
                <a
                  className="dropdown-item"
                  href="/demo/grocery/"
                  target="_blank"
                  onClick={onLinkClick}
                >
                  {/* <i
                    className="bi bi-arrow-right arrow-right-icon bg-primary"
                    style={{ fontSize: "10px" }}
                  ></i>{" "} */}
                  Wordpress
                </a>
                <a
                  className="dropdown-item"
                  href="/demo/school-mangement"
                  target="_blank"
                  onClick={onLinkClick}
                >
                  {/* <i
                    className="bi bi-arrow-right arrow-right-icon bg-primary"
                    style={{ fontSize: "10px" }}
                  ></i>{" "} */}
                  Drupal
                </a>
                <a
                  className="dropdown-item"
                  href="/demo/school-mangement"
                  target="_blank"
                  onClick={onLinkClick}
                >
                  {/* <i
                    className="bi bi-arrow-right arrow-right-icon bg-primary"
                    style={{ fontSize: "10px" }}
                  ></i>{" "} */}
                  Craft
                </a>{" "}
                <a
                  className="dropdown-item"
                  href="/demo/school-mangement"
                  target="_blank"
                  onClick={onLinkClick}
                >
                  {/* <i
                    className="bi bi-arrow-right arrow-right-icon bg-primary"
                    style={{ fontSize: "10px" }}
                  ></i>{" "} */}
                  Acquia
                </a>
                 <a
                  className="dropdown-item"
                  href="/demo/school-mangement"
                  target="_blank"
                  onClick={onLinkClick}
                >
                  {/* <i
                    className="bi bi-arrow-right arrow-right-icon bg-primary"
                    style={{ fontSize: "10px" }}
                  ></i>{" "} */}
                  Joomla
                </a>
                <a
                  className="dropdown-item"
                  href="/demo/school-mangement"
                  target="_blank"
                  onClick={onLinkClick}
                >
                  {/* <i
                    className="bi bi-arrow-right arrow-right-icon bg-primary"
                    style={{ fontSize: "10px" }}
                  ></i>{" "} */}
                  SharePoint
                </a>
              </div>
              <div className="col-md-6">
               
                <a
                  className="dropdown-item"
                  href="/demo/school-mangement"
                  target="_blank"
                  onClick={onLinkClick}
                >
                  {/* <i
                    className="bi bi-arrow-right arrow-right-icon bg-primary"
                    style={{ fontSize: "10px" }}
                  ></i>{" "} */}
                  Umbraco
                </a>
                <a
                  className="dropdown-item"
                  href="/demo/school-mangement"
                  target="_blank"
                  onClick={onLinkClick}
                >
                  {/* <i
                    className="bi bi-arrow-right arrow-right-icon bg-primary"
                    style={{ fontSize: "10px" }}
                  ></i>{" "} */}
                  Sitecore
                </a>
                <a
                  className="dropdown-item"
                  href="/demo/school-mangement"
                  target="_blank"
                  onClick={onLinkClick}
                >
                  {/* <i
                    className="bi bi-arrow-right arrow-right-icon bg-primary"
                    style={{ fontSize: "10px" }}
                  ></i>{" "} */}
                  Pantheon
                </a>
                <a
                  className="dropdown-item"
                  href="/demo/school-mangement"
                  target="_blank"
                  onClick={onLinkClick}
                >
                  {/* <i
                    className="bi bi-arrow-right arrow-right-icon bg-primary"
                    style={{ fontSize: "10px" }}
                  ></i>{" "} */}
                  AEM Development
                </a>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <a className="dropdown-item text-primary">Custom Development</a>
            <div className="row">
              <div className="col-md-6">
                {" "}
                <a
                  className="dropdown-item"
                  href="/demo/taxi-booking-app"
                  target="_blank"
                  onClick={onLinkClick}
                >
                  {/* <i
                    className="bi bi-arrow-right arrow-right-icon bg-primary"
                    style={{ fontSize: "10px" }}
                  ></i>{" "} */}
                  PHP
                </a>
                <a
                  className="dropdown-item"
                  href="/demo/real-estate-app"
                  target="_blank"
                  onClick={onLinkClick}
                >
                  {/* <i
                    className="bi bi-arrow-right arrow-right-icon bg-primary"
                    style={{ fontSize: "10px" }}
                  ></i>{" "} */}
                  Laravel
                </a>
                <a
                  className="dropdown-item"
                  href="/demo/real-estate-app"
                  target="_blank"
                  onClick={onLinkClick}
                >
                  {/* <i
                    className="bi bi-arrow-right arrow-right-icon bg-primary"
                    style={{ fontSize: "10px" }}
                  ></i>{" "} */}
                  ROR
                </a>
                <a
                  className="dropdown-item"
                  href="/demo/real-estate-app"
                  target="_blank"
                  onClick={onLinkClick}
                >
                  {/* <i
                    className="bi bi-arrow-right arrow-right-icon bg-primary"
                    style={{ fontSize: "10px" }}
                  ></i>{" "} */}
                  Power Platform
                </a>
                <a
                  className="dropdown-item"
                  href="/demo/real-estate-app"
                  target="_blank"
                  onClick={onLinkClick}
                >
                  {/* <i
                    className="bi bi-arrow-right arrow-right-icon bg-primary"
                    style={{ fontSize: "10px" }}
                  ></i>{" "} */}
                  HTML5
                </a>
                <a
                  className="dropdown-item"
                  href="/demo/real-estate-app"
                  target="_blank"
                  onClick={onLinkClick}
                >
                  {/* <i
                    className="bi bi-arrow-right arrow-right-icon bg-primary"
                    style={{ fontSize: "10px" }}
                  ></i>{" "} */}
                  JavaScript
                </a>
                <a
                  className="dropdown-item"
                  href="/demo/real-estate-app"
                  target="_blank"
                  onClick={onLinkClick}
                >
                  {/* <i
                    className="bi bi-arrow-right arrow-right-icon bg-primary"
                    style={{ fontSize: "10px" }}
                  ></i>{" "} */}
                  Zoho Creator
                </a>
              </div>
              <div className="col-md-6">
                <a
                  className="dropdown-item"
                  href="/demo/taxi-booking-app"
                  target="_blank"
                  onClick={onLinkClick}
                >
                  {/* <i
                    className="bi bi-arrow-right arrow-right-icon bg-primary"
                    style={{ fontSize: "10px" }}
                  ></i>{" "} */}
                  Python
                </a>
                <a
                  className="dropdown-item"
                  href="/demo/real-estate-app"
                  target="_blank"
                  onClick={onLinkClick}
                >
                  {/* <i
                    className="bi bi-arrow-right arrow-right-icon bg-primary"
                    style={{ fontSize: "10px" }}
                  ></i>{" "} */}
                  DotNet
                </a>
                <a
                  className="dropdown-item"
                  href="/demo/real-estate-app"
                  target="_blank"
                  onClick={onLinkClick}
                >
                  {/* <i
                    className="bi bi-arrow-right arrow-right-icon bg-primary"
                    style={{ fontSize: "10px" }}
                  ></i>{" "} */}
                  NodeJS
                </a>
                <a
                  className="dropdown-item"
                  href="/demo/real-estate-app"
                  target="_blank"
                  onClick={onLinkClick}
                >
                  {/* <i
                    className="bi bi-arrow-right arrow-right-icon bg-primary"
                    style={{ fontSize: "10px" }}
                  ></i>{" "} */}
                  Angular
                </a>
                <a
                  className="dropdown-item"
                  href="/demo/real-estate-app"
                  target="_blank"
                  onClick={onLinkClick}
                >
                  {/* <i
                    className="bi bi-arrow-right arrow-right-icon bg-primary"
                    style={{ fontSize: "10px" }}
                  ></i>{" "} */}
                  Spring
                </a>
                <a
                  className="dropdown-item"
                  href="/demo/real-estate-app"
                  target="_blank"
                  onClick={onLinkClick}
                >
                  {/* <i
                    className="bi bi-arrow-right arrow-right-icon bg-primary"
                    style={{ fontSize: "10px" }}
                  ></i>{" "} */}
                  C#
                </a>
              </div>
            </div>
          </div>
        </div>
        <hr />
        <div className="row">
          <div className="col-xxl-2">
            <a className="dropdown-item text-primary">Full Stack Development</a>
            <a
              className="dropdown-item"
              href="/demo/ai-agent/"
              target="_blank"
              onClick={onLinkClick}
            >
              {/* <i
                className="bi bi-arrow-right arrow-right-icon bg-primary"
                style={{ fontSize: "10px" }}
              ></i>{" "} */}
              Full Stack MERN
            </a>
          </div>
          <div className="col-xxl-2">
            <a className="dropdown-item text-primary">CRM</a>
            <a
              className="dropdown-item"
              href="/demo/ai-agent/"
              target="_blank"
              onClick={onLinkClick}
            >
              {/* <i
                className="bi bi-arrow-right arrow-right-icon bg-primary"
                style={{ fontSize: "10px" }}
              ></i>{" "} */}
              ServiceNow
            </a>
            <a
              className="dropdown-item"
              href="/demo/ai-agent/"
              target="_blank"
              onClick={onLinkClick}
            >
              {/* <i
                className="bi bi-arrow-right arrow-right-icon bg-primary"
                style={{ fontSize: "10px" }}
              ></i>{" "} */}
              Salesforce
            </a>
          </div>

          <div className="col-xxl-2">
            <a className="dropdown-item text-primary">Games</a>
            <a
              className="dropdown-item"
              href="/demo/ai-agent/"
              target="_blank"
              onClick={onLinkClick}
            >
              {/* <i
                className="bi bi-arrow-right arrow-right-icon bg-primary"
                style={{ fontSize: "10px" }}
              ></i>{" "} */}
              Unity
            </a>
            <a
              className="dropdown-item"
              href="/demo/ai-agent/"
              target="_blank"
              onClick={onLinkClick}
            >
              {/* <i
                className="bi bi-arrow-right arrow-right-icon bg-primary"
                style={{ fontSize: "10px" }}
              ></i>{" "} */}
              Unreal
            </a>
          </div>
          <div className="col-xxl-2">
            <a className="dropdown-item text-primary">Cloud</a>
            <a
              className="dropdown-item"
              href="/demo/ai-agent/"
              target="_blank"
              onClick={onLinkClick}
            >
              {/* <i
                className="bi bi-arrow-right arrow-right-icon bg-primary"
                style={{ fontSize: "10px" }}
              ></i>{" "} */}
              AWS
            </a>
            <a
              className="dropdown-item"
              href="/demo/ai-agent/"
              target="_blank"
              onClick={onLinkClick}
            >
              {/* <i
                className="bi bi-arrow-right arrow-right-icon bg-primary"
                style={{ fontSize: "10px" }}
              ></i>{" "} */}
              Azure
            </a>
          </div>
          <div className="col-xxl-2">
            <a className="dropdown-item text-primary">Other</a>
            <a
              className="dropdown-item"
              href="/demo/ai-agent/"
              target="_blank"
              onClick={onLinkClick}
            >
              {/* <i
                className="bi bi-arrow-right arrow-right-icon bg-primary"
                style={{ fontSize: "10px" }}
              ></i>{" "} */}
              Golang
            </a>
            <a
              className="dropdown-item"
              href="/demo/ai-agent/"
              target="_blank"
              onClick={onLinkClick}
            >
              {/* <i
                className="bi bi-arrow-right arrow-right-icon bg-primary"
                style={{ fontSize: "10px" }}
              ></i>{" "} */}
              AR/VR
            </a>
          </div>
        </div>
      </div>
    </li>
  );
}

export default Technologiesdropdown;
