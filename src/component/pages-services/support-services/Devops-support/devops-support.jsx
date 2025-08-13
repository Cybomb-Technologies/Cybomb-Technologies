import DevOpsSupportContent from './devops-support-content';
import StillNotSure from '../../../common-ui/stillnotsure/StillNotSure';
import Metatags from '../../../../SEO/meta-tags';

function DevOpsSupport() {
  const metaPropsData = {
    title: "DevOps Support Services - Cybomb Technologies | CI/CD & Cloud Automation Experts",
    description:
      "Cybomb Technologies provides expert DevOps support services, including CI/CD pipeline setup, cloud infrastructure automation, monitoring, and deployment optimization for seamless development and operations.",
    keyword:
      "DevOps Support, CI/CD Services, Cloud Automation, Infrastructure as Code, Continuous Integration, Continuous Deployment, DevOps Consulting, Cybomb Technologies",
    url: "https://www.cybomb.com/services/devops-support",
    image: "https://www.cybomb.com/images/banner-2.jpg", // Replace with actual banner if available
  };

  return (
    <>
      <Metatags metaProps={metaPropsData} />
      <DevOpsSupportContent />
      <StillNotSure />
    </>
  );
}

export default DevOpsSupport;
