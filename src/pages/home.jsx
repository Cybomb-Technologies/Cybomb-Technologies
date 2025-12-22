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
    title: "Best Mobile App & Web Development in Chennai | Cybomb Technologies",
    description:
      "Cybomb Technologies provides custom mobile app development, responsive web development & solutions, UI/UX design & software services for wide range of businesses.",
    keyword:
      "web development, mobile app development, ui ux design, chennai it company, software services india",
    url: "https://www.cybomb.com/",
    image: "https://www.cybomb.com/images/logo-11.png",
  };

  return (
    <>
      <Metatags metaProps={metaPropsData} />

      <HomeBanner />
      <HomeService />
      <HomeKeydiffer />
      <HomeUIUX />
      <Homewhychoose />
      <Hometestimonial />
      <Homeourexpertise />
      {/* <HomePricing/> */}
      <Homeform />

      <HomePartners />
      <Homecontact />
      <Homenewsletter />

      <HomePressrelease />

      <HomePlaystore />
    </>
  );
}

export default Home;
