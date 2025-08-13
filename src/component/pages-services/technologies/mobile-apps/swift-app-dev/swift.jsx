import AgileProcess from '../../../../common-ui/agile-process/agile-process';
import SwiftContent from './swift-cntent';
import Metatags from '../../../../../SEO/meta-tags';

function SwiftApp() {
  const metaPropsData = {
    title: "Swift App Development - Cybomb Technologies | Native iOS Applications",
    description:
      "Cybomb Technologies offers professional Swift app development services, building high-performance, secure, and user-friendly native iOS applications for iPhone, iPad, and Apple Watch.",
    keyword:
      "Swift App Development, iOS Development, Native iOS Apps, iPhone App Development, iPad App Development, Swift Developers, Cybomb Technologies",
    url: "https://www.cybomb.com/services/swift-app-development",
    image: "https://www.cybomb.com/images/banner-2.jpg", // Replace with actual banner if available
  };

  return (
    <>
      <Metatags metaProps={metaPropsData} />
      <SwiftContent />
      <AgileProcess />
    </>
  );
}

export default SwiftApp;
