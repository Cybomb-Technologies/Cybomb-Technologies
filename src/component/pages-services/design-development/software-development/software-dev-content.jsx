import Info from './Sections/info';
import SoftwareServiceOfferings from './Sections/Software-service-offerings';
import SoftwareTechnologies from './Sections/Software-Technologies';
import SoftwareWhyChooseUs from './Sections/Software-WhyChooseUs';
import SoftwareCallToAction from './Sections/CallToAction';
import SoftwareDevelopmentProcess from './Sections/Software-Development-Process';
import SoftwareEngagement from './Sections/Software-Engagement';
import MobileDevProcess from '../../../common-ui/agile-process/agile-process';
import StillNotSure from '../../../common-ui/stillnotsure/StillNotSure';
export default function WebDevContent() {
  return (
    <main>
     <Info />
     <SoftwareServiceOfferings />
     <SoftwareTechnologies />
     <SoftwareWhyChooseUs/>
     <SoftwareCallToAction/>
     <SoftwareDevelopmentProcess/>
     <SoftwareEngagement/>
     <AgileProcess/>
     <StillNotSure/>

      
    </main>
  );
}