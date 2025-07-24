import Servicesbanner from "../component/services/services-banner";
import Servicesmaincontent from "../component/services/services-main-content";

function Softwareconsulting() {
  let servicesBannerHeading = "Software Consulting & Strategy";
  let serviceImageUrl = "/images/services/software-consultant.jpg";
  let serviceSubHeding = "Software Consulting & Strategy";
  let servicesPara1 =
    "Cybomb Technologies provides expert software consulting to align tech with your business goals. We help you choose the right tools, platforms, and architecture for long-term success.";
  let servicesPara2 =
    "Our strategic planning covers system design, scalability, security, and cost optimization. We analyze your needs and deliver tailored solutions that drive growth.";
  let servicesPara3 =
    "From startups to enterprises, we guide digital transformation with proven methodologies. Our team ensures your software roadmap is future-ready and sustainable.";
  let servicesPara4 =
    "Collaborate with Cybomb Technologies to build smart, scalable, and efficient systems. We turn challenges into opportunities with the right tech strategy.";

  let Servicedetails = {
    servicesBannerHeading,
    serviceImageUrl,
    serviceSubHeding,
    servicesPara1,
    servicesPara2,
    servicesPara3,
    servicesPara4,
  };
  return (
    <>
      <Servicesbanner details={Servicedetails} />
      <Servicesmaincontent details={Servicedetails} />
    </>
  );
}

export default Softwareconsulting;
