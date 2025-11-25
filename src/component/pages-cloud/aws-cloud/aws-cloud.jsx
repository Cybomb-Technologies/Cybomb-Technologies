import AWSContent from './aws-cloud-content';
import StillNotSure from './../../common-ui/stillnotsure/StillNotSure';
import Metatags from '../../../SEO/meta-tags';
function AwsCloud() {
  const metaPropsData = {
  title: "AWS Cloud Services in chennai | Cybomb Tech MNC",
  description:
    "Discover Cybomb Tech MNC AWS Cloud Services, offering secure, scalable, and cost-effective cloud solutions. From migration to deployment, we help businesses leverage AWS for performance, reliability, and innovation.",
  keyword:
    "AWS Cloud Services in chennai, AWS Migration, AWS Deployment, AWS Cloud Consulting, Cloud Infrastructure Management, AWS Solutions India, Secure Cloud Hosting, Scalable Cloud Applications",
  url: "https://www.cybomb.com/Services/aws-cloud",
  image: "https://www.cybomb.com", 
};

  return (
    <>
      <AWSContent />
      <StillNotSure />
      <Metatags  metaProps={metaPropsData}/>
    </>
  );
}

export default AwsCloud;