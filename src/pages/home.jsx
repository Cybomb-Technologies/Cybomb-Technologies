import { Helmet } from "react-helmet";
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

function Home() {
  const websiteUrl = "https://www.cybomb.com/";
  const imageUrl = "https://www.cybomb.com/images/banner-2.jpg";

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Cybomb Technologies",
    image: imageUrl,
    "@id": "",
    url: websiteUrl,
    telephone: "+91 9715092104",
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      streetAddress: "PS Industrials",
      addressLocality: "Guindy",
      postalCode: "600 032",
      addressCountry: "IN",
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "18:00",
    },
    sameAs: [
      "https://www.instagram.com/cybomb_tech/",
      "https://www.linkedin.com/company/cybomb/",
      "https://x.com/CybombTech",
    ],
  };

  return (
    <>
      <Helmet>
        <title>
          Cybomb Technologies - Web & App Development Company in India
        </title>
        <meta
          name="description"
          content="Cybomb Technologies is a top IT company offering expert web development, mobile app development, UI/UX design, and digital solutions for startups and enterprises."
        />
        <meta
          name="keywords"
          content="Cybomb Technologies, Web Development, Mobile App Development, UI UX Design, React Developer, Chennai IT Company, Software Services India"
        />
        <meta name="author" content="Cybomb Technologies" />
        <meta name="robots" content="index, follow" />

        {/* Open Graph Meta Tags (Facebook, LinkedIn etc.) */}
        <meta property="og:title" content="Cybomb Technologies" />
        <meta
          property="og:description"
          content="Professional digital services including web and app development from Cybomb Technologies."
        />
        <meta property="og:image" content={imageUrl} />
        <meta property="og:url" content={websiteUrl} />
        <meta property="og:type" content="website" />

        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Cybomb Technologies" />
        <meta
          name="twitter:description"
          content="Reliable web and mobile development services from Cybomb Technologies."
        />
        <meta name="twitter:image" content={imageUrl} />

        {/* Structured Data */}
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      </Helmet>

  
      <HomeBanner />
      <HomeService />
      <HomeKeydiffer />
      <HomeUIUX />
      <Homewhychoose />
      <Hometestimonial />
      <Homeourexpertise />
      <Homeform />
      <Homenewsletter />
      <Homecontact />
    </>
  );
}

export default Home;
