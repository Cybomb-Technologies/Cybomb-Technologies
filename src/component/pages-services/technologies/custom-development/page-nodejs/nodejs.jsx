import StillNotSure from "../../../../common-ui/stillnotsure/StillNotSure";
import NodeJSPage from "./nodejs-content";
import Metatags from "../../../../../SEO/meta-tags";

function NodeJSApp() {
  const metaPropsData = {
    title: "Node.js Development Services - Cybomb Technologies | Scalable Backend Solutions",
    description:
      "Cybomb Technologies provides professional Node.js development services, building fast, scalable, and high-performance backend applications tailored to your business needs.",
    keyword:
      "Node.js Development, Backend Development, JavaScript Runtime, API Development, Web Applications, Cybomb Technologies",
    url: "https://www.cybomb.com/services/nodejs-development-service",
    image: "https://www.cybomb.com/images/banner-2.jpg", // Same as provided
  };

  return (
    <>
      <Metatags metaProps={metaPropsData} />
      <NodeJSPage />
      <StillNotSure />
    </>
  );
}

export default NodeJSApp;
