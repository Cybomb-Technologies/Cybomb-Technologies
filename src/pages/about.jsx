import Aboutbanner from "../component/about/about-banner";
import Aboutnewsletter from "../component/about/about-news-letter";
import Aboutourcore from "../component/about/about-our-core";
import Aboutourjourne from "../component/about/about-our-journey";
import Aboutourmission from "../component/about/about-our-mission";
import Aboutourvision from "../component/about/about-our-vision";
import Aboutourteam from "../component/about/about-ourteam";
import ManagementTeam from "../component/about/ManagementTeam";
import TeamMember from "../component/about/team-member";
import Metatags from "../SEO/meta-tags";

function About() {
  const metaPropsData = {
    title: "About Us - Cybomb Technologies | Leading IT Company in Chennai",
    description:
      "Learn about Cybomb Technologies – a top IT company in India specializing in web development, mobile app development, UI/UX design, and innovative digital solutions for businesses.",
    keyword:
      "About Cybomb Technologies, IT Company India, Web App Development, UI UX Design, Software Solutions, React Developers India, Digital Services",
    url: "https://www.cybomb.com/about",
    image: "https://www.cybomb.com/images/logo-11.png", // You can replace with actual about-page banner if available
  };

  return (
    <>
      <Metatags metaProps={metaPropsData} />
      <Aboutbanner />
      <Aboutourmission />
      <Aboutourvision />
      <Aboutourjourne />
      <Aboutourcore />
      <ManagementTeam />
      {/* <TeamMember /> */}
      <Aboutourteam />
      <Aboutnewsletter />
    </>
  );
}
export default About;
