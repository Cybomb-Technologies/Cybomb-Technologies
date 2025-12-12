import ServicesBanner from './services-banner';
import DesignDevelopmentServices from './design-development-services';
import EnterpriseServices from './enterprise-services';
import SupportServices from './support-services';
import Metatags from "../../SEO/meta-tags";

function Services(){
const metaPropsData = {
  title: "Cybomb - IT services, Tech Support, & Digital Solutions",
  description:
    "Explore Cybomb Tech comprehensive range of services, including cloud solutions, software development, e-commerce, AI integration, security, and consulting. We deliver innovative technology solutions tailored to your business needs.",
  keyword:
    "IT Services in chennai, Cloud Solutions, Software Development, E-Commerce Development, AI Integration, Cybersecurity Services, Technology Consulting, Managed IT Services, Digital Solutions India",
  url: "https://www.cybomb.com/Services",
  image: "https://www.cybomb.com",
};

  return (
    <>
    <ServicesBanner/>
    <DesignDevelopmentServices/>
    <EnterpriseServices/>
    <SupportServices/>
    <Metatags  metaProps={metaPropsData}/>
    </>
  );
}

export default Services;