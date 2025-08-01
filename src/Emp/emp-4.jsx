import { Route } from "react-router-dom";
import ApiDevelopment from "../component/pages-services/design-development/Api-development/api-devlopment";
import HostingServices from "../component/pages-services/support-services/Hosting/hosting-service";
const emp4Routes = (
  <>
    <Route path="/services/api-development" element={<ApiDevelopment />} />
    <Route path="/services/hosting-service" element={<HostingServices/>}/>
  </>
);

export default emp4Routes;
