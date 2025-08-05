import { Route } from "react-router-dom";
import ApiDevelopment from "../component/pages-services/design-development/Api-development/api-devlopment";
import HostingServices from "../component/pages-services/support-services/Hosting/hosting-service";
import DevelopmentSupport from "../component/pages-services/support-services/Development-support/development-support";
import Staff from "../component/pages-services/support-services/Staff-augmentation/staff";
import SupportServices from "../component/pages-services/support-services/Server-support/support-service";
import SocialMarket from "../component/pages-services/digital-market/social-media-marketing/Social-marketing";
import SeoServices from "../component/pages-services/digital-market/Seo/Seo";
import PerformanceServices from "../component/pages-services/digital-market/performance-optimization/performance";
import PpcServices from "../component/pages-services/digital-market/pay-per-click/pay-per-clicks";
import OrmServices from "../component/pages-services/digital-market/orm/online-orm";
import Cookiepolicy from "../pages/cookie-policy";
import AndroidApp from "../component/pages-services/technologies/mobile-apps/android-app-dev/android-apps";

const emp4Routes = (
  <>
    <Route path="/services/api-development" element={<ApiDevelopment />} />
    <Route path="/services/hosting-service" element={<HostingServices/>}/>
    <Route path="/services/support-service" element={<SupportServices/>}/>
    <Route path="/services/development-support" element={<DevelopmentSupport/>}/>
    <Route path="/services/Staff-agumentation" element={<Staff/>}/>
    <Route path="/services/social-media-marketing" element={<SocialMarket/>}/>
    <Route path="/services/search-engine-optimization" element={<SeoServices/>}/>
    <Route path="/services/performance-optimization" element={<PerformanceServices/>}/>
    <Route path="/services/pay-per-click" element={<PpcServices/>}/>
    <Route path="/services/ORM-services" element={<OrmServices/>}/>
    <Route path="/cookie-policy" element={<Cookiepolicy />} />
    <Route path="/services/android-app" element={<AndroidApp/>}/>
  </>
);

export default emp4Routes;
