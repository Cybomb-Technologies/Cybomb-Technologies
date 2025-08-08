
import Contactcontent from "../component/contact/contact-content";
import Metatags from "../SEO/meta-tags";

function Contact() {
  const metaPropsData = {
  title: "Contact Us - Cybomb Technologies | Let's Build Something Great",
  description:
    "Get in touch with Cybomb Technologies for expert web and mobile development, UI/UX design, and digital solutions. Reach out via phone, email, or our contact form.",
  keyword:
    "Contact Cybomb Technologies, Get in Touch, IT Company India Contact, Web Development Inquiry, Software Solutions Chennai, React Developer Contact, Digital Services Support",
  url: "https://www.cybomb.com/contact",
  image: "https://www.cybomb.com/images/contact-banner.jpg", // Replace with your actual contact page banner image if available
};
  return (
    <>
    <Metatags  metaProps={metaPropsData}/>
      
      <Contactcontent />
    </>
  );
}

export default Contact;
