import AgileProcess from "../../../../common-ui/agile-process/agile-process";
import AcquiaContent from "./acquia-content";
import Metatags from "../../../../../SEO/meta-tags";

function Acquia() {
  const metaPropsData = {
    title:
      "Acquia Development Services - Cybomb Technologies | Drupal & Cloud Solutions",
    description:
      "Cybomb Technologies provides expert Acquia development services including Drupal cloud hosting, site factory, personalization, and enterprise-level digital experience solutions.",
    keyword:
      "Acquia Development, Drupal Cloud, Acquia Site Factory, Acquia Personalization, Acquia Lift, Drupal Hosting, Digital Experience Platform, Cybomb Technologies",
    url: "https://www.cybomb.com/services/acquia",
    image: "https://www.cybomb.com/images/logo-11.png",
  };

  return (
    <>
      <Metatags metaProps={metaPropsData} />
      <AcquiaContent />
      <AgileProcess />
    </>
  );
}

export default Acquia;
