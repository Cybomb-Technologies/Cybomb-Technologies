import HomeBanner from "../component/usa-home/usa-banner";
import HomeService from "../component/usa-home/usa-home-service";
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

// import HomePricing from "../component/home/home-pricing";

function Home() {
  const metaPropsData = {
    title: "Mobile App and Web Development in Chennai | Cybomb Technologies",
    description:
      "Cybomb Technologies is a top IT company offering expert web development, mobile app development, UI/UX design, and digital solutions for startups and enterprises.",
    keyword:
      "Cybomb Technologies, Web Development, Mobile App Development, UI UX Design, React Developer, Chennai IT Company, Software Services India",
    url: "https://www.cybomb.com/",
    image: "https://www.cybomb.com/images/logo-11.png",
  };

  return (
    <>
      <Metatags metaProps={metaPropsData} />

      <HomeBanner />
      <HomeService />
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
      <Homecontact />
      <HomePressrelease />
    </>
  );
}

export default Home;
