import SpringPage from "./spring-content";
import StillNotSure from "../../../../common-ui/stillnotsure/StillNotSure";
import Metatags from "../../../../../SEO/meta-tags";

function SpringApp() {
  const metaPropsData = {
    title: "Spring Development Services - Cybomb Technologies | Enterprise Java Solutions",
    description:
      "Cybomb Technologies offers professional Spring development services, building scalable, secure, and high-performance Java applications tailored to your business needs.",
    keyword:
      "Spring Development, Java Spring, Enterprise Applications, Spring Boot, Web Applications, Cybomb Technologies",
    url: "https://www.cybomb.com/services/spring-development",
    image: "https://www.cybomb.com/images/banner-2.jpg", // same as provided
  };

  return (
    <>
      <Metatags metaProps={metaPropsData} />
      <SpringPage />
      <StillNotSure />
    </>
  );
}

export default SpringApp;
