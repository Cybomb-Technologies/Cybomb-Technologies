import DotNetPage from "./dotnet-content";
import Metatags from "../../../../../SEO/meta-tags";

function DotnetApp() {
  const metaPropsData = {
    title: ".NET Development Services - Cybomb Technologies | Scalable & Secure Solutions",
    description:
      "Cybomb Technologies delivers expert .NET development services, building scalable, secure, and high-performance applications tailored to your business needs.",
    keyword:
      ".NET Development, ASP.NET Development, Enterprise Applications, Web Applications, C# Development, Cybomb Technologies",
    url: "https://www.cybomb.com/services/dotnet-development-service",
    image: "https://www.cybomb.com/images/banner-2.jpg", // Same as provided
  };

  return (
    <>
      <Metatags metaProps={metaPropsData} />
      <DotNetPage />
      
    </>
  );
}

export default DotnetApp;
