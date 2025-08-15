
import Metatags from '../../../../../SEO/meta-tags';
import AgileProcess from '../../../../common-ui/agile-process/agile-process';
import MagentoContent from './magento-content';


function Magento() {
  const metaPropsData = {
  title: "Magento Development Services - Cybomb Technologies | Custom E-Commerce Solutions",
  description:
    "Cybomb Technologies delivers Magento development services to build secure, scalable, and high-performance e-commerce stores. From custom design to integration and optimization, we help brands thrive online.",
  keyword:
    "Magento Development Services, Magento Store Development, Magento E-Commerce Solutions, Magento Customization, Magento Integration, Magento Website Design, Magento Development India",
  url: "https://www.cybomb.com/Services/magento",
  image: "https://www.cybomb.com", 
};

  return (
    <>
      <MagentoContent/>
      <AgileProcess/>
      <Metatags  metaProps={metaPropsData}/>
      
      
    </>
  );
}

export default Magento;
