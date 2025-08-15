import BespokeDevContent from './bespoke-dev-content';
import AgileProcess from '../../../common-ui/agile-process/agile-process';
import StillNotSure from '../../../common-ui/stillnotsure/StillNotSure';
import Metatags from '../../../../SEO/meta-tags';



export default function BespokeDev() {
  const metaPropsData = {
  title: "Bespoke Development Services - Cybomb Technologies | Custom Software Solutions",
  description:
    "Cybomb Technologies provides Bespoke Development Services tailored to your business needs. We design and develop custom web, mobile, and enterprise applications that deliver scalability, performance, and competitive advantage.",
  keyword:
    "Bespoke Development Services, Custom Software Development, Tailored Web Applications, Bespoke Mobile App Development, Enterprise Software Solutions, Custom Application Design, Bespoke Software India",
  url: "https://www.cybomb.com/services/bespoke-development",
  image: "https://www.cybomb.com", 
};

  return (
    <>
      
      <BespokeDevContent />
      <AgileProcess/>
      <StillNotSure/>
      <Metatags  metaProps={metaPropsData}/>
    </>
  );
}
