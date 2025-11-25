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
import HomePartners from "../component/home/home-partners";
import Metatags from "../SEO/meta-tags";
import HomePressrelease from "../component/home/home-press-release";
import HomePlaystore from "../component/home/home-playstore";
// import HomePricing from "../component/home/home-pricing";

function Home() {

  const metaPropsData = {
    title: "Mobile App and Web Development in Chennai | Cybomb MNC",
    description:"Cybomb Technologies(MNC) is a top IT company offering expert web development, mobile app development, UI/UX design, and digital solutions for startups and enterprises.",
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
      {/* <HomePricing/> */}
      <Homeform />
      
      <HomePartners/>
      <Homecontact />
      <Homenewsletter />
     
      <HomePressrelease/>
     
        <HomePlaystore/>
    </>
  );
}

export default Home;
