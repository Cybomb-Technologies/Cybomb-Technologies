import JavaPage from "./java-content";
import StillNotSure from "../../../../common-ui/stillnotsure/StillNotSure";
import Metatags from "../../../../../SEO/meta-tags";

function JavaApp() {
  const metaPropsData = {
    title: "Java Development Services - Cybomb Technologies | Enterprise Solutions",
    description:
      "Cybomb Technologies offers expert Java development services, delivering secure, scalable, and high-performance enterprise applications tailored to your business needs.",
    keyword:
      "Java Development, Enterprise Applications, Backend Development, Spring Boot, Hibernate, Java Frameworks, Cybomb Technologies",
    url: "https://www.cybomb.com/services/java-development-service",
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
