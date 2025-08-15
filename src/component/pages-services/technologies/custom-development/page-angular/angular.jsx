import StillNotSure from "../../../../common-ui/stillnotsure/StillNotSure";
import AngularPage from "./angular-content";
import Metatags from "../../../../../SEO/meta-tags";

function AngularApp() {
  const metaPropsData = {
    title: "Angular Development Services - Cybomb Technologies | Dynamic Web Applications",
    description:
      "Cybomb Technologies offers expert Angular development services, creating dynamic, responsive, and high-performance web applications tailored to your business needs.",
    keyword:
      "Angular Development, Web Application Development, Single Page Applications, SPA, Frontend Development, Cybomb Technologies",
    url: "https://www.cybomb.com/services/angular-development-service",
    image: "https://www.cybomb.com/images/banner-2.jpg", // Same as provided
  };

  return (
    <>
      <Metatags metaProps={metaPropsData} />
      <AngularPage />
      <StillNotSure />
    </>
  );
}

export default AngularApp;
