import * as React from "react";
import UniverseSection from "../views/UniverseSection";
import ChainSection from "../views/ChainSection";
import FeatureSection from "../views/FeatureSection";
import GallerySection from "../views/GallerySection";
import HeroSection from "../views/HeroSection";
import InfoSection from "../views/InfoSection";
import SocialProofSection from "../views/SocialProofSection";
import TeamSection from "../views/TeamSection";
import DiverseActor from "../views/DiverseActor";
import FastAndEasySetup from "../views/FastAndEasySetup";
import Fractionalized from "../views/Fractionalized";
import FeaturedNFT from "../views/FeaturedNFT";
import FeaturedCreators from "../views/FeaturedCreators";

export default function Index(props) {
  return (
    <>
      <HeroSection
        heroSectionConfigData={props.heroSectionConfigData}
        sectionStyle={props.heroSectionStyle}
      />
      <FeatureSection
        featureSectionConfigData={props.featureSectionConfigData}
        optionStyles={props.featureSectionOptionStyles}
        optionContainerStyles={props.featureSectionOptionContainerStyles}
        optionContainerStyleClasses={
          props.featureSectionOptionContainerStyleClasses
        }
      />
      <DiverseActor
        diverseActorConfigData={props.diverseActorSectionConfigData}
      />
      <GallerySection
        gallerySectionConfigData={props.gallerySectionConfigData}
        optionStyles={props.gallerySectionOptionStyle}
      />
      {/* <InfoSection
        listStyle={props.infoSectionListStyle}
        infoSectionConfigData={props.infoSectionConfigData}
      /> */}
      {/* <ChainSection chainSectionConfigData={props.chainSectionConfigData} /> */}
      {/* <UniverseSection
        leftSubsectionData={props.universeSectionLeftSubSectionData}
        rightSubsectionData={props.universeSectionRightSubSectionData}
        headerLogoStyles={props.universeSectionHeaderLogoStyles}
      /> */}
      {/* <TeamSection
        teamsConfigData={props.teamSectionConfigData}
        optionStyles={props.teamSectionOptionStyles}
        linkStyles={props.teamSectionLinkStyles}
      /> */}
      {/* <SocialProofSection
        socialProofConfigData={props.socialProofSectionConfigData}
        optionContainerStyles={props.socialProofSectionOptionContainerStyles}
      /> */}
      <FeaturedCreators featuredCreatorData={props.featuredCreatorConfig} />
      <FeaturedNFT featuredNFTConfig={props.featuredNFTConfig} />
      <FastAndEasySetup
        fastAndEasySectionConfigData={props.fastAndEasySectionConfigData}
        optionStyles={props.fastAndEasySectionOptionStyles}
        optionContainerStyles={props.fastAndEasySectionOptionContainerStyles}
        optionContainerStyleClasses={
          props.fastAndEasySectionOptionContainerStyleClasses
        }
      />
      <Fractionalized
        initiativeSectionConfigData={props.initiativeSectionConfigData}
        initiativeSectionListStyle={props.initiativeSectionListStyle}
      />
      {/* <SubscribeSection /> */}
    </>
  );
}
export async function getStaticProps() {
  const heroSectionConfigData = {
    title: `For The Art of Yesterday.`,
    subtitle:
      "Experience the first NFT Marketplace with Decentralized Identifiers",
    buttons: [
      {
        label: "Launch App",
        endIcon: "bi-arrow-up-right",
        variant: "button-primary",
        href: "https://marketplace.assetmantle.one/",
      },
      {
        label: "What’re DIDs?",
        endIcon: "bi-chevron-right",
        variant: "button-secondary",
        href: "https://www.w3.org/TR/did-core/",
      },
    ],
    image: "/images/hero/mantler.webp",
  };
  const heroSectionStyle = `py-4 mt-2 text-white text-center`;
  const featureSectionConfigData = {
    paperVariant: "translucent",
    textAlign: "center",
    title: "Mantleplace Features",
    titleComponent: "",
    titleVariant: "h1",
    titleColor: "text-primary",
    description:
      "MantlePlace inherits latest principles of Blockchain Identity and Customization to create truly unique ownership and optimized transfer of value ",
    descriptionStyle: { maxWidth: "min(836px, 100%)", margin: "0 auto" }, // object of styles or false
    featuresArray: [
      {
        href: "",
        icon: "/FeatureSection/futureInteroperability.svg", // put icon component or url >>don't forgot to change the below
        title: "DEX for NFTs",
        titleVariant: "h4",
        titleColor: "text-primary",
        description:
          "MantlePlace is a full fledged Decentralized exchange for NFTs enabling various modes of transfer of value, including buy, sell, bid, ask, and potentially several trade types.",
        descriptionVariant: "body2",
        descriptionColor: "text-white",
      },
      {
        href: "",
        icon: "/FeatureSection/didBased.svg", // put icon component or url >>don't forgot to change the below
        title: "DID based ownership",
        titleVariant: "h4",
        titleColor: "text-primary",
        description:
          "The ownership in NFT economy of MantlePlace is implemented using the latest concept in Blockchain Identity called Decentralized Identifiers (DIDs).",
        descriptionVariant: "body2",
        descriptionColor: "text-white",
      },
      {
        href: "",
        icon: "/FeatureSection/optimizedForNft.svg", // put icon component or url >>don't forgot to change the below
        title: "Schema based NFT",
        titleVariant: "h4",
        titleColor: "text-primary",
        description:
          "MantlePlace allows creators to build bespoke NFT schemas, enabling customization of NFT metadata at the most granular level, to create truly unique assets.",
        descriptionVariant: "body2",
        descriptionColor: "text-white",
      },
      {
        href: "",
        icon: "/FeatureSection/pioneeringCosmosEco.svg", // put icon component or url >>don't forgot to change the below
        title: "Cosmos Advantage",
        titleVariant: "h4",
        titleColor: "text-primary",
        description:
          "MantlePlace is based on AssetMantle chain, a Cosmos zone, enabling fast, cheap transactions, Tendermint consensus algorithm, IBC based transfers, Modular SDK etc.",
        descriptionVariant: "body2",
        descriptionColor: "text-white",
      },
      {
        href: "",
        icon: "/FeatureSection/multiChain.svg", // put icon component or url >>don't forgot to change the below
        title: "Multichain Transfers",
        titleVariant: "h4",
        titleColor: "text-primary",
        description:
          "MantlePlace will leverage an IBC enabled interchain universe to potentially create a multichain NFT market. It is at the forefront of adopting InterNFT Standards.",
        descriptionVariant: "body2",
        descriptionColor: "text-white",
      },
      {
        href: "",
        icon: "/FeatureSection/fractionalized.svg", // put icon component or url >>don't forgot to change the below
        title: "Fractionalized Ownership",
        titleVariant: "h4",
        titleColor: "text-primary",
        description:
          "MantlePlace will implement fractional ownership of assets at chain level, where several parties could have collective ownership of a unit NFT. ",
        descriptionVariant: "body2",
        descriptionColor: "secondary.main",
      },
    ],
  };
  const featureSectionOptionContainerStyleClasses = `d-flex align-items-center justify-content-center flex-wrap mt-5`;
  const featureSectionOptionContainerStyles = {
    gap: "14px",
  };
  const featureSectionOptionStyles = {
    background: "transparent",
    maxWidth: "374px",
    boxShadow: "none",
    padding: "16px 22px",
    minHeight: "331px",
    transition: "all 0.3s ease-in-out",
  };
  const diverseActorSectionConfigData = {
    textAlign: "", // >>> default: left
    fullWidth: false, // boolean
    smallDeviceColumnDirections: "", // only "reverse" or "" >>>>>>default is "no-reverse"
    contentMaxWidth: "", // "number+px"(ie. "100px") or "" >>>>>>default is "457px"
    title: "Diverse Actors using DIDs",
    titleComponent: "h1",
    titleVariant: "h2",
    titleColor: "text-white",
    description: [
      "MantlePlace creates an extended NFT economy with a diverse range of actors like Collectors, sole Creators, Enterprise creators, with potential to manage many more. These actors are created using Decentralized Identifiers (DIDs) which enables authenticity, integrity and efficient transfer of value in an easy manner.",
      "This shopifying of NFT assets, leads to a distributed network of networks, with world state stored collectively in the AssetMantle chain.",
    ],
    descriptionVariant: "body2",
    descriptionColor: "text-white",
    descriptionStyle: { maxWidth: "min(836px, 100%)", margin: "0 auto" }, // object of styles or false
    rightSidedImage: "/DiverseActors/diverseActors.webp",
  };
  const gallerySectionConfigData = {
    paperVariant: "translucent",
    titleVariant: "h3",
    titleColor: "text-primary",
    descriptionVariant: "body2",
    descriptionColor: "text-white",
    textAlign: "center", // >>> default: left
    title: "A Creator’s Economy ",
    titleComponent: "h1",
    endIcon: "keyboard_arrow_right",
    description:
      "MantlePlace is creator-centric, providing host of utilities enabling fast, versatile and characteristically unique creation of NFTs",
    descriptionStyle: { maxWidth: "min(836px, 100%)", margin: "0 auto" }, // object of styles or false
    galleries: [
      // object template
      // {
      //   image: "/GallerySection//mantleplace.png",
      //   title: "",
      //   description: "",
      //   buttons: [
      //     {
      //       text: "",
      //       url: "",
      //     },
      //   ],
      // },
      {
        image: "/GallerySection/serverlessIssuance.png",
        title: "",
        description:
          "Several Issuance styles including Batch & Lazy Minting, open to all or whitelist based ",
        buttons: [],
      },
      {
        image: "/GallerySection/abilityTokenize.png",
        title: "",
        description:
          "Ability to tokenize anything of real world using elaborate NFT metadata definitions",
        buttons: [],
      },
      {
        image: "/GallerySection/createSophisticated.png",
        title: "",
        description:
          "Create sophisticated royalty splits for precise value creation for NFT Creators ",
        buttons: [],
      },
      {
        image: "/GallerySection/OptimizedForNFTCreator.png",
        title: "",
        description:
          "Option for NFT creators to get verified, encouraging authenticity and option for exclusivity",
        buttons: [],
      },
    ],
  };
  const gallerySectionOptionStyle = {
    maxWidth: "272px",
    boxShadow: "none",
    height: "100%",
    padding: "0 11px",
    display: "flex",
    flexDirection: "column",
  };
  const infoSectionConfigData = {
    textAlign: "", // >>> default: left
    fullWidth: false, // boolean
    smallDeviceColumnDirections: "", // only "reverse" or "" >>>>>>default is "no-reverse"
    contentMaxWidth: "", // "number+px"(ie. "100px") or "" >>>>>>default is "457px"
    title: "Distributed NFT economy",
    titleComponent: "h1",
    titleVariant: "h2",
    titleColor: "secondary.main",
    description: [
      "AssetMantle suite of products creates a distributed NFT Economy where users can create not only NFT collections but their own NFT marketplaces and storefronts.",
      "This shopifying of NFT assets, leads to a distributed network of networks, with world state stored collectively in the AssetMantle chain.",
    ],
    descriptionVariant: "body1",
    descriptionColor: "secondary.main",
    descriptionStyle: { maxWidth: "min(836px, 100%)", margin: "0 auto" }, // object of styles or false
    rightSidedImage: "",
    imageListVariant: "quilted",
    authorVariant: "text",
    artVariant: "caption",
    artColor: "primary.light",
    imageData: [
      {
        img: "/InfoSection/Archetypes.webp",
        title: "Archetypes",
        name: "Archetypes",
        author: "Oblitus Mantra",
        href: "https://twitter.com/Archetypes0nft",
        rows: 2,
      },
      {
        img: "/InfoSection/arto.webp",
        title: "Arto DAO",
        name: "Arto DAO",
        author: "Arto DAO",
        href: "https://twitter.com/ArtoDAO",
      },
      {
        img: "/InfoSection/Aequanimity.webp",
        title: "Aequanimity",
        name: "Aequanimity",
        author: "pratykarya",
        href: "https://twitter.com/PratykArya",
        rows: 2,
      },
      {
        img: "/InfoSection/Christiopkosin.webp",
        title: "Christiopkosin",
        name: "Christiopkosin",
        author: "Christiopkosin",
        href: "",
      },
      {
        img: "/InfoSection/the_dansant.webp",
        title: "The Dansant",
        name: "The Dansant",
        author: "the_dansant",
        href: "https://twitter.com/the_dansant",
        rows: 2,
      },
      {
        img: "/InfoSection/boldwockeez.webp",
        title: "boldwockeez",
        name: "boldwockeez",
        author: "cryptoduuudes",
        href: "https://twitter.com/CryptoDuuudes",
      },
      {
        img: "/InfoSection/MantleMonkeys.webp",
        title: "Mantle Monkeys",
        name: "Mantle Monkeys",
        author: "MantleMonkeys",
        href: "https://twitter.com/MantleMonkeys",
      },
      {
        img: "/InfoSection/mantlewarriors.webp",
        title: "Mantle Warriors",
        name: "Mantle Warriors",
        author: "mantlewarriors",
        href: "https://twitter.com/mantlewarriors",
      },
      {
        img: "/InfoSection/OblitusMantra1.webp",
        title: "Oblitus Mantra - Forgotten Worlds",
        name: "Oblitus Mantra",
        author: "Oblitus",
        href: "https://twitter.com/Oblitus_NFT",
      },
      {
        img: "/InfoSection/OblitusMantra2.webp",
        title: "Oblitus Mantra - Forgotten Worlds",
        name: "Oblitus Mantra",
        author: "Oblitus",
        href: "https://twitter.com/Oblitus_NFT",
        rows: 2,
      },
      {
        img: "/InfoSection/Pinnacle1.webp",
        title: "Pinnacle",
        name: "Pinnacle",
        author: "Zeelectric",
        href: "",
        rows: 2,
      },
      {
        img: "/InfoSection/Pinnacle2.webp",
        title: "Pinnacle",
        name: "Pinnacle",
        author: "Zeelectric",
        href: "",
        rows: 2,
      },
    ],
  };
  const infoSectionListStyle = {
    margin: { xs: "auto", md: "auto 0" },
    height: "100%",
  };
  const chainSectionConfigData = {
    textAlign: "", // >>> default: left
    title: "The AssetMantle Chain",
    subTitle:
      "The AssetMantle Blockchain leverages the following web3 standards which makes it pioneer the NFT Ecosphere",
    subSectionTitle: "$MNTL",
    subSectionTitleIcon: "/ChainSection/mntl.svg", // url:"/someImage.png">>> default: none
    subSectionTitleVariant: "h1",
    subSectionTitleColor: "secondary.light",
    subSectionDescription:
      "The native token which powers the AssetMantle’s NFT Economy",
    subSectionDescriptionVariant: "subtitle2",
    subSectionDescriptionColor: "secondary.light",
    descriptionVariant: "subtitle2",
    descriptionColor: "primary.main",
    subSectionDescriptionStyle: {
      textAlign: { xs: "center" },
      mx: { xs: "auto !important", sm: "0 !important" },
      maxWidth: "400px",
    }, // object of styles or false
    backgroundImage: "", // "url('/images/mantleplace.png')",
    defaultChainDescription:
      "One of the pioneering zones of the rich Cosmos Ecosystem ",
    ctas: [
      {
        title: "Buy Now ",
        url: "https://app.osmosis.zone/?from=USDC&to=MNTL",

        icon: "shopping_cart", // url: "/" or component: <Icon/>
        target: "_blank", // valid values: "_blank", "_self", "_parent", "_top" >>>default: "_self"
        disabled: false,
        variant: "contained",
      },
      {
        title: "Learn More",
        url: "/about#mntl-token-info",

        icon: "keyboard_arrow_right", // url: "/" or component: <Icon/>

        target: "_blank", // valid values: "_blank", "_self", "_parent", "_top" >>>default: "_self"
        disabled: false,
        variant: "outlined",
      },
    ],
    chains: [
      {
        icon: "/ChainSection/cosmos.svg", // add url: "https://icon.png"
        alt: "modular",
        title: "Implements modular framework from the popular Cosmos SDK",
      },
      {
        icon: "/ChainSection/modular.svg", // add url: "https://icon.png"
        alt: "cosmos",
        title: "Imbibes the leading Tendermint BFT Consensus Engine",
      },
      {
        icon: "/ChainSection/connected.svg", // add url: "https://icon.png"
        alt: "connected",

        title: "Incorporates connectedness with Cosmos Zones using IBC",
      },
      {
        icon: "/ChainSection/interNft.svg", // add url: "https://icon.png"
        alt: "internft",
        title: "Inherits the plan to build open standards for interchain NFT",
      },
    ],
  };
  const featuredCreatorConfig = {
    title: "Featured Creators",
    description: "",
    slides: [
      {
        image: "/featuredCreators/hero_image_1.png",
        avatar: "/featuredCreators/hero_avatar_1.png",
        name: "Dreamyvisuals  ",
        social: "https://twitter.com/dreamyvisualz",
        profile: "Forest Ruins",
      },
      {
        image: "/featuredCreators/hero_image_2.png",
        avatar: "/featuredCreators/hero_avatar_2.png",
        name: "shainefer",
        social: "https://twitter.com/Shai_Nefer_",
        profile: "Break",
      },
      {
        image: "/featuredCreators/hero_image_3.png",
        avatar: "/featuredCreators/hero_avatar_3.png",
        name: "Igor Kozhanov ",
        social: "https://twitter.com/Igor211988189",
        profile: "Red",
      },
      {
        image: "/featuredCreators/hero_image_4.png",
        avatar: "/featuredCreators/hero_avatar_4.png",
        name: "ORBICS",
        social: "https://twitter.com/OrbicsNFT?t=KRA-mPDPPop5L6opSYjUtg&s=09",
        profile: "Orbics",
      },
      {
        image: "/featuredCreators/hero_image_5.png",
        avatar: "/featuredCreators/hero_avatar_5.png",
        name: "Gojuku",
        social: "https://twitter.com/Gojuku_",
        profile: "David",
      },
    ],
  };
  const featuredNFTConfig = {
    title: "Featured NFTs",
    description: "",
    imageHeight: 109.34, // in pixel (required)
    gap: 16, // in pixel (required)
    imageData: [
      {
        img: "/InfoSection/Archetypes.webp",
        title: "Archetypes",
        name: "Archetypes",
        author: "Oblitus Mantra",
        href: "https://twitter.com/Archetypes0nft",
        rows: 3,
        column: 1,
      },
      {
        img: "/InfoSection/arto.webp",
        title: "Arto DAO",
        name: "Arto DAO",
        author: "Arto DAO",
        href: "https://twitter.com/ArtoDAO",
        rows: 2,
      },
      {
        img: "/InfoSection/Aequanimity.webp",
        title: "Aequanimity",
        name: "Aequanimity",
        author: "pratykarya",
        href: "https://twitter.com/PratykArya",
        rows: 2,
      },
      {
        img: "/InfoSection/Christiopkosin.webp",
        title: "Christiopkosin",
        name: "Christiopkosin",
        author: "Christiopkosin",
        href: "",
        rows: 2,
      },
      {
        img: "/InfoSection/the_dansant.webp",
        title: "The Dansant",
        name: "The Dansant",
        author: "the_dansant",
        href: "https://twitter.com/the_dansant",
        rows: 3,
      },
      {
        img: "/InfoSection/mantlewarriors.webp",
        title: "Mantle Warriors",
        name: "Mantle Warriors",
        author: "mantlewarriors",
        href: "https://twitter.com/mantlewarriors",
        rows: 2,
      },
      {
        img: "/InfoSection/Pinnacle2.webp",
        title: "Pinnacle",
        name: "Pinnacle",
        author: "Zeelectric",
        href: "",
        rows: 3,
      },
      {
        img: "/InfoSection/OblitusMantra2.webp",
        title: "Oblitus Mantra - Forgotten Worlds",
        name: "Oblitus Mantra",
        author: "Oblitus",
        href: "https://twitter.com/Oblitus_NFT",
        rows: 3,
      },
      {
        img: "/InfoSection/Pinnacle1.webp",
        title: "Pinnacle",
        name: "Pinnacle",
        author: "Zeelectric",
        href: "",
        rows: 3,
      },
      {
        img: "/InfoSection/OblitusMantra1.webp",
        title: "Oblitus Mantra - Forgotten Worlds",
        name: "Oblitus Mantra",
        author: "Oblitus",
        href: "https://twitter.com/Oblitus_NFT",
        rows: 1,
      },
    ],
  };
  const fastAndEasySectionConfigData = {
    paperVariant: "translucent",
    textAlign: "center",
    title: "Fast & Easy Setup",
    titleComponent: "",
    titleVariant: "h1",
    titleColor: "text-primary",
    description:
      "Scramble an account in an instant to create NFTs and publish in quick easy steps",
    descriptionStyle: { maxWidth: "min(836px, 100%)", margin: "0 auto" }, // object of styles or false
    featuresArray: [
      {
        href: "",
        icon: "/FastAndEasySetup/createUsername.png", // put icon component or url >>don't forgot to change the below
        title: "",
        titleVariant: "h4",
        titleColor: "text-white",
        description: "Create Username ",
        descriptionVariant: "body1",
        descriptionColor: "text-white",
      },
      {
        href: "",
        icon: "/FastAndEasySetup/createNFT.png", // put icon component or url >>don't forgot to change the below
        title: "",
        titleVariant: "h4",
        titleColor: "text-white",
        description: "Create NFTs using Schemas ",
        descriptionVariant: "body1",
        descriptionColor: "text-white",
      },
      {
        href: "",
        icon: "/FastAndEasySetup/publish.png", // put icon component or url >>don't forgot to change the below
        title: "",
        titleVariant: "h4",
        titleColor: "text-white",
        description: "Publish to Marketplace",
        descriptionVariant: "body1",
        descriptionColor: "text-white",
      },
    ],
  };
  const fastAndEasySectionOptionContainerStyleClasses = `d-flex align-items-center justify-content-center flex-wrap mt-5`;
  const fastAndEasySectionOptionContainerStyles = {
    gap: "16px",
  };
  const fastAndEasySectionOptionStyles = {
    minWidth: "calc( 208px + 44px)",
    padding: "16px 22px",
    transition: "all 0.3s ease-in-out",
  };
  const initiativeSectionConfigData = {
    paperVariant: "translucent",
    textAlign: "center", // >>> default: left
    title: "Fractionalized NFTs",
    titleOnLeft: false, // >>> default: false
    titleColor: "text-white",
    titleVariant: "body1",
    description:
      "Find the right balance between rare ownership and economic affordability. Embrace your inner piece. Coming Soon. ",
    descriptionVariant: "body1",
    descriptionOnLeft: false, // >>> default: false
    descriptionStyle: false, // object of styles or false
    backgroundImage: "", // "url('/images/mantleplace.png')",
    leftImage: "/AdvantageSection/advantage_bg.png", // "url('/images/mantleplace.png')",
    ctas: [],
    initiatives: [
      {
        icon: "/AdvantageSection/owners.png", // add component: <Icon sx={styles} /> or url: "https://icon.png"
        title: "One NFT but several owners",
        description: "",
      },
      {
        icon: "/AdvantageSection/secure.png", // add component: <Icon sx={styles} /> or url: "https://icon.png"
        title: "Decentralized, multi-ownership & Secure",
        description: "",
      },
      {
        icon: "/AdvantageSection/affordability.png", // add component: <Icon sx={styles} /> or url: "https://icon.png"
        title: "Enables rare-ownership affordability",
        description: "",
      },
      {
        icon: "/AdvantageSection/fractionalized.png", // add component: <Icon sx={styles} /> or url: "https://icon.png"
        title: "Fractionalize any asset easily",
        description: "",
      },
    ],
  };
  const initiativeSectionListStyle = {
    background: "transparent",
  };
  const universeSectionLeftSubSectionData = {
    sectionTitle: "The Mantle Universe",
    sectionSubTitle:
      "Apart from the AssetMantle ecosystem, there is an extended ecosystem called MantleLabs that commits to community driven development",
    paperVariant: "translucent",
    buttonVariant: "contained",
    items: [
      {
        image: "UniverseSection/Mantle_Products.png",
        title: "Mantle Products",
        subData: [
          "MantlePlace",
          "MantleBuilder",
          "MantleWallet",
          "MantleExplorer",
          "+2 More",
        ],
      },
      {
        image: "UniverseSection/Mantle_Chain.png",
        title: "Mantle-1 Chain",
        subData: ["$MNTL Token", "Foundation Validators"],
      },
      {
        image: "UniverseSection/Mantle_Creatives.png",
        title: "Mantle Creatives",
        subData: ["Membership NFTs", "Mantlers", "AssMan NFTs"],
      },
      {
        image: "UniverseSection/Community_Initiatives.png",
        title: "Community Initiatives",
        subData: ["InterNFT", "Artist4Web3", "MantleArmy"],
      },
    ],
  };
  const universeSectionRightSubSectionData = {
    titleColor: "primary.main",
    listVariant: "body1",
    titleVariant: "h4",
    items: [
      {
        image: "UniverseSection/Partnerships.png",
        title: "Partnerships",
        subData: ["Vaildators", "DAOs", "Investors", "Media", "+2 More"],
      },
      {
        image: "UniverseSection/Ecosystem_Projects.png",
        title: "Ecosystem Projects",
        subData: ["MyriadFlow", "RushRaids", "Xtrathin"],
      },
      {
        image: "UniverseSection/Integrations.png",
        title: "Integrations",
        subData: ["Modules", "NFT Toolings", "Analytics", "LaunchPads"],
      },
      {
        image: "UniverseSection/Grants.png",
        title: "Grants",
        subData: ["Internal Development", "External Integrations", "Products"],
      },
    ],
  };
  const universeSectionHeaderLogoStyles = {
    height: "170px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };
  const teamSectionConfigData = {
    memberColor: "primary.main",
    textAlign: "center", // >>> default: left
    title: "Meet our team",
    titleComponent: "h2",
    titleVariant: "h1",
    description:
      "Browse through the highly skilled and qualified AssetMantle cohort who make the scalable value creation happen",
    descriptionStyle: {
      mt: 4,
      mx: "auto",
      maxWidth: "min(836px, 100%)",
      margin: "0 auto",
    }, // object of styles or false
    descriptionVariant: "subtitle2",
    nameVariant: "subtile2",
    nameColor: "primary.main",
    designationVariant: "body2",
    designationColor: "primary.light",
    members: [
      // object template
      // {
      //   image: "/TeamSection/https://assetmantle.one/images/team/deepanshu.png",
      //   name: "Deepanshu Kumar",
      //   designation: "Founder, Core - Product Planning & Implementation​",
      //   designationType: "",
      //   social: [
      //     {
      //       icon: "LinkedIn",
      //       href: "",
      //     },
      //     {
      //       icon: "Twitter",
      //       href: "",
      //     },
      //     {
      //       icon: "GitHub",
      //       href: "",
      //     },
      //     {
      //       icon: "Behance",
      //       href: "",
      //     },
      //     {
      //       icon: "Website",
      //       href: "",
      //     },
      //   ],
      // },
      {
        image: "/TeamSection/deepanshu.png",
        name: "Deepanshu Tripathi",
        designation: "Founder, Core - Product Planning & Implementation​",
        designationType: "Founding",
        social: [
          {
            icon: "LinkedIn",
            href: "http://linkedin.com/in/deepanshutr",
          },
          {
            icon: "Twitter",
            href: "https://twitter.com/deepanshutr",
          },
          {
            icon: "GitHub",
            href: "https://github.com/deepanshutr",
          },
        ],
      },
      {
        image: "/TeamSection/abhinav.png",
        name: "Abhinav Kumar",
        designation: "Co-Founder, Core - Product Planning & Implementation​",
        designationType: "Founding",
        social: [
          {
            icon: "LinkedIn",
            href: "https://www.linkedin.com/in/avkr003/",
          },
          {
            icon: "Twitter",
            href: "https://twitter.com/avkr003",
          },
          {
            icon: "GitHub",
            href: "https://github.com/avkr003",
          },
        ],
      },
      {
        image: "/TeamSection/kamlesh.png",
        name: "Kamlesh Parikarath",
        designation: "Core - Product Development & Growth",
        designationType: "Founding",
        social: [
          {
            icon: "LinkedIn",
            href: "https://www.linkedin.com/in/kamleshparikarath/",
          },
          {
            icon: "Twitter",
            href: "https://twitter.com/0xKombos",
          },
          {
            icon: "GitHub",
            href: "https://github.com/kombos",
          },
          {
            icon: "Behance",
            href: "https://www.behance.net/kombos",
          },
        ],
      },
      {
        image: "/TeamSection/naman.png",
        name: "Naman Kabra",
        designation: "Core - Business Development & Growth",
        designationType: "Founding",
        social: [
          {
            icon: "LinkedIn",
            href: "https://www.linkedin.com/in/namankabra/",
          },
          {
            icon: "Twitter",
            href: "https://twitter.com/307naman",
          },
          {
            icon: "GitHub",
            href: "https://github.com/nk307",
          },
        ],
      },
      {
        image: "/TeamSection/sachin.png",
        name: "Sachin Matta",
        designation: "Core - Product Marketing and Communications",
        designationType: "Founding",
        social: [
          {
            icon: "LinkedIn",
            href: "https://www.linkedin.com/in/sachin-matta/",
          },
          {
            icon: "Twitter",
            href: "https://twitter.com/ciberexplosion",
          },
          {
            icon: "GitHub",
            href: "https://github.com/ciberexplosion",
          },
        ],
      },
      {
        image: "/TeamSection/prabhav.png",
        name: "Prabhav Varambally",
        designation: "Core - Business Operations & Strategy",
        designationType: "Founding",
        social: [
          {
            icon: "LinkedIn",
            href: "https://www.linkedin.com/in/prabhavtv/",
          },
          {
            icon: "Twitter",
            href: "https://twitter.com/Prabhavv_",
          },
          {
            icon: "GitHub",
            href: "https://github.com/Prabhavv",
          },
        ],
      },
      {
        image: "/TeamSection/harman.png",
        name: "Harman Sohi",
        designation: "Design Lead",
        designationType: "Design",
        social: [
          {
            icon: "LinkedIn",
            href: "https://www.linkedin.com/in/harman-sohi-she-her-2590b8b4/",
          },
          {
            icon: "Twitter",
            href: "https://twitter.com/NotHarmanSohi",
          },
          {
            icon: "Behance",
            href: "https://www.behance.net/sohiharman",
          },
        ],
      },
      {
        image: "/TeamSection/sarin.png",
        name: "Sarin Venugopal",
        designation: "Product Marketing & Operations",
        designationType: "Developer",
        social: [
          {
            icon: "LinkedIn",
            href: "https://www.linkedin.com/in/sarin-venugopal-3123638/",
          },
          {
            icon: "Twitter",
            href: "https://twitter.com/the_bad_apple_",
          },
        ],
      },
      {
        image: "/TeamSection/pratik.png",
        name: "Pratik Balar",
        designation: "DevOps & Infrastructure",
        designationType: "Founding",
        social: [
          {
            icon: "LinkedIn",
            href: "https://www.linkedin.com/in/pratikbalar",
          },
          {
            icon: "Twitter",
            href: "https://twitter.com/pratikbin",
          },
          {
            icon: "GitHub",
            href: "https://github.com/pratikbin",
          },
          {
            icon: "Website",
            href: "https://pratikb.in/",
          },
        ],
      },
      {
        image: "/TeamSection/sarvagya.png",
        name: "Sarvagya Sagar",
        designation: "Research and DevSecOps​",
        designationType: "Founding",
        social: [
          {
            icon: "LinkedIn",
            href: "https://www.linkedin.com/in/iamsarvagyaa/",
          },
          {
            icon: "Twitter",
            href: "https://twitter.com/iamsarvagyaa",
          },
          {
            icon: "GitHub",
            href: "https://github.com/iamsarvagyaa",
          },
          {
            icon: "Website",
            href: "https://sarvagya.me",
          },
        ],
      },
      {
        image: "/TeamSection/arun.png",
        name: "Arun Ramesan",
        designation: "Visual Designer​",
        designationType: "Design",
        social: [
          {
            icon: "LinkedIn",
            href: "https://www.linkedin.com/in/arunramesan",
          },
          {
            icon: "Behance",
            href: "https://www.behance.net/arxwork",
          },
          {
            icon: "Instagram",
            href: "https://www.instagram.com/arxwork",
          },
        ],
      },
      {
        image: "/TeamSection/mrinal.png",
        name: "Mrinal Vishwanath",
        designation: "Product Marketing and PR Strategist",
        designationType: "Developer",
        social: [
          {
            icon: "LinkedIn",
            href: "https://www.linkedin.com/in/mrinal-vishwanath-813a07137",
          },
          {
            icon: "Twitter",
            href: "https://twitter.com/MrinalVishwana1",
          },
          {
            icon: "GitHub",
            href: "https://github.com/MrinalVishy",
          },
        ],
      },
      {
        image: "/TeamSection/jagdish.png",
        name: "Jagdish Chudasama",
        designation: "UI/UX Developer​",
        designationType: "Developer",
        social: [
          {
            icon: "LinkedIn",
            href: "https://www.linkedin.com/in/chudasama-jagdish-3759981b1/",
          },
          {
            icon: "GitHub",
            href: "https://github.com/chudasamajd",
          },
          {
            icon: "Twitter",
            href: "https://twitter.com/JagdishChudas15",
          },
          {
            icon: "Website",
            href: `https://chudasamajd.github.io/chudasamajd`,
          },
        ],
      },
      {
        image: "/TeamSection/namaha.png",
        name: "Namaha Shetty",
        designation: "UI/UX Designer",
        designationType: "Design",
        social: [
          {
            icon: "Website",
            href: "https://www.namahashetty.com",
          },
          {
            icon: "LinkedIn",
            href: "https://www.linkedin.com/in/namahashetty/",
          },
        ],
      },
      {
        image: "/TeamSection/akhlak.png",
        name: "Akhlak Hossain",
        designation: "UI Developer",
        designationType: "Developer",
        social: [
          {
            icon: "LinkedIn",
            href: "https://www.linkedin.com/in/akhlakhossainjim/",
          },
          {
            icon: "GitHub",
            href: "http://github.com/Akhlak-Hossain-Jim",
          },
          {
            icon: "Website",
            href: "http://ahjim.com/",
          },
        ],
      },
      {
        image: "/TeamSection/ankit.png",
        name: "Ankit Kumar",
        designation: "Blockchain Developer",
        designationType: "Founding",
        social: [
          {
            icon: "LinkedIn",
            href: "https://www.linkedin.com/in/0xankit",
          },
          {
            icon: "Twitter",
            href: "https://mobile.twitter.com/me_0xankit",
          },
          {
            icon: "GitHub",
            href: "https://github.com/0xankit",
          },
        ],
      },
      {
        image: "/TeamSection/aditya.png",
        name: "Aditya Nalini",
        designation: "NFT Strategist",
        designationType: "Developer",
        social: [
          {
            icon: "LinkedIn",
            href: "https://www.linkedin.com/in/adinalini",
          },
          {
            icon: "Twitter",
            href: "https://twitter.com/adinalini",
          },
          {
            icon: "GitHub",
            href: "https://github.com/adinalini",
          },
        ],
      },
      {
        image: "/TeamSection/rohit.png",
        name: "Rohit Sharma",
        designation: "Creators Communications and Integrations",
        designationType: "Developer",
        social: [
          {
            icon: "Twitter",
            href: "https://twitter.com/SharmaJiKaSon1",
          },
          {
            icon: "Website",
            href: "https://www.instagram.com/schoolboy_sharma",
          },
        ],
      },
    ],
  };
  const teamSectionOptionStyles = {
    background: "transparent",
    borderRadius: "12px",
    maxWidth: 227,
    height: "100%",
    boxShadow: "none",
    padding: "0",
    textAlign: { xs: "center", md: "left" },
    display: "flex",
    flexDirection: "column",
    margin: { xs: "auto", md: "0" },
  };
  const teamSectionLinkStyles = {
    color: "primary.light",
    "&:hover": {
      color: "primary.main",
    },
  };
  const socialProofSectionConfigData = {
    textAlign: "center",
    title: "Featured In",
    titleComponent: "",
    titleVariant: "h1",
    description:
      "A quick look into the social proof aspect surrounding AssetMantle to get the bearings of its wide adoption factor",
    descriptionStyle: { maxWidth: "min(836px, 100%)", margin: "0 auto" }, // object of styles or false
    features: [
      // object template
      // {
      //   title: "",
      //   image: "",
      //   link: "",
      // },
      {
        title: "yahoo finance",
        image: "/SocialProofSection/yahoo_finance.png",
        link: "https://finance.yahoo.com/news/assetmantle-launches-long-awaited-mainnet-150000066.html",
      },
      {
        title: "coinquora",
        image: "/SocialProofSection/coinquora.png",
        link: "https://coinquora.com/avigation-ai-collabs-with-assetmantle-to-revamp-nfts-via-ai-integration/",
      },
      {
        title: "digitaljournal",
        image: "/SocialProofSection/digitaljournal.png",
        link: "https://www.digitaljournal.com/pr/assetmantle-launches-its-long-awaited-mainnet",
      },
      {
        title: "investing.com",
        image: "/SocialProofSection/investing.png",
        link: "https://m.investing.com/news/cryptocurrency-news/avigation-ai-collabs-with-assetmantle-to-revamp-nfts-via-ai-integration-2820215?ampMode=1",
      },
      {
        title: "techbullion",
        image: "/SocialProofSection/techbullion.png",
        link: "https://techbullion.com/talking-nfts-with-assetmantle-founder-deepanshu-tripathi/",
      },
    ],
  };
  const socialProofSectionOptionContainerStyles = {
    display: "flex",
    alignItems: "center",
    justifyContent: { xs: "center", md: "space-around" },
    flexWrap: "wrap",

    pt: 10,
  };

  return {
    props: {
      heroSectionConfigData,
      heroSectionStyle,
      featureSectionConfigData,
      featureSectionOptionContainerStyles,
      featureSectionOptionContainerStyleClasses,
      featureSectionOptionStyles,
      diverseActorSectionConfigData,
      gallerySectionConfigData,
      gallerySectionOptionStyle,
      infoSectionConfigData,
      infoSectionListStyle,
      chainSectionConfigData,
      featuredCreatorConfig,
      featuredNFTConfig,
      fastAndEasySectionConfigData,
      fastAndEasySectionOptionContainerStyleClasses,
      fastAndEasySectionOptionContainerStyles,
      fastAndEasySectionOptionStyles,
      initiativeSectionConfigData,
      initiativeSectionListStyle,
      universeSectionRightSubSectionData,
      universeSectionLeftSubSectionData,
      universeSectionHeaderLogoStyles,
      teamSectionConfigData,
      teamSectionOptionStyles,
      teamSectionLinkStyles,
      socialProofSectionConfigData,
      socialProofSectionOptionContainerStyles,
    },
  };
}
