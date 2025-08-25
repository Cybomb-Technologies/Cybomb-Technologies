import AgileProcess from "../../../../common-ui/agile-process/agile-process";
import DrupalContent from "./drupal-content";
import Metatags from "../../../../../SEO/meta-tags";

function Drupal() {
  const metaPropsData = {
    title:
      "Drupal Development Services - Cybomb Technologies | Custom & Scalable Solutions",
    description:
      "Cybomb Technologies delivers custom Drupal development services, including theme development, module customization, and enterprise-level Drupal solutions tailored to your business needs.",
    keyword:
      "Drupal Development, Drupal CMS, Drupal Customization, Drupal Module Development, Drupal Theme Development, Enterprise Drupal Solutions, Cybomb Technologies",
    url: "https://www.cybomb.com/services/drupal-development",
    image: "https://www.cybomb.com/images/logo-11.png",
  };

  return (
    <>
      <Metatags metaProps={metaPropsData} />
      <DrupalContent />
      <AgileProcess />
    </>
  );
}

export default Drupal;
