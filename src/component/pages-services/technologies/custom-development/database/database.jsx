import DatabaseContent from "./database-content";
import Metatags from "../../../../../SEO/meta-tags";

function DatabaseApp() {
  const metaPropsData = {
    title: "Database Development Services in Chennai | Cybomb Technologies",
    description:
      "Cybomb Tech provides expert database services with MongoDB, Firebase, SQL Server & PostgreSQL for secure, scalable, high-performance data solutions in Chennai.",
    keyword:
      "database development chennai, mongodb services, firebase database, sql server development, postgresql development",
    url: "https://www.cybomb.com/services/database-development-service",
    image: "https://www.cybomb.com/images/logo-11.png",
  };

  return (
    <>
      <Metatags metaProps={metaPropsData} />
      <DatabaseContent />
    </>
  );
}

export default DatabaseApp;
