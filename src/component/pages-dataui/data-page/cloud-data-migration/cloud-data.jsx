import CloudDataMigrationContent from "./cloud-data-content";
import StillNotSure from "../../../common-ui/stillnotsure/StillNotSure";
import AgileProcess from "../../../common-ui/agile-process/agile-process";
import Metatags from "../../../../SEO/meta-tags";

function CloudData() {
  const metaPropsData = {
    title: "Cloud Data Migration - Cybomb Technologies | Secure & Seamless Cloud Solutions",
    description:
      "Cybomb Technologies offers secure and seamless cloud data migration services, ensuring minimal downtime and maximum efficiency for your business operations.",
    keyword:
      "Cloud Migration, Data Migration, Cloud Services, Secure Data Transfer, Cloud Integration, Cybomb Technologies",
    url: "https://www.cybomb.com/services/cloud-data-migration",
    image: "https://www.cybomb.com/images/banner-2.jpg", // Replace with actual banner if available
  };

  return (
    <>
      <Metatags metaProps={metaPropsData} />
      <CloudDataMigrationContent />
      <AgileProcess />
      <StillNotSure />
    </>
  );
}

export default CloudData;
