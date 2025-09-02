import PHPAppContent from "./php-content";
import Metatags from "../../../../../SEO/meta-tags";

function PHPApp() {
  const metaPropsData = {
    title: "PHP Development Services - Cybomb Technologies | Custom Web Solutions",
    description:
      "Cybomb Technologies offers professional PHP development services, delivering secure, scalable, and high-performance web applications tailored to your business needs.",
    keyword:
      "PHP Development, Web Application Development, Custom PHP Solutions, Backend Development, PHP Web Apps, Cybomb Technologies",
    url: "https://www.cybomb.com/services/php-development-service",
    image: "https://www.cybomb.com/images/banner-2.jpg", // Same as provided
  };

  return (
    <>
      <Metatags metaProps={metaPropsData} />
      <PHPAppContent />
    </>
  );
}

export default PHPApp;
