import React, { useState } from "react";
import styles from "./../../../common-ui/design-and-development/development-technologies-dnd.module.css";

const blockchainCategories = {
  "Blockchain Platforms": [
    "Ethereum",
    "Hyperledger Fabric",
    "Corda",
    "Polkadot"
  ],
  "Smart Contract Tools": [
    "Solidity",
    "Truffle",
    "Hardhat",
    "Remix IDE",
    "OpenZeppelin"
  ],
  "Decentralized Storage": [
    "IPFS",
    "Filecoin",
    "Storj",
    "Arweave",

  ],
  "Blockchain Development Tools": [
    "Infura",
    "Alchemy",
    "Moralis",
    "Chainstack"
  ],
  "Crypto Wallets & SDKs": [
    "Metamask",
    "WalletConnect",
    "Web3.js",
  ]
};

const blockchainLogos = {
  // Blockchain Platforms
  Ethereum: "https://img.icons8.com/fluent/512/ethereum.png",
  "Hyperledger Fabric": "https://avatars.githubusercontent.com/u/7657900?s=200&v=4",
  Corda: "https://avatars.githubusercontent.com/u/22600631?s=280&v=4",
  Polkadot: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQfy_UnBnPrqfM3qtVAT12pMMRpZ6P05M6vg&s",

  // Smart Contract Tools
  Solidity: "https://raw.githubusercontent.com/github/explore/ba9de12f88fd08825c51928e91f1678cb5c94b26/topics/solidity/solidity.png",
  Truffle: "https://archive.trufflesuite.com/assets/logo.png",
  Hardhat: "https://images.seeklogo.com/logo-png/42/2/hardhat-logo-png_seeklogo-426726.png",
  "Remix IDE": "https://repository-images.githubusercontent.com/59065830/b62be480-45d2-11ea-9989-803db0f9c44d",
  OpenZeppelin: "https://cdn.prod.website-files.com/63610769a12ca8b167ecebcf/67a02f5a05c6a925ba451690_dVtAB0PYwwYQkr-OjWDDZ7LaEskW4lqCpMRydc1Z16s.png",

  // Decentralized Storage
  IPFS: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSH4YR1OUopveXzvykNsE6o6pWa5qtK8F8SvQ&s",
  Filecoin: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Filecoin.svg/1200px-Filecoin.svg.png",
  Storj: "https://storj-s3.bcdn.literatehosting.net/original/2X/1/1749ea3b98358f6b4f444f0def48e25a077db222.png",
  Arweave: "https://s2.coinmarketcap.com/static/img/coins/200x200/5632.png",

  // Blockchain Development Tools
  Infura: "https://us1.discourse-cdn.com/bubble/original/3X/9/b/9bf36de9c5e3e80b4b1122a5208d1cac2e48b912.png",
  Alchemy: "https://cdn.prod.website-files.com/63610769a12ca8b167ecebcf/67a02fdcfe8041d7d2dc1c61_Ayv7yVx0fRyeOdF3Nvp56F8ivg3sNgwEpKMCFdBGi-A.png",
  Moralis: "https://build.avax.network/images/moralis.png",
  Chainstack: "https://images.g2crowd.com/uploads/product/image/social_landscape/social_landscape_5c6532100164fd537bb4134d79130a6f/chainstack.png",

  // Crypto Wallets & SDKs
  Metamask: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/MetaMask_Fox.svg/1200px-MetaMask_Fox.svg.png",
  WalletConnect: "https://walletconnect.network/icon.png?14b0dfc4ce526451",
  "Web3.js": "https://codebird.in/wp-content/uploads/2023/07/web3-icon.png",
};

const BlockchainToolsSection = () => {
  const categories = Object.keys(blockchainCategories);
  const [selected, setSelected] = useState(categories[0]);

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.title}>Blockchain Technology Tools</h2>

        {/* Tabs */}
        <div className={styles.tabWrapper}>
          {categories.map((cat) => (
            <button
              key={cat}
              className={`${styles.tab} ${selected === cat ? styles.activeTab : ""}`}
              onClick={() => setSelected(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Tool Cards */}
        <div className={styles.cardGrid}>
          {blockchainCategories[selected].map((tool) => (
            <div key={tool} className={styles.techCard}>
              <img
                src={blockchainLogos[tool]}
                alt={`${tool} logo`}
                className={styles.logo}
              />
              <span>{tool}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlockchainToolsSection;
