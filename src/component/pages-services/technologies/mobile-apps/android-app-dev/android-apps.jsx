import AndroidAppContent from './android-app-cntent';
import AgileProcess from '../../../../common-ui/agile-process/agile-process';
import Metatags from '../../../../../SEO/meta-tags';

function AndroidApp() {
  const metaPropsData = {
    title: "Android App Development - Cybomb Technologies | Custom Mobile Solutions",
    description:
      "Cybomb Technologies specializes in Android app development, delivering high-performance, scalable, and user-friendly mobile applications tailored to your business needs.",
    keyword:
      "Android App Development, Mobile App Development, Custom Android Apps, Android Application Developers, Mobile Solutions, Cybomb Technologies",
    url: "https://www.cybomb.com/services/android-app-development",
    image: "https://www.cybomb.com/images/banner-2.jpg", // Replace with actual banner if available
  };

  return (
    <>
      <Metatags metaProps={metaPropsData} />
      <AndroidAppContent />
      <AgileProcess />
    </>
  );
}

export default AndroidApp;
