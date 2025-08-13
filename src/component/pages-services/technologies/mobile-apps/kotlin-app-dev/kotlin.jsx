import AgileProcess from '../../../../common-ui/agile-process/agile-process';
import KotlinContent from './kotlin-cntent';
import Metatags from '../../../../../SEO/meta-tags';

function KotlinApp() {
  const metaPropsData = {
    title: "Kotlin App Development - Cybomb Technologies | Modern Android Solutions",
    description:
      "Cybomb Technologies provides expert Kotlin app development services, delivering modern, scalable, and high-performance Android applications with clean code and robust architecture.",
    keyword:
      "Kotlin App Development, Android Development, Mobile App Development, Kotlin Developers, Modern Android Apps, Cybomb Technologies",
    url: "https://www.cybomb.com/services/kotlin-app-development",
    image: "https://www.cybomb.com/images/banner-2.jpg", // Replace with actual banner if available
  };

  return (
    <>
      <Metatags metaProps={metaPropsData} />
      <KotlinContent />
      <AgileProcess />
    </>
  );
}

export default KotlinApp;
