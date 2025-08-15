import GoogleCloudContent from './google-cloud-content';
import StillNotSure from '../../common-ui/stillnotsure/StillNotSure';
import Metatags from '../../../SEO/meta-tags';
function GoogleCloud() {
  const metaPropsData = {
  title: "Google Cloud Services - Cybomb Technologies | GCP Solutions & Deployment",
  description:
    "Leverage Cybomb Technologies' Google Cloud Services for secure, scalable, and high-performance solutions. From migration to deployment, we help businesses harness the full power of Google Cloud Platform (GCP).",
  keyword:
    "Google Cloud Services, GCP Solutions, Google Cloud Migration, Google Cloud Deployment, GCP Consulting, Cloud Infrastructure Management, Google Cloud Hosting India, Scalable Cloud Applications",
  url: "https://www.cybomb.com/Services/google-cloud",
  image: "https://www.cybomb.com", 
};

  return (
    <>
      <GoogleCloudContent />
      <StillNotSure />
      <Metatags  metaProps={metaPropsData}/>
    </>
  );
}

export default GoogleCloud;