import CareerContent from "../component/career/career-content";
import Metatags from "../SEO/meta-tags";

export default function Career() {
  const metaPropsData = {
    title: "Career & Job opportunity in chennai | Join Cybomb Technologies",
    description:
      "Explore exciting career opportunities at Cybomb Tech. We're hiring passionate talented developers, designers, and digital experts to innovate and grow with us.",
    keyword:
      "cybomb careers, it jobs india, web developer jobs, ui ux careers, software jobs chennai, join cybomb technologies",
    url: "https://www.cybomb.com/career",
    image: "https://www.cybomb.com/images/logo-11.png",
  };
  return (
    <>
      <Metatags metaProps={metaPropsData} />
      <CareerContent />
    </>
  );
}
