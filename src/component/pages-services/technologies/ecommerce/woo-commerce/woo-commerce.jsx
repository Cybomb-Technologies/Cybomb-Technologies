import WooCommerceContent from './woo-commerce-content';
import AgileProcess from '../../../../common-ui/agile-process/agile-process';
import Metatags from '../../../../../SEO/meta-tags';



function WooCommerce() {
  const metaPropsData = {
  title: "WooCommerce Development Services - Cybomb Technologies | Custom WordPress E-Commerce Solutions",
  description:
    "Cybomb Technologies offers WooCommerce development services to build secure, scalable, and conversion-focused online stores. We provide custom theme design, plugin integration, migration, and optimization for WordPress e-commerce websites.",
  keyword:
    "WooCommerce Development Services, WooCommerce Store Setup, WooCommerce Theme Customization, WooCommerce Plugin Development, WooCommerce Migration, WordPress E-Commerce Development, WooCommerce Development India",
  url: "https://www.cybomb.com/Services/woo-commerce",
  image: "https://www.cybomb.com", 
};

  return (
    <>
      <WooCommerceContent/>
      <AgileProcess/>
      <Metatags  metaProps={metaPropsData}/>
      
    </>
  );
}

export default WooCommerce;
