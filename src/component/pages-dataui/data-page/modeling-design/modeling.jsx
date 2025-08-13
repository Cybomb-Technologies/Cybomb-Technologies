import ModelingDesignContent from "./modeling-content";
import StillNotSure from "../../../common-ui/stillnotsure/StillNotSure";
import AgileProcess from "../../../common-ui/agile-process/agile-process";
import Metatags from "../../../../SEO/meta-tags";

function ModelingServices() {
  const metaPropsData = {
    title: "3D Modeling & Design Services - Cybomb Technologies | Creative & Precise Designs",
    description:
      "Cybomb Technologies offers professional 3D modeling and design services, delivering accurate, detailed, and visually stunning models for various industries.",
    keyword:
      "3D Modeling, Product Design, CAD Modeling, Architectural Models, Industrial Design, Cybomb Technologies",
    url: "https://www.cybomb.com/services/modeling-design",
    image: "https://www.cybomb.com/images/banner-2.jpg", // Replace with actual banner if available
  };

  return (
    <>
      <Metatags metaProps={metaPropsData} />
      <ModelingDesignContent />
      <AgileProcess />
      <StillNotSure />
    </>
  );
}

export default ModelingServices;
