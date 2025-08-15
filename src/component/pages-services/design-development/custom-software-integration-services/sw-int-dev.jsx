import SwIntDevContent from './sw-int-dev-content';
import AgileProcess from '../../../common-ui/agile-process/agile-process';
import StillNotSure from '../../../common-ui/stillnotsure/StillNotSure';
import Metatags from '../../../../SEO/meta-tags';



export default function SwIntDev() {
  const metaPropsData = {
  title: "Custom Software Integration Services - Cybomb Technologies | Seamless System Connectivity",
  description:
    "Cybomb Technologies offers Custom Software Integration Services to connect applications, databases, and cloud platforms. We ensure seamless data flow, automation, and enhanced business efficiency through tailored integration solutions.",
  keyword:
    "Custom Software Integration Services, Application Integration, System Integration Solutions, API Integration, Database Integration, Cloud Platform Integration, Enterprise Integration Services, Software Integration India",
  url: "https://www.cybomb.com/services/custom-software-integration-services",
  image: "https://www.cybomb.com", 
};

  return (
    <>
      <SwIntDevContent />
      <AgileProcess/>
      <StillNotSure/>
      <Metatags  metaProps={metaPropsData}/>
      
    </>
  );
}
