import { Link } from "react-router-dom";

function Technologiesdropdown({ onLinkClick }) {
  return (
    <li className="nav-item dropdown custom-nav-item position-static">
      <Link
        className="nav-link dropdown-toggle custom-nav-link"
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
            <Link className="dropdown-item text-primary">Mobile Apps</Link>
            <Link
              className="dropdown-item"
              // to="technologies/android-app-development"
              onClick={onLinkClick}
            >
              {/* <i
                className="bi bi-arrow-right arrow-right-icon bg-primary"
                style={{ fontSize: "10px" }}
              ></i>{" "} */}
              Android
            </Link>
            <Link
              className="dropdown-item"
              // to="/demo/HRMS/"
              onClick={onLinkClick}
            >
              {/* <i
                className="bi bi-arrow-right arrow-right-icon bg-primary"
                style={{ fontSize: "10px" }}
              ></i>{" "} */}
              React Native
            </Link>
            <Link
              className="dropdown-item"
              // to="/demo/E-Commerce/"
              onClick={onLinkClick}
            >
              {/* <i
                className="bi bi-arrow-right arrow-right-icon bg-primary"
                style={{ fontSize: "10px" }}
              ></i>{" "} */}
              Ios
            </Link>
            <Link
              className="dropdown-item"
              // to="/demo/E-Commerce/"
              onClick={onLinkClick}
            >
              {/* <i
                className="bi bi-arrow-right arrow-right-icon bg-primary"
                style={{ fontSize: "10px" }}
              ></i>{" "} */}
              Flutter
            </Link>
            <Link
              className="dropdown-item"
              // to="/demo/E-Commerce/"
              onClick={onLinkClick}
            >
              {/* <i
                className="bi bi-arrow-right arrow-right-icon bg-primary"
                style={{ fontSize: "10px" }}
              ></i>{" "} */}
              Swift
            </Link>
            <Link
              className="dropdown-item"
              // to="/demo/E-Commerce/"
              onClick={onLinkClick}
            >
              {/* <i
                className="bi bi-arrow-right arrow-right-icon bg-primary"
                style={{ fontSize: "10px" }}
              ></i>{" "} */}
              Kotlin
            </Link>
            <Link
              className="dropdown-item"
              // to="/demo/E-Commerce/"
              onClick={onLinkClick}
            >
              {/* <i
                className="bi bi-arrow-right arrow-right-icon bg-primary"
                style={{ fontSize: "10px" }}
              ></i>{" "} */}
              Xamarin
            </Link>
          </div>

          <div className="col-xxl-2">
            <Link className="dropdown-item text-primary">Ecommerce</Link>
            <Link
              className="dropdown-item"
              // to="/demo/grocery/"
              onClick={onLinkClick}
            >
              {/* <i
                className="bi bi-arrow-right arrow-right-icon bg-primary"
                style={{ fontSize: "10px" }}
              ></i>{" "} */}
              Adobe Commerce
            </Link>
            <Link
              className="dropdown-item"
              // to="/demo/school-mangement"
              onClick={onLinkClick}
            >
              {/* <i
                className="bi bi-arrow-right arrow-right-icon bg-primary"
                style={{ fontSize: "10px" }}
              ></i>{" "} */}
              Shopify
            </Link>
            <Link
              className="dropdown-item"
              // to="/demo/grocery/"
              onClick={onLinkClick}
            >
              {/* <i
                className="bi bi-arrow-right arrow-right-icon bg-primary"
                style={{ fontSize: "10px" }}
              ></i>{" "} */}
              Symfony
            </Link>
            <Link
              className="dropdown-item"
              // to="/demo/school-mangement"
              onClick={onLinkClick}
            >
              {/* <i
                className="bi bi-arrow-right arrow-right-icon bg-primary"
                style={{ fontSize: "10px" }}
              ></i>{" "} */}
              WooCommerce
            </Link>
            <Link
              className="dropdown-item"
              // to="/demo/school-mangement"
              onClick={onLinkClick}
            >
              {/* <i
                className="bi bi-arrow-right arrow-right-icon bg-primary"
                style={{ fontSize: "10px" }}
              ></i>{" "} */}
              BigCommerce
            </Link>{" "}
            <Link
              className="dropdown-item"
              // to="/demo/school-mangement"
              onClick={onLinkClick}
            >
              {/* <i
                className="bi bi-arrow-right arrow-right-icon bg-primary"
                style={{ fontSize: "10px" }}
              ></i>{" "} */}
              Magento
            </Link>
          </div>

          <div className="col-md-4">
            <Link className="dropdown-item text-primary">CMS</Link>
            <div className="row">
              <div className="col-md-6">
                <Link
                  className="dropdown-item"
                  // to="/demo/grocery/"
  
                  onClick={onLinkClick}
                >
                  {/* <i
                    className="bi bi-arrow-right arrow-right-icon bg-primary"
                    style={{ fontSize: "10px" }}
                  ></i>{" "} */}
                  Wordpress
                </Link>
                <Link
                  className="dropdown-item"
                  // to="/demo/school-mangement"
  
                  onClick={onLinkClick}
                >
                  {/* <i
                    className="bi bi-arrow-right arrow-right-icon bg-primary"
                    style={{ fontSize: "10px" }}
                  ></i>{" "} */}
                  Drupal
                </Link>
                <Link
                  className="dropdown-item"
                  // to="/demo/school-mangement"
  
                  onClick={onLinkClick}
                >
                  {/* <i
                    className="bi bi-arrow-right arrow-right-icon bg-primary"
                    style={{ fontSize: "10px" }}
                  ></i>{" "} */}
                  Craft
                </Link>{" "}
                <Link
                  className="dropdown-item"
                  // to="/demo/school-mangement"
  
                  onClick={onLinkClick}
                >
                  {/* <i
                    className="bi bi-arrow-right arrow-right-icon bg-primary"
                    style={{ fontSize: "10px" }}
                  ></i>{" "} */}
                  Acquia
                </Link>
                 <Link
                  className="dropdown-item"
                  // to="/demo/school-mangement"
  
                  onClick={onLinkClick}
                >
                  {/* <i
                    className="bi bi-arrow-right arrow-right-icon bg-primary"
                    style={{ fontSize: "10px" }}
                  ></i>{" "} */}
                  Joomla
                </Link>
                <Link
                  className="dropdown-item"
                  // to="/demo/school-mangement"
  
                  onClick={onLinkClick}
                >
                  {/* <i
                    className="bi bi-arrow-right arrow-right-icon bg-primary"
                    style={{ fontSize: "10px" }}
                  ></i>{" "} */}
                  SharePoint
                </Link>
              </div>
              <div className="col-md-6">
               
                <Link
                  className="dropdown-item"
                  // to="/demo/school-mangement"
  
                  onClick={onLinkClick}
                >
                  {/* <i
                    className="bi bi-arrow-right arrow-right-icon bg-primary"
                    style={{ fontSize: "10px" }}
                  ></i>{" "} */}
                  Umbraco
                </Link>
                <Link
                  className="dropdown-item"
                  // to="/demo/school-mangement"
  
                  onClick={onLinkClick}
                >
                  {/* <i
                    className="bi bi-arrow-right arrow-right-icon bg-primary"
                    style={{ fontSize: "10px" }}
                  ></i>{" "} */}
                  Sitecore
                </Link>
                <Link
                  className="dropdown-item"
                  // to="/demo/school-mangement"
  
                  onClick={onLinkClick}
                >
                  {/* <i
                    className="bi bi-arrow-right arrow-right-icon bg-primary"
                    style={{ fontSize: "10px" }}
                  ></i>{" "} */}
                  Pantheon
                </Link>
                <Link
                  className="dropdown-item"
                  // to="/demo/school-mangement"
  
                  onClick={onLinkClick}
                >
                  {/* <i
                    className="bi bi-arrow-right arrow-right-icon bg-primary"
                    style={{ fontSize: "10px" }}
                  ></i>{" "} */}
                  AEM Development
                </Link>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <Link className="dropdown-item text-primary">Custom Development</Link>
            <div className="row">
              <div className="col-md-6">
                {" "}
                <Link
                  className="dropdown-item"
                  // to="/demo/taxi-booking-app"
  
                  onClick={onLinkClick}
                >
                  {/* <i
                    className="bi bi-arrow-right arrow-right-icon bg-primary"
                    style={{ fontSize: "10px" }}
                  ></i>{" "} */}
                  PHP
                </Link>
                <Link
                  className="dropdown-item"
                  // to="/demo/real-estate-app"
  
                  onClick={onLinkClick}
                >
                  {/* <i
                    className="bi bi-arrow-right arrow-right-icon bg-primary"
                    style={{ fontSize: "10px" }}
                  ></i>{" "} */}
                  Laravel
                </Link>
                <Link
                  className="dropdown-item"
                  // to="/demo/real-estate-app"
  
                  onClick={onLinkClick}
                >
                  {/* <i
                    className="bi bi-arrow-right arrow-right-icon bg-primary"
                    style={{ fontSize: "10px" }}
                  ></i>{" "} */}
                  ROR
                </Link>
                <Link
                  className="dropdown-item"
                  // to="/demo/real-estate-app"
  
                  onClick={onLinkClick}
                >
                  {/* <i
                    className="bi bi-arrow-right arrow-right-icon bg-primary"
                    style={{ fontSize: "10px" }}
                  ></i>{" "} */}
                  Power Platform
                </Link>
                <Link
                  className="dropdown-item"
                  // to="/demo/real-estate-app"
  
                  onClick={onLinkClick}
                >
                  {/* <i
                    className="bi bi-arrow-right arrow-right-icon bg-primary"
                    style={{ fontSize: "10px" }}
                  ></i>{" "} */}
                  HTML5
                </Link>
                <Link
                  className="dropdown-item"
                  // to="/demo/real-estate-app"
  
                  onClick={onLinkClick}
                >
                  {/* <i
                    className="bi bi-arrow-right arrow-right-icon bg-primary"
                    style={{ fontSize: "10px" }}
                  ></i>{" "} */}
                  JavaScript
                </Link>
                <Link
                  className="dropdown-item"
                  // to="/demo/real-estate-app"
  
                  onClick={onLinkClick}
                >
                  {/* <i
                    className="bi bi-arrow-right arrow-right-icon bg-primary"
                    style={{ fontSize: "10px" }}
                  ></i>{" "} */}
                  Zoho Creator
                </Link>
              </div>
              <div className="col-md-6">
                <Link
                  className="dropdown-item"
                  // to="/demo/taxi-booking-app"
  
                  onClick={onLinkClick}
                >
                  {/* <i
                    className="bi bi-arrow-right arrow-right-icon bg-primary"
                    style={{ fontSize: "10px" }}
                  ></i>{" "} */}
                  Python
                </Link>
                <Link
                  className="dropdown-item"
                  // to="/demo/real-estate-app"
  
                  onClick={onLinkClick}
                >
                  {/* <i
                    className="bi bi-arrow-right arrow-right-icon bg-primary"
                    style={{ fontSize: "10px" }}
                  ></i>{" "} */}
                  DotNet
                </Link>
                <Link
                  className="dropdown-item"
                  // to="/demo/real-estate-app"
  
                  onClick={onLinkClick}
                >
                  {/* <i
                    className="bi bi-arrow-right arrow-right-icon bg-primary"
                    style={{ fontSize: "10px" }}
                  ></i>{" "} */}
                  NodeJS
                </Link>
                <Link
                  className="dropdown-item"
                  // to="/demo/real-estate-app"
  
                  onClick={onLinkClick}
                >
                  {/* <i
                    className="bi bi-arrow-right arrow-right-icon bg-primary"
                    style={{ fontSize: "10px" }}
                  ></i>{" "} */}
                  Angular
                </Link>
                <Link
                  className="dropdown-item"
                  // to="/demo/real-estate-app"
  
                  onClick={onLinkClick}
                >
                  {/* <i
                    className="bi bi-arrow-right arrow-right-icon bg-primary"
                    style={{ fontSize: "10px" }}
                  ></i>{" "} */}
                  Spring
                </Link>
                <Link
                  className="dropdown-item"
                  // to="/demo/real-estate-app"
  
                  onClick={onLinkClick}
                >
                  {/* <i
                    className="bi bi-arrow-right arrow-right-icon bg-primary"
                    style={{ fontSize: "10px" }}
                  ></i>{" "} */}
                  C#
                </Link>
              </div>
            </div>
          </div>
        </div>
        <hr />
        <div className="row">
          <div className="col-xxl-2">
            <Link className="dropdown-item text-primary">Full Stack Development</Link>
            <Link
              className="dropdown-item"
              // to="/demo/ai-agent/"
              onClick={onLinkClick}
            >
              {/* <i
                className="bi bi-arrow-right arrow-right-icon bg-primary"
                style={{ fontSize: "10px" }}
              ></i>{" "} */}
              Full Stack MERN
            </Link>
          </div>
          <div className="col-xxl-2">
            <Link className="dropdown-item text-primary">CRM</Link>
            <Link
              className="dropdown-item"
              // to="/demo/ai-agent/"
              onClick={onLinkClick}
            >
              {/* <i
                className="bi bi-arrow-right arrow-right-icon bg-primary"
                style={{ fontSize: "10px" }}
              ></i>{" "} */}
              ServiceNow
            </Link>
            <Link
              className="dropdown-item"
              // to="/demo/ai-agent/"
              onClick={onLinkClick}
            >
              {/* <i
                className="bi bi-arrow-right arrow-right-icon bg-primary"
                style={{ fontSize: "10px" }}
              ></i>{" "} */}
              Salesforce
            </Link>
          </div>

          <div className="col-xxl-2">
            <Link className="dropdown-item text-primary">Games</Link>
            <Link
              className="dropdown-item"
              // to="/demo/ai-agent/"
              onClick={onLinkClick}
            >
              {/* <i
                className="bi bi-arrow-right arrow-right-icon bg-primary"
                style={{ fontSize: "10px" }}
              ></i>{" "} */}
              Unity
            </Link>
            <Link
              className="dropdown-item"
              // to="/demo/ai-agent/"
              onClick={onLinkClick}
            >
              {/* <i
                className="bi bi-arrow-right arrow-right-icon bg-primary"
                style={{ fontSize: "10px" }}
              ></i>{" "} */}
              Unreal
            </Link>
          </div>
          <div className="col-xxl-2">
            <Link className="dropdown-item text-primary">Cloud</Link>
            <Link
              className="dropdown-item"
              // to="/demo/ai-agent/"
              onClick={onLinkClick}
            >
              {/* <i
                className="bi bi-arrow-right arrow-right-icon bg-primary"
                style={{ fontSize: "10px" }}
              ></i>{" "} */}
              AWS
            </Link>
            <Link
              className="dropdown-item"
              // to="/demo/ai-agent/"
              onClick={onLinkClick}
            >
              {/* <i
                className="bi bi-arrow-right arrow-right-icon bg-primary"
                style={{ fontSize: "10px" }}
              ></i>{" "} */}
              Azure
            </Link>
          </div>
          <div className="col-xxl-2">
            <Link className="dropdown-item text-primary">Other</Link>
            <Link
              className="dropdown-item"
              // to="/demo/ai-agent/"
              onClick={onLinkClick}
            >
              {/* <i
                className="bi bi-arrow-right arrow-right-icon bg-primary"
                style={{ fontSize: "10px" }}
              ></i>{" "} */}
              Golang
            </Link>
            <Link
              className="dropdown-item"
              // to="/demo/ai-agent/"
              onClick={onLinkClick}
            >
              {/* <i
                className="bi bi-arrow-right arrow-right-icon bg-primary"
                style={{ fontSize: "10px" }}
              ></i>{" "} */}
              AR/VR
            </Link>
          </div>
        </div>
      </div>
    </li>
  );
}

export default Technologiesdropdown;
