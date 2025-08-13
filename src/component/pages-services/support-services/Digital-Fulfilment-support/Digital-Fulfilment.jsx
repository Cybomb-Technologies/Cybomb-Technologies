import DigitalFulfilmentSupportContent from './Digital-Fulfilment-content';
import StillNotSure from '../../../common-ui/stillnotsure/StillNotSure';
import Metatags from '../../../../SEO/meta-tags';

function DigitalFulfilmentSupport() {
  const metaPropsData = {
    title: "Digital Fulfilment Support - Cybomb Technologies | End-to-End Digital Solutions",
    description:
      "Cybomb Technologies offers complete digital fulfilment support services, including content management, e-commerce operations, digital asset delivery, and process automation to streamline your business.",
    keyword:
      "Digital Fulfilment, E-commerce Support, Content Management, Digital Asset Delivery, Process Automation, Online Store Management, Cybomb Technologies",
    url: "https://www.cybomb.com/services/digital-fulfilment-support",
    image: "https://www.cybomb.com/images/banner-2.jpg", // Replace with actual banner if available
  };

  return (
    <>
      <Metatags metaProps={metaPropsData} />
      <DigitalFulfilmentSupportContent />
      <StillNotSure />
    </>
  );
}

export default DigitalFulfilmentSupport;
