import HTML5Page from "./html-content";
import Metatags from "../../../../../SEO/meta-tags";

function HTML5App() {
  const metaPropsData = {
    title: "HTML5 Development Services - Cybomb Technologies | Modern Web Solutions",
    description:
      "Cybomb Technologies offers professional HTML5 development services, creating responsive, interactive, and high-performance websites optimized for all devices.",
    keyword:
      "HTML5 Development, Responsive Web Design, Frontend Development, Web Applications, Modern Websites, Cybomb Technologies",
    url: "https://www.cybomb.com/services/html5-development-service",
    image: "https://www.cybomb.com/images/banner-2.jpg", // Same as provided
  };

  return (
    <>
      <Metatags metaProps={metaPropsData} />
      <HTML5Page />
    </>
  );
}

export default HTML5App;
