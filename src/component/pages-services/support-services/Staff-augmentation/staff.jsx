import StaffServicesContent from "./staff-content";
import StillNotSure from "../../../common-ui/stillnotsure/StillNotSure";
import Metatags from "../../../../SEO/meta-tags";

function Staff() {
  const metaPropsData = {
    title: "Best Staff Augmentation Services in Chennai | Cybomb Tech",
    description:
      "As a leading staff augmentation provider in Chennai, Cybomb Technologies offers expert skilled IT professionals to scale your team efficiently and effectively.",
    keyword:
      "staff augmentation services Chennai, IT staffing Chennai, hire developers Chennai, dedicated development team, IT outsourcing Chennai",
    url: "https://www.cybomb.com/services/staff-agumentation",
    image: "https://www.cybomb.com/images/logo-11.png",
  };

  return (
    <>
      <Metatags metaProps={metaPropsData} />
      <StaffServicesContent />
      <StillNotSure />
    </>
  );
}

export default Staff;
