import AgileProcess from '../../../../common-ui/agile-process/agile-process';
import IosContent from './ios-cntent';
import Metatags from '../../../../../SEO/meta-tags';

function IosApp() {
  const metaPropsData = {
    title: "iOS App Development - Cybomb Technologies | Custom iPhone & iPad Applications",
    description:
      "Cybomb Technologies specializes in iOS app development, delivering high-quality, secure, and user-friendly applications for iPhone, iPad, and Apple Watch to meet your business needs.",
    keyword:
      "iOS App Development, iPhone App Development, iPad App Development, Apple Watch Apps, Mobile App Development, iOS Developers, Cybomb Technologies",
    url: "https://www.cybomb.com/services/ios-app-development",
    image: "https://www.cybomb.com/images/banner-2.jpg", // Replace with actual banner if available
  };

  return (
    <>
      <Metatags metaProps={metaPropsData} />
      <IosContent />
      <AgileProcess />
    </>
  );
}

export default IosApp;
