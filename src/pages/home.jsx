import HomeBanner from "../component/home/banner";
import HomeService from "../component/home/home-service";
import HomeKeydiffer from "../component/home/home-keydiffer";
import Homewhychoose from "../component/home/home-whychoose";
import Hometestimonial from "../component/home/home-testimonial";
import Homeourexpertise from "../component/home/home-our-expertise";
import Homeform from "../component/home/home-form";
import Homenewsletter from "../component/home/home-newsletter";
import Homecontact from "../component/home/home-contact";
import HomeUIUX from "../component/home/home-ui-ux";
import Partners from "../component/home/partners";
import Metatags from "../SEO/meta-tags";

function Home() {

  const metaPropsData = {
    title: "Cybomb Technologies | Mobile App and Web Delopment in Chennai",
    description:"Cybomb Technologies is a top IT company offering expert web development, mobile app development, UI/UX design, and digital solutions for startups and enterprises.",
    keyword:"Cybomb Technologies, Web Development, Mobile App Development, UI UX Design, React Developer, Chennai IT Company, Software Services India",
    url: "https://www.cybomb.com/",
    image: "https://www.cybomb.com/images/logo-11.png",
  };

  return (
    <>
      <Metatags  metaProps={metaPropsData}/>
      
      <HomeBanner />
      <HomeService />
      <HomeKeydiffer />
      <HomeUIUX />
      <Homewhychoose />
      <Hometestimonial />
      <Homeourexpertise />
      <Homeform />
      <Homenewsletter />
      <Partners/>
      <Homecontact />
    </>
  );
}

export default Home;
