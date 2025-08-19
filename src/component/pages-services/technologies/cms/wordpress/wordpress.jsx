import AgileProcess from "../../../../common-ui/agile-process/agile-process";
import WordPressContent from "./wordpress-content";
import Metatags from "../../../../../SEO/meta-tags";

function WordPress() {
  const metaPropsData = {
    title:
      "WordPress Development Services - Cybomb Technologies | Custom & Scalable Solutions",
    description:
      "Cybomb Technologies provides expert WordPress development services including custom themes, plugins, WooCommerce solutions, and performance optimization for scalable websites.",
    keyword:
      "WordPress Development, Custom WordPress Themes, WordPress Plugins, WooCommerce Development, WordPress Optimization, CMS Solutions, Cybomb Technologies",
    url: "https://www.cybomb.com/services/wordpress-development",
    image: "https://www.cybomb.com/images/logo-11.png", // Replace with actual banner if available
  };

  return (
    <>
      <Metatags metaProps={metaPropsData} />
      <WordPressContent />
      <AgileProcess />
    </>
  );
}

export default WordPress;
