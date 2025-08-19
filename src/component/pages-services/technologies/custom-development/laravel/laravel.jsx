import LaravelAppContent from "./laravel-content";
import StillNotSure from "../../../../common-ui/stillnotsure/StillNotSure";
import Metatags from "../../../../../SEO/meta-tags";

function LaravelApp() {
  const metaPropsData = {
    title: "Laravel Development Services - Cybomb Technologies | Scalable PHP Solutions",
    description:
      "Cybomb Technologies offers expert Laravel development services, creating scalable, secure, and high-performance PHP web applications tailored to your business requirements.",
    keyword:
      "Laravel Development, PHP Framework, Web Application Development, Laravel Web Apps, Custom Laravel Solutions, Cybomb Technologies",
    url: "https://www.cybomb.com/services/laravel%20development-service",
    image: "https://www.cybomb.com/images/banner-2.jpg", // Same as provided
  };

  return (
    <>
      <Metatags metaProps={metaPropsData} />
      <LaravelAppContent />
      <StillNotSure />
    </>
  );
}

export default LaravelApp;
