import { Route } from "react-router-dom";
import WordPress from "../component/pages-services/technologies/cms/wordpress/wordpress";
import Drupal from "../component/pages-services/technologies/cms/drupal/drupal";
import Craft from "../component/pages-services/technologies/cms/craft/craft";
import Acquia from "../component/pages-services/technologies/cms/acquia/acquia";
import Joomla from "../component/pages-services/technologies/cms/joomla/joomla";
import SharePoint from "../component/pages-services/technologies/cms/sharepoint/sharepoint";
import Umbraco from "../component/pages-services/technologies/cms/umbraco/umbraco";
import Sitecore from "../component/pages-services/technologies/cms/sitecore/sitecore";
import Pantheon from "../component/pages-services/technologies/cms/pantheon/pantheon";
import Aem from "../component/pages-services/technologies/cms/aem/aem";
import CSSApp from "../component/pages-services/technologies/custom-development/css/css";
const emp5Routes = (
  <>
    <Route path="/services/wordpress" element={<WordPress />} />
    <Route path="/services/drupal" element={<Drupal />} />
    <Route path="/services/craft" element={<Craft />} />
    <Route path="/services/acquia" element={<Acquia />} />
    <Route path="/services/joomla" element={<Joomla />} />
    <Route path="/services/sharepoint" element={<SharePoint />} />
    <Route path="/services/umbraco" element={<Umbraco />} />
    <Route path="/services/sitecore" element={<Sitecore />} />
    <Route path="/services/pantheon" element={<Pantheon />} />
    <Route path="/services/aem" element={<Aem />} />
    <Route path="/services/css" element={<CSSApp />} />

    {/* <Route path="/services/api-development" element={<ApiDevelopment />} />
     <Route path="/services/hosting-service" element={<HostingServices />} /> */}
  </>
);

export default emp5Routes;
