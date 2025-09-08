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
import Cookiepolicy from "../pages/cookie-info";
import AndroidApp from "../component/pages-services/technologies/mobile-apps/android-app-dev/android-apps";
import ReactNative from "../component/pages-services/technologies/mobile-apps/react-native/react-native";
import IosApp from "../component/pages-services/technologies/mobile-apps/ios-app-dev/ios";
import FlutterApp from "../component/pages-services/technologies/mobile-apps/flutter-app/flutter";
import SwiftApp from "../component/pages-services/technologies/mobile-apps/swift-app-dev/swift";
import KotlinApp from "../component/pages-services/technologies/mobile-apps/kotlin-app-dev/kotlin";
import XamarinApp from "../component/pages-services/technologies/mobile-apps/xamarin-aap-dev/xamarin";
import StratergyServices from "../component/pages-dataui/data-page/stratergy-consulting/stratergy";
import ProcessingServices from "../component/pages-dataui/data-page/processing/processings";
import GovernanceSolution from "../component/pages-dataui/data-page/governance-solution/governance";
import StorageServices from "../component/pages-dataui/data-page/storage-solution/storage";
import QualityServices from "../component/pages-dataui/data-page/quality-management/quality";
import ModelingServices from "../component/pages-dataui/data-page/modeling-design/modeling";
import ArchitectureData from "../component/pages-dataui/data-page/architecturedata/architecture";
import AnalyticsandVisualization from "../component/pages-dataui/data-page/anlyticsandvisualization/analytics";
import CloudData from "../component/pages-dataui/data-page/cloud-data-migration/cloud-data";
import CustomAiServices from "../component/pages-dataui/ui-page/custom-ai-development/customAi";
import AiConsultingServices from "../component/pages-dataui/ui-page/ai-consulting/ai-consuting-service";
import AiBusinessServices from "../component/pages-dataui/ui-page/ai-business/ai-business-service";
import LargeLanguageServices from "../component/pages-dataui/ui-page/large-language-model/large-language-service";
import AiPersolizedServices from "../component/pages-dataui/ui-page/ai-persolized-customer/ai-persolized-service";
import BlockChainServices from "../component/pages-dataui/ui-page/blockchain/blockchain-service";
import PHPApp from "../component/pages-services/technologies/custom-development/php/php";
import LaravelApp from "../component/pages-services/technologies/custom-development/laravel/laravel";
import RORApp from "../component/pages-services/technologies/custom-development/ror/ror";
import PowerPlatformApp from "../component/pages-services/technologies/custom-development/power-platform/power";
import HTML5App from "../component/pages-services/technologies/custom-development/html5/html5";
import JavaScriptApp from "../component/pages-services/technologies/custom-development/javascript/javascript";
import ZohoCreatorApp from "../component/pages-services/technologies/custom-development/zohocreator/zohocreator";
import PythonApp from "../component/pages-services/technologies/custom-development/python/python";
import DotnetApp from "../component/pages-services/technologies/custom-development/dotnet/dotnet";
import NodeJSApp from "../component/pages-services/technologies/custom-development/nodejs/nodejs";
import AngularApp from "../component/pages-services/technologies/custom-development/angular/angular";
import SpringApp from "../component/pages-services/technologies/custom-development/spring/spring";
import CSharpApp from "../component/pages-services/technologies/custom-development/csharp/csharp";
import ReactApp from "../component/pages-services/technologies/custom-development/react/reactpage";
import JavaApp from "../component/pages-services/technologies/custom-development/java/java";
import CaseStudy from "../pages/case-study";

import DatabaseApp from "../component/pages-services/technologies/custom-development/database/database";
import VersionControlApp from "../component/pages-services/technologies/custom-development/versioncontrol/versioncontrolapp";
const emp4Routes = (
  <>
    <Route path="/services/api-development" element={<ApiDevelopment />} />

    <Route path="/services/hosting-service" element={<HostingServices/>}/>
    <Route path="/services/server-support" element={<SupportServices/>}/>
    <Route path="/services/development-support" element={<DevelopmentSupport/>}/>
    <Route path="/services/staff-agumentation" element={<Staff/>}/>

    <Route path="/services/social-media-marketing" element={<SocialMarket/>}/>
    <Route path="/services/search-engine-optimization" element={<SeoServices/>}/>
    <Route path="/services/performance-optimization" element={<PerformanceServices/>}/>
    <Route path="/services/pay-per-click" element={<PpcServices/>}/>
    <Route path="/services/ORM-services" element={<OrmServices/>}/>

    <Route path="/cookie-policy" element={<Cookiepolicy />} />

    <Route path="/services/android-app-development" element={<AndroidApp/>}/>
    <Route path="/services/react-native-development" element={<ReactNative/>}/>
    <Route path="/services/ios-app-development" element={<IosApp/>}/>
    <Route path="/services/flutter-app-development" element={<FlutterApp/>}/>
    <Route path="/services/swift-app-development" element={<SwiftApp/>}/>
    <Route path="/services/kotlin-app-development" element={<KotlinApp/>}/>
    <Route path="/services/xamarin-app-development" element={<XamarinApp/>}/>

    <Route path="/services/data-strategy-consulting" element={<StratergyServices/>}/>
    <Route path="/services/data-processing" element={<ProcessingServices/>}/>
    <Route path="/services/data-governance-solution" element={<GovernanceSolution/>}/>
    <Route path="/services/data-storage-solution" element={<StorageServices/>}/>
    <Route path="/services/data-quality-management" element={<QualityServices/>}/>
    <Route path="/services/data-modelling-design" element={<ModelingServices/>}/>
    <Route path="/services/data-architecture" element={<ArchitectureData/>}/>
    <Route path="/services/data-analytics-visualization" element={<AnalyticsandVisualization/>}/>
    <Route path="/services/cloud-data-migration" element={<CloudData/>}/>

    <Route path="/services/custom-ai-development" element={<CustomAiServices/>}/>
    <Route path="/services/ai-consulting-strategy" element={<AiConsultingServices/>}/>
    <Route path="/services/ai-business-intelligence" element={<AiBusinessServices/>}/>
    <Route path="/services/ai-large-language-model" element={<LargeLanguageServices/>}/>
    <Route path="/services/ai-persolized-experience" element={<AiPersolizedServices/>}/>
    <Route path="/services/ai-blockchain-integration" element={<BlockChainServices/>}/>

    <Route path="/services/php-development-service" element={<PHPApp/>}/>
    <Route path="/services/laravel-development-service" element={<LaravelApp/>}/>
    <Route path="/services/ror-development-service" element={<RORApp/>}/>
    <Route path="/services/power-platform-development-service" element={<PowerPlatformApp/>}/>
    <Route path="/services/html5-development-service" element={<HTML5App/>}/>
    <Route path="/services/javascript-development-service" element={<JavaScriptApp/>}/>
    <Route path="/services/zohocreator-development-service" element={<ZohoCreatorApp/>}/>
    <Route path="/services/python-development-service" element={<PythonApp/>}/>
    <Route path="/services/dotnet-development-service" element={<DotnetApp/>}/>
    <Route path="/services/nodejs-development-service" element={<NodeJSApp/>}/>
    <Route path="/services/angular-development-service" element={<AngularApp/>}/>
    <Route path="/services/spring-development-service" element={<SpringApp/>}/>
    <Route path="/services/csharp-development-service" element={<CSharpApp/>}/>
    <Route path="/services/react-development-service" element={<ReactApp/>}/>
    <Route path="/services/java-development-service" element={<JavaApp/>}/>
    <Route path="/case-study" element={<CaseStudy/>}/>
    





  <Route path="/services/database-development-service" element={<DatabaseApp/>}/>
    <Route path="/services/versioncontrol-development-service" element={<VersionControlApp/>}/>
  </>
);

export default emp4Routes;
