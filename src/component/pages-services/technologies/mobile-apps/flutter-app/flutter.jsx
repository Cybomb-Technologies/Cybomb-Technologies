import AgileProcess from '../../../../common-ui/agile-process/agile-process';
import FlutterContent from './flutter-cntent';
import Metatags from '../../../../../SEO/meta-tags';

function FlutterApp() {
  const metaPropsData = {
    title: "Flutter App Development | Cross Platform App Solutions - Cybomb",
    description:
      "Cybomb Technologies offers expert Flutter app development services, building high-performance, cross-platform mobile applications with a single codebase for Android and iOS.",
    keyword:
      "Flutter App Development, Cross-Platform Apps, Mobile App Development, Flutter Developers, Hybrid Apps, Cybomb Technologies",
    url: "https://www.cybomb.com/services/flutter-app-development",
    image: "https://www.cybomb.com/images/banner-2.jpg", // Replace with actual banner if available
  };

  return (
    <>
      <Metatags metaProps={metaPropsData} />
      <FlutterContent />
      <AgileProcess />
    </>
  );
}

export default FlutterApp;
