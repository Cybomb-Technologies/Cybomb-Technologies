import RORAppContent from "./ror-content";
import StillNotSure from "../../../../common-ui/stillnotsure/StillNotSure";
import Metatags from "../../../../../SEO/meta-tags";

function RORApp() {
  const metaPropsData = {
    title: "Ruby on Rails Development Services - Cybomb Technologies | Robust Web Applications",
    description:
      "Cybomb Technologies provides professional Ruby on Rails development services, delivering secure, scalable, and high-performance web applications tailored to your business needs.",
    keyword:
      "Ruby on Rails Development, RoR Development, Web Application Development, Backend Development, Ruby on Rails Web Apps, Cybomb Technologies",
    url: "https://www.cybomb.com/services/ror-development-service",
    image: "https://www.cybomb.com/images/banner-2.jpg", // Same as provided
  };

  return (
    <>
      <Metatags metaProps={metaPropsData} />
      <RORAppContent />
      <StillNotSure />
    </>
  );
}

export default RORApp;
