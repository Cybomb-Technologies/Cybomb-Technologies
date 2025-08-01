import { Route } from "react-router-dom";
import WebDev from "../component/pages-services/design-development/web-development/web-dev";
import SoftwareDev from "../component/pages-services/design-development/software-development/Software-dev";
import BespokeDev from "../component/pages-services/design-development/bespoke-development/bespoke-dev";
import SwIntDev from "../component/pages-services/design-development/custom-software-integration-services/sw-int-dev";
import AwsCloud from "../component/pages-cloud/aws-cloud/aws-cloud-content";
import AzureCloud from "../component/pages-cloud/azure-cloud/azure-cloud";
import DevopsCloud from "../component/pages-cloud/devops/devops";
import GoogleCloud from "../component/pages-cloud/google-cloud/google-cloud";

// Just return <Route />s. Don't wrap in <Routes>
const emp2Routes = (
  <>
    <Route path="/services/web-development" element={<WebDev />} />
    <Route path="/services/software-development" element={<SoftwareDev />} />
    <Route path="/services/bespoke-development" element={<BespokeDev />} />
    <Route
      path="/services/custom-software-integration-services"
      element={<SwIntDev />}
    />
    <Route path="/services/aws-cloud" element={<AwsCloud />} />
    <Route path="/services/devops" element={<DevopsCloud />} />
    <Route path="/services/azure-cloud" element={<AzureCloud />} />
    <Route path="/services/google-cloud" element={<GoogleCloud />} />
  </>
);

export default emp2Routes;
