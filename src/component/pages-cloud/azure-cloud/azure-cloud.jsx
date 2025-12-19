import AzureContent from "./azure-cloud-content";
import StillNotSure from "../../common-ui/stillnotsure/StillNotSure";
import Metatags from "../../../SEO/meta-tags";
function AzureCloud() {
  const metaPropsData = {
    title: "Best Azure Cloud Service Provider in Chennai | Cybomb Tech",
    description:
      "Cybomb Technologies offers secure Azure migration, deployment & consulting services. Leading Microsoft Azure solutions provider for scalable cloud applications.",
    keyword:
      "azure cloud services, microsoft azure, azure migration, cloud deployment, azure consulting",
    url: "https://www.cybomb.com/Services/azure-cloud",
    image: "https://www.cybomb.com/images/logo-11.png",
  };

  return (
    <>
      <AzureContent />
      <StillNotSure />
      <Metatags metaProps={metaPropsData} />
    </>
  );
}

export default AzureCloud;
