import { Route } from "react-router-dom";
import Home from "../pages/home";
import About from "../pages/about";
import Services from "../component/services/services";
import Prortfolio from "../pages/portfolio";
import Contact from "../pages/contact";
import CybombBlog from '../pages/blog';
import NotFoundPage from "../pages/404";
import Privacypolicy from "../pages/privacy-policy";
import Terms from "../pages/terms";
import Refundpolicy from "../pages/refund-policy";
import Career from "../pages/career";
import Faq from "../pages/faq";
import Ecommdev from "../component/pages-services/design-development/Ecommerce-development/Ecomm-dev";
// import AdminLogin from "../Admin/Login/login";
import WhiteLabelApp from "../component/Whitelableapp/WhiteLabelApp";
import CheckoutPage from "../component/checkoutpage/CheckoutPage";
// import HomePage from "../pages/HomePage"; // Uncomment if you have this file


const emp1Routes = (
  <>
    <Route path="/" element={<Home />} /> {/* Using Home component */}
    <Route path="/about-us" element={<About />} />
    <Route path="/services" element={<Services />} />
    <Route path="/portfolio" element={<Prortfolio />} />
    <Route path="/career" element={<Career />} />
    <Route path="/faq" element={<Faq />} />
    <Route path="/contact-us" element={<Contact />} />
    <Route path="/blog" element={<CybombBlog />} />
    
    <Route path="/privacy-policy" element={<Privacypolicy />} />
    <Route path="/terms" element={<Terms />} />
    <Route path="/refund-policy" element={<Refundpolicy />} />
    <Route path="/services/ecommerce-development" element={<Ecommdev/>} />
    {/* <Route path="/admin/login" element={<AdminLogin/>} /> */}
    <Route path="/white-label-app" element={<WhiteLabelApp />} />
    <Route path="/checkout" element={<CheckoutPage />} />
    <Route path="*" element={<NotFoundPage/>} />
    <Route path="/services/ecommerce-development" element={<Ecommdev />} />
    <Route path="*" element={<NotFoundPage />} />
    
  </>
);

export default emp1Routes;