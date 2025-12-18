import JavaPage from "./java-content";
import Metatags from "../../../../../SEO/meta-tags";

function JavaApp() {
  const metaPropsData = {
    title: "Java Development Services in Chennai | Cybomb Technologies",
    description:
      "Cybomb Tech offers expert Java development services, delivering secure, scalable and high-performance enterprise applications tailored to your business needs.",
    keyword:
      "java development services Chennai, enterprise applications, backend development, spring boot, java frameworks",
    url: "https://www.cybomb.com/services/java-development-service",
    image: "https://www.cybomb.com/images/logo-11.png",
  };
  return (
    <>
      <Metatags metaProps={metaPropsData} />
      <JavaPage />
    </>
  );
}

export default JavaApp;
