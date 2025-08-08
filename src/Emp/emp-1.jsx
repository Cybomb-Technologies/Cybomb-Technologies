import { Route } from "react-router-dom";
import Home from "../pages/home";
import About from "../pages/about";
import Services from "../component/services/services";
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
    <Route path="/about-us" element={<About />} />
    <Route path="/services" element={<Services />} />
    <Route path="/portfolio" element={<Prortfolio />} />
    <Route path="/career" element={<Career />} />
    <Route path="/faq" element={<Faq />} />
    <Route path="/contact-us" element={<Contact />} />
    <Route path="/blog" element={<Blog />} />
    <Route path="/privacy-policy" element={<Privacypolicy />} />
    <Route path="/terms" element={<Terms />} />
    <Route path="/refund-policy" element={<Refundpolicy />} />
    <Route path="/services/ecommerce-development" element ={ <Ecommdev/>} />
    <Route path="*" element ={ <NotFoundPage/>} />
    
  </>
);

export default emp1Routes;
