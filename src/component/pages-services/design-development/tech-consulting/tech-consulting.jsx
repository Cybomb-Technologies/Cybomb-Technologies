import TechConsultingContent from "./tech-consulting-content";
import AgileProcess from '../../../common-ui/agile-process/agile-process';
import StillNotSure from '../../../common-ui/stillnotsure/StillNotSure';
import Metatags from "../../../../SEO/meta-tags";


export default function TechConsulting() {
  const metaPropsData = {
  title: "Tech Consulting Services - Cybomb Technologies | Strategic IT & Technology Advisory",
  description:
    "Cybomb Technologies provides Tech Consulting Services to help businesses make informed technology decisions. We offer strategic IT planning, system audits, cloud adoption guidance, and digital transformation consulting.",
  keyword:
    "Tech Consulting Services, IT Consulting, Technology Advisory, Digital Transformation Consulting, Cloud Adoption Strategy, IT System Audit, Enterprise Technology Solutions, IT Consulting India",
  url: "https://www.cybomb.com/services/tech-consulting",
  image: "https://www.cybomb.com", 
};

  return (
    <>
      <TechConsultingContent />
      <AgileProcess/>
      <StillNotSure/>
      <Metatags  metaProps={metaPropsData}/>
    </>
  );
}
