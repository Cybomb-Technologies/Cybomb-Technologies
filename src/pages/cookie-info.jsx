import Cookiebanner from "../component/cookiepolicy/cookie-banner";
import Cookiecontent from "../component/cookiepolicy/cookie-content";
import Metatags from "../SEO/meta-tags";

function Cookiepolicy() {
  const metaPropsData = {
    title: "Cookie Policy - Cybomb Technologies | How We Use Cookies",
    description:
      "Read the Cookie Policy of Cybomb Technologies to understand how we use cookies to improve your browsing experience, analyze traffic, and personalize content.",
    keyword:
      "Cookie Policy, Privacy, Website Cookies, Data Usage, Cybomb Technologies, Online Privacy",
    url: "https://www.cybomb.com/cookie-policy",
    image: "https://www.cybomb.com/images/banner-2.jpg", // Replace with actual banner if available
  };

  return (
    <>
      <Metatags metaProps={metaPropsData} />
      <Cookiebanner /> 
      <Cookiecontent />
    </>
  );
}

export default Cookiepolicy;
