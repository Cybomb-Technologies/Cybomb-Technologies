import HostingServicesContent from './hosting-service-content';
import StillNotSure from '../../../common-ui/stillnotsure/StillNotSure';
import Metatags from '../../../../SEO/meta-tags';

function HostingServices() {
  const metaPropsData = {
    title: "Hosting Services - Cybomb Technologies | Reliable & Scalable Hosting Solutions",
    description:
      "Cybomb Technologies provides secure, fast, and scalable hosting services including cloud hosting, VPS, dedicated servers, and managed hosting for businesses of all sizes.",
    keyword:
      "Hosting Services, Cloud Hosting, VPS Hosting, Dedicated Hosting, Managed Hosting, Website Hosting, Secure Hosting Solutions, Cybomb Technologies",
    url: "https://www.cybomb.com/services/hosting-service",
    image: "https://www.cybomb.com/images/banner-2.jpg", // Replace with actual hosting banner if available
  };

  return (
    <>
      <Metatags metaProps={metaPropsData} />
      <HostingServicesContent />
      <StillNotSure />
    </>
  );
}

export default HostingServices;
