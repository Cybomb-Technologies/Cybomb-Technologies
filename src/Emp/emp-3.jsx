import { Route } from "react-router-dom";
import MobileAppDevelopment from "../component/pages-services/design-development/mobile-app-development/mobile-app-development";
import GameDevelopment from "../component/pages-services/design-development/game-development/game-development";
import CRMServices from "../component/pages-services/enterprise-services/crm/crm-services";
import CloudSolutions from "../component/pages-services/enterprise-services/cloud-solutions/cloud-solutions";
import DataEngineering from "../component/pages-services/enterprise-services/data-engineering/data-engineering";
import AIMLServices from "../component/pages-services/enterprise-services/ai-ml/ai-ml-services";
import Salesforce from "../component/pages-services/enterprise-services/salesforce/salesforce";
import HubSpot from "../component/pages-services/enterprise-services/hubspot/hubspot";
import Zoho from "../component/pages-services/enterprise-services/zoho/zoho";
import HireDev from "../component/pages-services/hire-dev/hire-dev";

const emp3Routes = (
  <>
    <Route
      path="/services/mobile-app-development"
      element={<MobileAppDevelopment />}
    />
    
    <Route path="/services/game-development" element={<GameDevelopment />} />
    <Route path="/services/crm-services" element={<CRMServices />} />
    <Route path="/services/cloud-solution" element={<CloudSolutions/>} />
    <Route path="/services/data-engineering" element={<DataEngineering/>} />
    <Route path="/services/ai-ml-services" element={<AIMLServices/>} />
    <Route path="/services/salesforce-services" element={<Salesforce/>} />
    <Route path="/services/hubspot-services" element={<HubSpot/>} />
    <Route path="/services/zoho-services" element={<Zoho/>} />
    <Route path="/hire-developers" element={<HireDev/>} />
   
  </>
);

export default emp3Routes;
