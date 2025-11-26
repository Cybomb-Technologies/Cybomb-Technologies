import CareerContent from "../component/career/career-content";
import Metatags from "../SEO/meta-tags";

export default function Career() {
    const metaPropsData = {
  title: "Career & Job opportunity in chennai | Join Cybomb Tech",
  description:
    "Explore exciting career opportunities at Cybomb Tech MNC. We’re hiring passionate developers, designers, and digital experts to innovate and grow with us.",
  keyword:
    "Cybomb Careers , IT Jobs India, Web Developer Jobs, UI UX Careers, Software Jobs Chennai, Join Cybomb Technologies, Tech Hiring India, React Developer Openings",
  url: "https://www.cybomb.com/career",
  image: "https://www.cybomb.com/images/career-banner.jpg", // Use an actual banner image from your Careers page if available
};
  return (
    <>
    <Metatags  metaProps={metaPropsData}/>
      <CareerContent />
    </>
  );
}
