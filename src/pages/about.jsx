import Aboutbanner from "../component/about/about-banner";
import Aboutnewsletter from "../component/about/about-news-letter";
import Aboutourcore from "../component/about/about-our-core";
import Aboutourjourne from "../component/about/about-our-journey";
import Aboutourmission from "../component/about/about-our-mission";
import Aboutourvision from "../component/about/about-our-vision";
import Aboutourteam from "../component/about/about-ourteam";

function About() {
  return (
    <>
      <Aboutbanner />
      <Aboutourmission />
      <Aboutourvision />
      <Aboutourjourne />
      <Aboutourcore />
      <Aboutourteam />
      <Aboutnewsletter />
    </>
  );
}
export default About;
