import BigCommerceContent from './big-commerce-content';
import AgileProcess from '../../../../common-ui/agile-process/agile-process';
import Metatags from '../../../../../SEO/meta-tags';



function BigCommerce() {
  const metaPropsData = {
  title: "BigCommerce Services - Cybomb Technologies | E-Commerce Development & Optimization",
  description:
    "Cybomb Technologies provides BigCommerce development services to create scalable, secure, and conversion-focused online stores. We offer custom design, integration, migration, and optimization for e-commerce success.",
  keyword:
    "BigCommerce Services, BigCommerce Development, BigCommerce Store Setup, E-Commerce Website Development, BigCommerce Integration, BigCommerce Customization, BigCommerce Development India",
  url: "https://www.cybomb.com/Services/big-commerce",
  image: "https://www.cybomb.com", 
};

  return (
    <>
      <BigCommerceContent/>
      <AgileProcess/>
      <Metatags  metaProps={metaPropsData}/>
      
    </>
  );
}

export default BigCommerce;
