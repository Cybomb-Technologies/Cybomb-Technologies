import AgileProcess from '../../../../common-ui/agile-process/agile-process';
import XamarinContent from './xamarin-cntent';
import Metatags from '../../../../../SEO/meta-tags';

function XamarinApp() {
  const metaPropsData = {
    title: "Xamarin App Development - Cybomb Technologies | Cross-Platform Mobile Solutions",
    description:
      "Cybomb Technologies provides expert Xamarin app development services, delivering high-performance, native-like mobile applications for Android, iOS, and Windows platforms using a single codebase.",
    keyword:
      "Xamarin App Development, Cross-Platform Mobile Apps, Xamarin Developers, Android and iOS Apps, Mobile App Development, Cybomb Technologies",
    url: "https://www.cybomb.com/services/xamarin-app-development",
    image: "https://www.cybomb.com/images/banner-2.jpg", // Replace with actual banner if available
  };

  return (
    <>
      <Metatags metaProps={metaPropsData} />
      <XamarinContent />
      <AgileProcess />
    </>
  );
}

export default XamarinApp;
