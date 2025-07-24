import Servicesbanner from "../component/services/services-banner";
import Servicesmaincontent from "../component/services/services-main-content";

function Saasproduct() {
  let servicesBannerHeading = "SaaS Product Development";
  let serviceImageUrl = "/images/services/saas-product.jpg";
  let serviceSubHeding = "SaaS Product Development";
  let servicesPara1 =
    "Cybomb Technologies specializes in building scalable and secure SaaS products from scratch. We help businesses launch cloud-based platforms with modern UI and robust backends.";
  let servicesPara2 =
    "From multi-tenant architecture to subscription management, we handle everything end-to-end. Our tech stack includes React, Node.js, Next.js, PostgreSQL, and AWS.";
  let servicesPara3 =
    "We focus on performance, security, and seamless user experience across devices. Whether it’s CRM, HRMS, or custom tools—we make your SaaS vision real.";
  let servicesPara4 =
    "With continuous support and version upgrades, we keep your product ahead of the curve. Partner with Cybomb Technologies to build future-ready SaaS platforms.";

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

export default Saasproduct;
