import StillNotSure from "../../../../common-ui/stillnotsure/StillNotSure";
import DatabaseContent from "./database-content";
import Metatags from "../../../../../SEO/meta-tags";

function DatabaseApp() {
  const metaPropsData = {
    title: "Database Development Services - Cybomb Technologies | MongoDB, SQL, Firebase, PostgreSQL",
    description:
      "Cybomb Technologies offers expert database services across MongoDB, Django ORM, Firebase, MySQL, SQL Server, and PostgreSQL. We design secure, scalable, and high-performance database solutions tailored to your business needs.",
    keyword:
      "Database Development, MongoDB, Firebase, SQL Server, PostgreSQL, MySQL, Django ORM, Cybomb Technologies",
    url: "https://www.cybomb.com/services/database-development-service",
    image: "https://www.cybomb.com/images/database-banner.jpg", // replace with actual DB banner
  };

  return (
    <>
      <Metatags metaProps={metaPropsData} />
      <DatabaseContent />
      <StillNotSure />
    </>
  );
}

export default DatabaseApp;
