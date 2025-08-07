
import Portfoliocontent from "../component/portfolio/portfolio-content";
import Metatags from "../SEO/meta-tags";

function Prortfolio() {
  const metaPropsData = {
  title: "Portfolio - Cybomb Technologies | Our Work & Client Success Stories",
  description:
    "Explore the portfolio of Cybomb Technologies showcasing successful web and mobile app development projects, UI/UX designs, and digital solutions delivered to clients across various industries.",
  keyword:
    "Cybomb Portfolio, Project Showcase, Web Development Work, App Development Portfolio, UI UX Projects, Client Success Stories, Software Solutions India",
  url: "https://www.cybomb.com/portfolio",
  image: "https://www.cybomb.com/images/portfolio-banner.jpg", // Replace with actual portfolio banner if available
};

  return (
    <>
    <Metatags  metaProps={metaPropsData}/>
      
      <Portfoliocontent />
    </>
  );
}

export default Prortfolio;
