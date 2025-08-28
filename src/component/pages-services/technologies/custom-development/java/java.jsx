import JavaPage from "./java-content";
import StillNotSure from "../../../../common-ui/stillnotsure/StillNotSure";
import Metatags from "../../../../../SEO/meta-tags";

function JavaApp() {
  const metaPropsData = {
    title: "JavaScript Development Services - Cybomb Technologies | Interactive Web Solutions",
    description:
      "Cybomb Technologies provides expert JavaScript development services, building dynamic, interactive, and high-performance web applications tailored to your business needs.",
    keyword:
      "JavaScript Development, Frontend Development, Web Applications, JS Frameworks, Interactive Websites, Cybomb Technologies",
    url: "https://www.cybomb.com/services/javascript-development-service",
    image: "https://www.cybomb.com/images/banner-2.jpg", // Same as provided
  };

  return (
    <>
      <Metatags metaProps={metaPropsData} />
      <JavaPage />
      <StillNotSure />
    </>
  );
}

export default JavaApp;
