import StorageContent from "./storage-content";
import StillNotSure from "../../../common-ui/stillnotsure/StillNotSure";
import AgileProcess from "../../../common-ui/agile-process/agile-process";
import Metatags from "../../../../SEO/meta-tags";

function StorageServices() {
  const metaPropsData = {
    title: "Data Storage Solutions - Cybomb Technologies | Secure & Scalable Storage",
    description:
      "Cybomb Technologies offers secure, scalable, and high-performance data storage solutions tailored to meet the needs of modern businesses.",
    keyword:
      "Data Storage, Cloud Storage, Secure Storage, Scalable Storage Solutions, Data Backup, Cybomb Technologies",
    url: "https://www.cybomb.com/services/storage-solution",
    image: "https://www.cybomb.com/images/banner-2.jpg", // Replace with actual banner if available
  };

  return (
    <>
      <Metatags metaProps={metaPropsData} />
      <StorageContent />
      <AgileProcess />
      <StillNotSure />
    </>
  );
}

export default StorageServices;
