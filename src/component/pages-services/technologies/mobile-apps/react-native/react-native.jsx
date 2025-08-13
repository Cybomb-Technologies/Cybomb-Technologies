import ReactNativeContent from './react-native-cntent';
import AgileProcess from '../../../../common-ui/agile-process/agile-process';
import Metatags from '../../../../../SEO/meta-tags';

function ReactApp() {
  const metaPropsData = {
    title: "React Native App Development - Cybomb Technologies | Cross-Platform Mobile Apps",
    description:
      "Cybomb Technologies specializes in React Native app development, delivering high-performance cross-platform mobile applications for Android and iOS with a single codebase.",
    keyword:
      "React Native App Development, Cross-Platform Mobile Apps, Mobile App Development, React Native Developers, Hybrid Apps, Cybomb Technologies",
    url: "https://www.cybomb.com/services/react-native-development",
    image: "https://www.cybomb.com/images/banner-2.jpg", // Replace with actual banner if available
  };

  return (
    <>
      <Metatags metaProps={metaPropsData} />
      <ReactNativeContent />
      <AgileProcess />
    </>
  );
}

export default ReactApp;
