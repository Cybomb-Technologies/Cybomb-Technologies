import Aboutbanner from "../component/about/about-banner";
import Aboutnewsletter from "../component/about/about-news-letter";
import Aboutourcore from "../component/about/about-our-core";
import Aboutourjourney from "../component/about/about-our-journey";
import MissionVision from "../component/about/MissionVision";
import LeadershipTeam from "../component/about/LeadershipTeam";
// import Aboutourmission from "../component/about/about-our-mission";
// import Aboutourvision from "../component/about/about-our-vision";
import Aboutourteam from "../component/about/about-ourteam";
// import ManagementTeam from "../component/about/ManagementTeam";
//import TeamMember from "../component/about/team-member";
import Metatags from "../SEO/meta-tags";

function About() {
  const metaPropsData = {
    title: "About Us - Leading IT Company in Chennai | Cybomb Technologies",
    description:
      "Learn about Cybomb Technologies – a leading top IT company in India specializing in web development, mobile apps, UI/UX design and innovative digital solutions.",
    keyword:
      "IT company chennai, web development company chennai, mobile app development chennai, ui ux design services india, react developers in chennai",
    url: "https://www.cybomb.com/about-us",
    image: "https://www.cybomb.com/images/logo-11.png",
  };

  return (
    <>
      <Metatags metaProps={metaPropsData} />
      <Aboutbanner />

      {/* <Aboutourmission /> */}
      {/* <Aboutourvision /> */}
      <Aboutourjourney />
      <MissionVision />
      <Aboutourcore />
      <LeadershipTeam />
      {/* <ManagementTeam /> */}
      {/* <TeamMember /> */}
      <Aboutourteam />
      <Aboutnewsletter />
    </>
  );
}
export default About;
