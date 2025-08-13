import Stratergycontent from "./stratergy-content";
import StillNotSure from "../../../common-ui/stillnotsure/StillNotSure";
import AgileProcess from "../../../common-ui/agile-process/agile-process";
import Metatags from "../../../../SEO/meta-tags";

function StratergyServices() {
  const metaPropsData = {
    title: "Strategy Services - Cybomb Technologies | Business & IT Strategy Solutions",
    description:
      "Cybomb Technologies provides expert strategy services, aligning business objectives with innovative technology solutions for sustainable growth and success.",
    keyword:
      "Business Strategy, IT Strategy, Digital Transformation, Strategic Planning, Technology Roadmap, Cybomb Technologies",
    url: "https://www.cybomb.com/services/stratergy-consulting",
    image: "https://www.cybomb.com/images/banner-2.jpg", // Replace with actual banner if available
  };

  return (
    <>
      <Metatags metaProps={metaPropsData} />
      <Stratergycontent />
      <AgileProcess />
      <StillNotSure />
    </>
  );
}

export default StratergyServices;
