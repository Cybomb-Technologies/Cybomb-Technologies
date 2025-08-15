import SoftwareDevelopmentContent from "./software-dev-content";
import AgileProcess from '../../../common-ui/agile-process/agile-process';
import StillNotSure from '../../../common-ui/stillnotsure/StillNotSure';
import Metatags from "../../../../SEO/meta-tags";


export default function SoftwareDev() {
  const metaPropsData = {
  title: "Software Development Services - Cybomb Technologies | Custom Web & Mobile Solutions",
  description:
    "Cybomb Technologies offers comprehensive Software Development Services, delivering high-quality web, mobile, and enterprise applications tailored to your business needs with scalability, performance, and security in mind.",
  keyword:
    "Software Development Services, Custom Software Solutions, Web Application Development, Mobile App Development, Enterprise Software Development, Software Consulting, Software Development India",
  url: "https://www.cybomb.com/services/software-development",
  image: "https://www.cybomb.com", 
};

  return (
    <>
      <SoftwareDevelopmentContent />
      <AgileProcess/>
      <StillNotSure/>
      <Metatags  metaProps={metaPropsData}/>
    </>
  );
}
