import AdobeCommerceContent from './adobe-commerce-content';
import AgileProcess from '../../../../common-ui/agile-process/agile-process';
import Metatags from '../../../../../SEO/meta-tags';


function AdobeCommerce() {
  const metaPropsData = {
  title: "Adobe Commerce Services - Cybomb Technologies | Magento Development & E-Commerce Solutions",
  description:
    "Cybomb Technologies offers Adobe Commerce (Magento) development services, delivering secure, scalable, and high-performance e-commerce solutions. From custom store design to integration and optimization, we help businesses succeed online.",
  keyword:
    "Adobe Commerce Services, Magento Development, Adobe Commerce Store Setup, Magento E-Commerce Solutions, Adobe Commerce Integration, Magento Customization, Adobe Commerce Development India",
  url: "https://www.cybomb.com/Services/adobe-commerce",
  image: "https://www.cybomb.com", 
};

  return (
    <>
      <AdobeCommerceContent/>
      <AgileProcess/>
      <Metatags  metaProps={metaPropsData}/>
      
    </>
  );
}

export default AdobeCommerce;
