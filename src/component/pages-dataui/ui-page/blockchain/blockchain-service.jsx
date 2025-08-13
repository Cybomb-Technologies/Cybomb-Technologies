import BlockchainSolutionsContent from "./blockchain-content";
import StillNotSure from "../../../common-ui/stillnotsure/StillNotSure";
import AgileProcess from "../../../common-ui/agile-process/agile-process";
import Metatags from "../../../../SEO/meta-tags";

function BlockChainServices() {
  const metaPropsData = {
    title: "Blockchain Development Services - Cybomb Technologies | Secure & Transparent Solutions",
    description:
      "Cybomb Technologies offers cutting-edge blockchain development services, delivering secure, transparent, and decentralized solutions for businesses across industries.",
    keyword:
      "Blockchain Development, Decentralized Applications, Smart Contracts, Distributed Ledger, Cybomb Technologies",
    url: "https://www.cybomb.com/services/blockchain",
    image: "https://www.cybomb.com/images/banner-2.jpg", // Same as provided
  };

  return (
    <>
      <Metatags metaProps={metaPropsData} />
      <BlockchainSolutionsContent />
      <AgileProcess />
      <StillNotSure />
    </>
  );
}

export default BlockChainServices;
