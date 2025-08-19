import AgileProcess from "../../../../common-ui/agile-process/agile-process";
import JoomlaContent from "./joomla-content";
import Metatags from "../../../../../SEO/meta-tags";

function Joomla() {
  const metaPropsData = {
    title:
      "Joomla Development Services - Cybomb Technologies | Secure & Scalable Solutions",
    description:
      "Cybomb Technologies provides expert Joomla development services, including custom templates, extensions, integrations, and maintenance. Build scalable, secure, and high-performing Joomla websites with our experienced team.",
    keyword:
      "Joomla Development, Joomla CMS, Joomla Customization, Joomla Templates, Joomla Extensions, Joomla Integration, Joomla Maintenance, Cybomb Technologies",
    url: "https://www.cybomb.com/services/joomla-development",
    image: "https://www.cybomb.com/images/logo-11.png", // Replace with actual Joomla banner if available
  };

  return (
    <>
      <Metatags metaProps={metaPropsData} />
      <JoomlaContent />
      <AgileProcess />
    </>
  );
}

export default Joomla;
