import ShopifyContent from './shopify-content';
import AgileProcess from '../../../../common-ui/agile-process/agile-process';
import Metatags from '../../../../../SEO/meta-tags';


function Shopify() {
  const metaPropsData = {
  title: "Shopify Development Services - Cybomb Technologies | Custom E-Commerce Store Solutions",
  description:
    "Cybomb Technologies offers Shopify development services to create stunning, secure, and high-converting online stores. We provide custom theme design, app integration, migration, and optimization for e-commerce success.",
  keyword:
    "Shopify Development Services, Shopify Store Setup, Shopify Theme Customization, Shopify App Integration, Shopify E-Commerce Development, Shopify Migration, Shopify Development India",
  url: "https://www.cybomb.com/Services/shopify",
  image: "https://www.cybomb.com", 
};

  return (
    <>
      <ShopifyContent/>
      <AgileProcess/>
      <Metatags  metaProps={metaPropsData}/>
      
    </>
  );
}

export default Shopify;
