import CSharpPage from "./csharp-content";
import StillNotSure from "../../../../common-ui/stillnotsure/StillNotSure";
import Metatags from "../../../../../SEO/meta-tags";

function CSharpApp() {
  const metaPropsData = {
    title: "C# Development Services - Cybomb Technologies | Robust .NET Solutions",
    description:
      "Cybomb Technologies provides professional C# development services, delivering robust, scalable, and secure .NET applications tailored to meet your business objectives.",
    keyword:
      "C# Development, .NET Development, Enterprise Applications, C# Programming, Web Applications, Cybomb Technologies",
    url: "https://www.cybomb.com/services/csharp-development",
    image: "https://www.cybomb.com/images/banner-2.jpg", // Same as provided
  };

  return (
    <>
      <Metatags metaProps={metaPropsData} />
      <CSharpPage />
      <StillNotSure />
    </>
  );
}

export default CSharpApp;
