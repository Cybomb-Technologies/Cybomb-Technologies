import DatabaseContent from "./database-content";
import Metatags from "../../../../../SEO/meta-tags";

function DatabaseApp() {
  const metaPropsData = {
    title: "Database Development Services in chennai | Cybomb Tech",
    description:
      "Cybomb Tech offers expert database services across MongoDB, Django ORM, Firebase, MySQL, SQL Server, and PostgreSQL. We design secure, scalable, and high-performance database solutions tailored to your business needs.",
    keyword:
      "Database Development service in chennai, MongoDB, Firebase, SQL Server, PostgreSQL, MySQL, Django ORM, Cybomb Technologies",
    url: "https://www.cybomb.com/services/database-development-service",
    image: "https://www.cybomb.com/images/database-banner.jpg", // replace with actual DB banner
  };

  return (
    <>
      <Metatags metaProps={metaPropsData} />
      <DatabaseContent />
      
    </>
  );
}

export default DatabaseApp;
