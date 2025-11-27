import AzureContent from './azure-cloud-content';
import StillNotSure from '../../common-ui/stillnotsure/StillNotSure';
import Metatags from '../../../SEO/meta-tags';
function AzureCloud() {
  const metaPropsData = {
  title: "Azure Cloud Services - Cybomb Technologies | Microsoft Azure Solutions & Deployment",
  description:
    "Explore Cybomb Technologies' Azure Cloud Services delivering secure, scalable, and enterprise-grade solutions. From cloud migration to deployment, we empower businesses with Microsoft Azure’s powerful infrastructure and tools.",
  keyword:
    "Azure Cloud Services, Microsoft Azure Solutions, Azure Migration, Azure Deployment, Azure Cloud Consulting, Cloud Infrastructure Management, Azure Hosting India, Scalable Cloud Applications",
  url: "https://www.cybomb.com/Services/azure-cloud",
  image: "https://www.cybomb.com", 
};

  return (
    <>
      <AzureContent />
      <StillNotSure />
      <Metatags  metaProps={metaPropsData}/>
    </>
  );
}

export default AzureCloud;