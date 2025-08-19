import AgileProcess from "../../../../common-ui/agile-process/agile-process";
import PantheonContent from "./pantheon-content";
import Metatags from "../../../../../SEO/meta-tags";

function Pantheon() {
  const metaPropsData = {
    title: "Pantheon Development & Support Services - Cybomb Technologies",
    description:
      "Cybomb Technologies provides expert Pantheon development, migration, and support services. We specialize in building scalable, secure, and high-performing websites powered by Pantheon’s cloud platform.",
    keyword:
      "Pantheon Development, Pantheon Migration, Pantheon Hosting, Drupal Pantheon, WordPress Pantheon, Cloud Website Hosting, Cybomb Technologies, Pantheon Support Services",
    url: "https://www.cybomb.com/services/pantheon-development",
    image: "https://www.cybomb.com/images/logo-11.png", // Replace with actual banner if available
  };

  return (
    <>
      <Metatags metaProps={metaPropsData} />
      <PantheonContent />
      <AgileProcess />
    </>
  );
}

export default Pantheon;
