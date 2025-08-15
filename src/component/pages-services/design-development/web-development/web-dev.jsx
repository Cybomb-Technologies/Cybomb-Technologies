import WebDevContent from "./web-dev-content";
import AgileProcess from '../../../common-ui/agile-process/agile-process';
import StillNotSure from '../../../common-ui/stillnotsure/StillNotSure';
import Metatags from "../../../../SEO/meta-tags";



export default function WebDev() {
  const metaPropsData = {
  title: "Website Development Services - Cybomb Technologies | Custom & Responsive Web Solutions",
  description:
    "Cybomb Technologies offers Website Development Services to build fast, secure, and fully responsive websites. We deliver custom designs, seamless functionality, and optimized performance for businesses of all sizes.",
  keyword:
    "Website Development Services, Custom Website Design, Responsive Web Development, Web Application Development, Business Website Development, Ecommerce Website Development, Website Development India",
  url: "https://www.cybomb.com/services/web-development",
  image: "https://www.cybomb.com", 
};

  return (
    <>
      <WebDevContent />
      <AgileProcess/>
      <StillNotSure/>
      <Metatags  metaProps={metaPropsData}/>
    </>
  );
}
