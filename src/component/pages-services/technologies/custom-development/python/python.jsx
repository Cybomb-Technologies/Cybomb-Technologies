import PythonPage from "./python-content";
import Metatags from "../../../../../SEO/meta-tags";

function PythonApp() {
  const metaPropsData = {
    title: "Python Development Services - Cybomb Technologies | Scalable & Efficient Solutions",
    description:
      "Cybomb Technologies offers expert Python development services, building scalable, high-performance applications for web, automation, data analysis, and AI solutions.",
    keyword:
      "Python Development, Web Applications, Automation Solutions, Data Analysis, AI Solutions, Backend Development, Cybomb Technologies",
    url: "https://www.cybomb.com/services/python-development-service",
    image: "https://www.cybomb.com/images/banner-2.jpg", // Same as provided
  };

  return (
    <>
      <Metatags metaProps={metaPropsData} />
      <PythonPage />
    </>
  );
}

export default PythonApp;
