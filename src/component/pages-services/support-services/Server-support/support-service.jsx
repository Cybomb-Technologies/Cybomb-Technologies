import SupportServicesContent from './support-service-content';
import StillNotSure from '../../../common-ui/stillnotsure/StillNotSure';
import Metatags from '../../../../SEO/meta-tags';

function SupportServices() {
  const metaPropsData = {
    title: "Support Services - Cybomb Technologies | Comprehensive Business Assistance",
    description:
      "Cybomb Technologies provides end-to-end support services, including technical assistance, customer support, maintenance, and operational help to ensure your business runs efficiently.",
    keyword:
      "Support Services, Technical Support, Business Assistance, Maintenance Services, Customer Support, Operational Support, Cybomb Technologies",
    url: "https://www.cybomb.com/services/support-service",
    image: "https://www.cybomb.com/images/banner-2.jpg", // Replace with actual banner if available
  };

  return (
    <>
      <Metatags metaProps={metaPropsData} />
      <SupportServicesContent />
      <StillNotSure />
    </>
  );
}

export default SupportServices;
