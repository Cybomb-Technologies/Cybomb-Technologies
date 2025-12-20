import Portfoliocontent from "../component/portfolio/portfolio-content";
import Metatags from "../SEO/meta-tags";

function Prortfolio() {
  const metaPropsData = {
    title:
      "Portfolio -  Our Work & Client Success Stories | Cybomb Technologies",
    description:
      "Cybomb Technologies portfolio showcases successful web and mobile app development projects. View our client success stories and innovative digital solutions.",
    keyword:
      "portfolio, project showcase, web development work, app development portfolio, ui ux projects",
    url: "https://www.cybomb.com/portfolio",
    image: "https://www.cybomb.com/images/logo-11.png",
  };

  return (
    <>
      <Metatags metaProps={metaPropsData} />

      <Portfoliocontent />
    </>
  );
}

export default Prortfolio;
