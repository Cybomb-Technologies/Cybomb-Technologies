import { Route } from "react-router-dom";
import MobileAppDevelopment from "../component/pages-services/design-development/mobile-app-development/mobile-app-development";
import AndoridAppDevelopment from "../component/pages-services/technologies/mobile-apps/android-app-dev/android-app-development";
import GameDevelopment from "../component/pages-services/design-development/game-development/game-development";
import CRMServices from "../component/pages-services/enterprise-services/crm/crm-services";
const emp3Routes = (
  <>
    <Route
      path="/services/mobile-app-development"
      element={<MobileAppDevelopment />}
    />
    <Route
      path="/technologies/android-app-development"
      element={<AndoridAppDevelopment />}
    />
    <Route path="/services/game-development" element={<GameDevelopment />} />
    <Route path="/services/crm-services" element={<CRMServices />} />
  </>
);

export default emp3Routes;
