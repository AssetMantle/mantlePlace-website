import * as React from "react";
import DiverseActor from "../views/DiverseActor";
import FastAndEasySetup from "../views/FastAndEasySetup";
import FeaturedCreators from "../views/FeaturedCreators";
import FeaturedNFT from "../views/FeaturedNFT";
import FeatureSection from "../views/FeatureSection";
import Fractionalized from "../views/Fractionalized";
import GallerySection from "../views/GallerySection";
import HeroSection from "../views/HeroSection";

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
      featuredCreatorConfig,
      featuredNFTConfig,
      fastAndEasySectionConfigData,
      fastAndEasySectionOptionContainerStyleClasses,
      fastAndEasySectionOptionContainerStyles,
      fastAndEasySectionOptionStyles,
      initiativeSectionConfigData,
      initiativeSectionListStyle,
    },
  };
}
