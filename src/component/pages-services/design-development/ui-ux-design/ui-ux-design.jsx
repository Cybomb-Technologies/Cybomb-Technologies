import UiUxDesignContent from "./ui-ux-content";
import AgileProcess from '../../../common-ui/agile-process/agile-process';
import StillNotSure from '../../../common-ui/stillnotsure/StillNotSure';
import Metatags from "../../../../SEO/meta-tags";


export default function UiUxDesign() {
  const metaPropsData = {
  title: "UI/UX Design Services - Cybomb Technologies | Engaging & User-Centric Designs",
  description:
    "Cybomb Technologies offers UI/UX Design Services to create visually appealing, intuitive, and responsive interfaces. We craft designs that enhance user experience and boost engagement across web and mobile platforms.",
  keyword:
    "UI UX Design Services, User Experience Design, User Interface Design, Web App UI Design, Mobile App UX Design, UI Prototyping, UX Research, UI UX Consulting, UI UX Services India",
  url: "https://www.cybomb.com/services/ui-ux-design",
  image: "https://www.cybomb.com",
};

  return (
    <>
      <UiUxDesignContent />
      <AgileProcess/>
      <StillNotSure/>
      <Metatags  metaProps={metaPropsData}/>
    </>
  );
}
