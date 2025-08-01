import { Route } from "react-router-dom";
import Home from "../pages/home";
import About from "../pages/about";
import Services from "../component/services/services";
import Mobileappservice from "../pages/mobile-app-service";
import Webappservice from "../pages/web-app-service";
import Aimachinelearning from "../pages/ai-machine-learning";
import Saasproduct from "../pages/saas-product";
import Uiuxservices from "../pages/ui-ux-service";
import Softwareconsulting from "../pages/software-consulting ";
import Prortfolio from "../pages/portfolio";
import Contact from "../pages/contact";
import Blog from "../pages/blog";
import NotFoundPage from "../pages/404";
import Privacypolicy from "../pages/privacy-policy";
import Terms from "../pages/terms";
import Refundpolicy from "../pages/refund-policy";
import Career from "../pages/career";
import Faq from "../pages/faq";
import Ecommdev from "../component/pages-services/design-development/Ecommerce-development/Ecomm-dev";



const emp1Routes = (
  <>
    <Route path="/" element={<Home />} />
    <Route path="/about" element={<About />} />
    <Route path="/services" element={<Services />} />
    <Route path="/services/mobile-app" element={<Mobileappservice />} />
    <Route path="/services/web-app" element={<Webappservice />} />
    <Route
      path="/services/ai-machine-learning"
      element={<Aimachinelearning />}
    />
    <Route path="/services/saas-product" element={<Saasproduct />} />
    <Route path="/services/ui-ux" element={<Uiuxservices />} />
    <Route
      path="/services/software-consulting-Strategy"
      element={<Softwareconsulting />}
    />
    <Route path="/portfolio" element={<Prortfolio />} />
    <Route path="/career" element={<Career />} />
    <Route path="/faq" element={<Faq />} />

    <Route path="/contact" element={<Contact />} />
    <Route path="/blog" element={<Blog />} />
    <Route path="/privacy-policy" element={<Privacypolicy />} />
    <Route path="/terms" element={<Terms />} />
    <Route path="/refund-policy" element={<Refundpolicy />} />
    <Route path="/services/Ecommerce-development" element ={ <Ecommdev/>} />
    <Route path="*" element ={ <NotFoundPage/>} />
    
  </>
);

export default emp1Routes;
