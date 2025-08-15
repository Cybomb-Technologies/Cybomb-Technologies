import ApiDevContent from './api-content';
import AgileProcess from '../../../common-ui/agile-process/agile-process';
import StillNotSure from '../../../common-ui/stillnotsure/StillNotSure';
import Metatags from '../../../../SEO/meta-tags';

function ApiDevelopment() {
  const metaPropsData = {
    title: "API Development Services - Cybomb Technologies | Scalable & Secure APIs",
    description:
      "Cybomb Technologies offers scalable, secure, and high-performance API development services. We specialize in RESTful & GraphQL APIs, third-party integrations, and custom backend solutions.",
    keyword:
      "API Development, REST API, GraphQL API, Backend Development, API Integration, Cybomb Technologies, Web Services, Custom API Solutions",
    url: "https://www.cybomb.com/services/api-development",
    image: "https://www.cybomb.com/images/logo-11.png", // Replace with actual banner if available
  };

  return (
    <>
      <Metatags metaProps={metaPropsData} />
      <ApiDevContent />
      <AgileProcess />
      <StillNotSure />
    </>
  );
}

export default ApiDevelopment;
