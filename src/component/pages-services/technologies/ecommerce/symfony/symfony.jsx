import SymfonyContent from './symfony-content';
import AgileProcess from '../../../../common-ui/agile-process/agile-process';
import Metatags from '../../../../../SEO/meta-tags';


function Symfony() {
  const metaPropsData = {
  title: "Symfony Development Services - Cybomb Technologies | Custom Web Application Solutions",
  description:
    "Cybomb Technologies provides Symfony development services to build secure, scalable, and high-performance web applications. We offer custom module development, API integration, and ongoing maintenance for Symfony-based solutions.",
  keyword:
    "Symfony Development Services, Symfony Web Development, Symfony Application Development, Symfony API Integration, Symfony Module Development, Symfony Maintenance, Symfony Development India",
  url: "https://www.cybomb.com/Services/symfony",
  image: "https://www.cybomb.com",
};

  return (
    <>
      <SymfonyContent/>
      <AgileProcess/>
      <Metatags  metaProps={metaPropsData}/>
      
    </>
  );
}

export default Symfony;
