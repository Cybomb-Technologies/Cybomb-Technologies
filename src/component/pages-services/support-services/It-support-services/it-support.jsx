import ITSupportContent from './it-support-content';
import StillNotSure from '../../../common-ui/stillnotsure/StillNotSure';
import Metatags from '../../../../SEO/meta-tags';

function ITSupport() {
  const metaPropsData = {
    title: "IT Support Services - Cybomb Technologies | Reliable Technical Assistance",
    description:
      "Cybomb Technologies provides professional IT support services, including troubleshooting, system maintenance, network management, and helpdesk solutions to keep your business running smoothly.",
    keyword:
      "IT Support, Technical Support, Helpdesk Services, Network Management, System Maintenance, IT Assistance, Troubleshooting, Cybomb Technologies",
    url: "https://www.cybomb.com/services/digital-fulfilment-support",
    image: "https://www.cybomb.com/images/banner-2.jpg", // Replace with actual banner if available
  };

  return (
    <>
      <Metatags metaProps={metaPropsData} />
      <ITSupportContent />
      <StillNotSure />
    </>
  );
}

export default ITSupport;
