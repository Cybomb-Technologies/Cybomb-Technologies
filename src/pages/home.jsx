import react from "react";
import HomeBanner from "../component/home/banner";
import HomeService from "../component/home/home-service";
import HomeKeydiffer from "../component/home/home-keydiffer";
import Homewhychoose from "../component/home/home-whychoose";
import Hometestimonial from "../component/home/home-testimonial";
import Homeourexpertise from "../component/home/home-our-expertise";
import Homeform from "../component/home/home-form";
import Homenewsletter from "../component/home/home-newsletter";
import Homecontact from "../component/home/home-contact";

function Home() {
  return (
    <>
      <HomeBanner />
      <HomeService />
      <HomeKeydiffer />
      <Homewhychoose />
      <Hometestimonial />
      <Homeourexpertise />
      <Homeform />
      <Homenewsletter/>
      <Homecontact/>
    </>
  );
}

export default Home;
