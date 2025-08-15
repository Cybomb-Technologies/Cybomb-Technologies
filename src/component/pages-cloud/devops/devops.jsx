import DevopsContent from './devops-content';
import StillNotSure from '../../common-ui/stillnotsure/StillNotSure';
import Metatags from '../../../SEO/meta-tags';
function DevopsCloud() {
  const metaPropsData = {
  title: "DevOps Cloud Services - Cybomb Technologies | CI/CD, Automation & Cloud Infrastructure",
  description:
    "Cybomb Technologies offers DevOps Cloud Services to streamline software delivery through CI/CD pipelines, automation, monitoring, and scalable cloud infrastructure management for faster, more reliable deployments.",
  keyword:
    "DevOps Cloud Services, CI/CD Automation, Cloud Infrastructure Management, DevOps Consulting, Continuous Integration, Continuous Delivery, Cloud Automation Solutions, DevOps Services India",
  url: "https://www.cybomb.com/Services/devops",
  image: "https://www.cybomb.com", 
};

  return (
    <>
      <DevopsContent />
      <StillNotSure />
      <Metatags  metaProps={metaPropsData}/>
    </>
  );
}

export default DevopsCloud;