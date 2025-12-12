import JavaPage from "./java-content";
import Metatags from "../../../../../SEO/meta-tags";

function JavaApp() {
  const metaPropsData = {
    title: "Java Development Services in chennai | Cybomb",
    description:
      "Cybomb Tech offers expert Java development services, delivering secure, scalable, and high-performance enterprise applications tailored to your business needs.",
    keyword:
      "Java Development Services in chennai, Java Development, Enterprise Applications, Backend Development, Spring Boot, Hibernate, Java Frameworks, Cybomb Technologies",
    url: "https://www.cybomb.com/services/java-development-service",
    image: "https://www.cybomb.com/images/banner-2.jpg", // Same as provided
  };
  return (
    <>
      <Metatags metaProps={metaPropsData} />
      <JavaPage />
    </>
  );
}

export default JavaApp;
