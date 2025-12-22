import HomeBanner from "../component/usa-home/usa-banner";
import USAHomeService from "../component/usa-home/usa-home-service";
import HomeKeydiffer from "../component/usa-home/usa-home-keydiffer";
import Homewhychoose from "../component/usa-home/usa-home-whychoose";
import Hometestimonial from "../component/usa-home/usa-home-testimonial";
import Homeourexpertise from "../component/usa-home/usa-home-our-expertise";
import Homeform from "../component/usa-home/usa-home-form";
// import Homenewsletter from "../component/home/home-newsletter";
import Homecontact from "../component/usa-home/usa-home-contact";
import HomeUIUX from "../component/usa-home/usa-home-ui-ux";
import HomePartners from "../component/usa-home/usa-home-partners";
import Metatags from "../SEO/meta-tags";
import HomePressrelease from "../component/usa-home/usa-home-press-release";
import HomeProcess from "../component/usa-home/usa-home-process";
import HomeIndustries from "../component/usa-home/usa-home-industries";

// import HomePricing from "../component/home/home-pricing";

function Home() {
  const metaPropsData = {
    title: "Best Web & Mobile App Development in USA | Cybomb Technologies",
    description:
      "Cybomb Technologies Inc. delivers expert web & mobile app development, UI/UX design, and tailored digital solutions for startups and enterprises globally.",
    keyword:
      "cybomb technologies inc, web development, mobile app development, ui ux design, react developer, chennai it company, software services india",
    url: "https://www.cybomb.com/USA",
    image: "https://www.cybomb.com/images/logo-11.png",
  };

  return (
    <>
      <Metatags metaProps={metaPropsData} />

      <HomeBanner />
      <USAHomeService />
      <Homecontact />
      <HomeIndustries />
      <HomeProcess />
      <HomeKeydiffer />
      <HomeUIUX />
      <Homewhychoose />
      <Hometestimonial />
      <Homeourexpertise />
      {/* <HomePricing/> */}
      <Homeform />
      {/* <Homenewsletter /> */}
      <HomePartners />
      <HomePressrelease />
    </>
  );
}

export default Home;
