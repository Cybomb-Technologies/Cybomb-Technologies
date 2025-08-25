import CSSPage from "./css-content";
import StillNotSure from "../../../../common-ui/stillnotsure/StillNotSure";
import Metatags from "../../../../../SEO/meta-tags";

function CSSApp() {
  const metaPropsData = {
    title:
      "CSS Development Services - Cybomb Technologies | Modern Styling Solutions",
    description:
      "Cybomb Technologies offers expert CSS development services, delivering responsive, visually appealing, and optimized websites for a seamless user experience.",
    keyword:
      "CSS Development, Web Styling, Responsive Web Design, Frontend UI, Website Layouts, Cybomb Technologies",
    url: "https://www.cybomb.com/services/css-development-service",
    image: "https://www.cybomb.com/images/banner-2.jpg", // Same as provided
  };

  return (
    <>
      <Metatags metaProps={metaPropsData} />
      <CSSPage />
      <StillNotSure />
    </>
  );
}

export default CSSApp;
