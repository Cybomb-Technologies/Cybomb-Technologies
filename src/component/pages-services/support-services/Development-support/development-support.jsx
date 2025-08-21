import DevelopmentSupportContent from './Development-support-content';
import StillNotSure from '../../../common-ui/stillnotsure/StillNotSure';
import Metatags from '../../../../SEO/meta-tags';

function DevelopmentSupport() {
  const metaPropsData = {
    title: "Development Support Services - Cybomb Technologies | Expert Technical Assistance",
    description:
      "Cybomb Technologies offers professional development support services, including bug fixing, performance optimization, feature enhancements, and ongoing technical assistance for web and mobile applications.",
    keyword:
      "Development Support, Technical Assistance, Application Support, Bug Fixing, Performance Optimization, Software Maintenance, Cybomb Technologies",
    url: "https://www.cybomb.com/services/development-support",
    image: "https://www.cybomb.com/images/banner-2.jpg", // Replace with actual banner if available
  };


  return (
    <>
      <Metatags metaProps={metaPropsData} />
      <DevelopmentSupportContent />
      <StillNotSure />
    </>
  );
}

export default DevelopmentSupport;
