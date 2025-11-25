import ReactContent from "./react-content";
import Metatags from "../../../../../SEO/meta-tags";

function ReactApp() {
    const metaPropsData = {
        title: "React Development Services in chennai | Cybomb MNC",
        description:
          "Cybomb Technologies provides expert React development services, creating fast, interactive, and scalable web applications with seamless user experiences.",
        keyword:
          "React Development in chennai, Web Applications, Frontend Development, UI/UX Solutions, Single Page Applications, Scalable Web Apps, Cybomb Technologies",
        url: "https://www.cybomb.com/services/react-development-service",
        image: "https://www.cybomb.com/images/banner-2.jpg", // Same as provided
      };
      

  return (
    <>
      <Metatags metaProps={metaPropsData} />
      <ReactContent />
    </>
  );
}

export default ReactApp;
