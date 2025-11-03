import { Route } from "react-router-dom";
import WebDev from "../component/pages-services/design-development/web-development/web-dev";
import SoftwareDev from "../component/pages-services/design-development/software-development/Software-dev";
import BespokeDev from "../component/pages-services/design-development/bespoke-development/bespoke-dev";
import SwIntDev from "../component/pages-services/design-development/custom-software-integration-services/sw-int-dev";
import AwsCloud from "../component/pages-cloud/aws-cloud/aws-cloud-content";
import AzureCloud from "../component/pages-cloud/azure-cloud/azure-cloud";
import DevopsCloud from "../component/pages-cloud/devops/devops";
import GoogleCloud from "../component/pages-cloud/google-cloud/google-cloud";
import DevOpsSupport from "../component/pages-services/support-services/Devops-support/devops-support";
import ITSupport from "../component/pages-services/support-services/It-support-services/it-support";
import DigitalFulfilmentSupport from "../component/pages-services/support-services/Digital-Fulfilment-support/Digital-Fulfilment";
import SaaSSolutions from "../component/pages-services/design-development/saas-solutions/saas-solutions";
import UiUxDesign from "../component/pages-services/design-development/ui-ux-design/ui-ux-design";
import TechConsulting from "../component/pages-services/design-development/tech-consulting/tech-consulting";
import AiIntegration from "../component/pages-services/design-development/ai-integration/ai-integration";
import AdobeCommerce from "../component/pages-services/technologies/ecommerce/adobe-commerce/adobe-commerce";
import Shopify from "../component/pages-services/technologies/ecommerce/shopify/shopify";
import Symfony from "../component/pages-services/technologies/ecommerce/symfony/symfony";
import WooCommerce from "../component/pages-services/technologies/ecommerce/woo-commerce/woo-commerce";
import BigCommerce from "../component/pages-services/technologies/ecommerce/big-commerce/big-commerce";
import Magento from "../component/pages-services/technologies/ecommerce/magento/magento";
import AWSSecurity from "../component/pages-security/aws-web-app-security/aws-security";
import MobileSecurity from "../component/pages-security/mobile-application-services/mobile-security";
import ApiSecurity from "../component/pages-security/api-security/api-security";
import CloudSecurity from "../component/pages-security/cloud-security-services/cloud-security";
import NetworkPen from "../component/pages-security/network-penetration-testing/network-security";
import PricingPage from "../component/page-pricing/pricing/pricing";
import UnityGames from "../component/pages-services/technologies/games/unity/unity";
import UnrealGames from "../component/pages-services/technologies/games/unreal/unreal";
import CybombBlog from "../component/blog/cybomb-blog";
import BlogDetail from "../component/blog/blog-details";
import TagPage from "../component/blog/tag-page";
import CheckoutPage from "../component/page-pricing/pricing/CheckoutPage"
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
    <Route path="/services/saas-solutions" element={<SaaSSolutions/>}/>
    <Route path="/services/ui-ux-design" element={<UiUxDesign/>}/>
    <Route path="/services/tech-consulting" element={<TechConsulting/>}/>
    <Route path="/services/ai-integration" element={<AiIntegration/>}/>
    <Route path="/services/aws-cloud" element={<AwsCloud />} />
    <Route path="/services/devops" element={<DevopsCloud />} />
    <Route path="/services/azure-cloud" element={<AzureCloud />} />
    <Route path="/services/google-cloud" element={<GoogleCloud />} />
    <Route path="/services/devops-support" element={<DevOpsSupport/>}/>
    <Route path="/services/it-support" element={<ITSupport />} />
    <Route path="/services/digital-fulfilment-support" element={<DigitalFulfilmentSupport/>}/>
    <Route path="/services/adobe-commerce" element={<AdobeCommerce/>}/>
    <Route path="/services/shopify" element={<Shopify/>}/>
    <Route path="/services/symfony" element={<Symfony/>}/>
    <Route path="/services/woo-commerce" element={<WooCommerce/>}/>
    <Route path="/services/big-commerce" element={<BigCommerce/>}/>
    <Route path="/services/magento" element={<Magento/>}/>
    <Route path="/services/aws-web-app-security" element={<AWSSecurity/>}/>
    <Route path="/services/mobile-application-services" element={<MobileSecurity/>}/>
    <Route path="/services/api-security" element={<ApiSecurity/>}/>
    <Route path="/services/cloud-security-services" element={<CloudSecurity/>}/>
    <Route path="/services/network-penetration-testing" element={<NetworkPen/>}/>
    <Route path="/pricing" element={<PricingPage/>}/>
    <Route path="/services/unity" element={<UnityGames/>}/>
    <Route path="/services/unreal" element={<UnrealGames/>}/>
    <Route path="/" element={<CybombBlog />} />
    <Route path="/blog/:id" element={<BlogDetail />} />
    <Route path="/tags/:tagName" element={<TagPage />} />
    <Route path="/checkout" element={<CheckoutPage />} />
  </>
);

export default emp2Routes;
