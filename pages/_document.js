import Document, { Head, Html, Main, NextScript } from "next/document";
import * as React from "react";
import theme from "../config/theme";

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          {/* PWA primary color */}
          <meta name="theme-color" content="#111111" />
          {/* open graphs start */}
          <meta property="og:site_name" content="AssetMantle" />
          <meta property="og:url" content="https://assetmantle.one" />
          <meta property="al:web:url" content="https://assetmantle.one" />
          <meta property="og:image" content="/og.png" />
          <meta property="og:title" content="AssetMantle" />
          <meta
            property="og:description"
            content="AssetMantle is a community-first platform for NFT creators and collectors. Use AssetMantle to create your own NFT store or to expand your collection of NFTs."
          />
          {/* open graphs end */}

          {/* bootstrap */}
          <link
            href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css"
            rel="stylesheet"
            integrity="sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi"
            crossorigin="anonymous"
          />
        </Head>
        <body
          style={{
            backgroundImage: "url('/images/Background_tile.webp')",
            backgroundRepeat: "repeat-y",
            // backgroundPosition: "center top",
            backgroundSize: "100%",
          }}
        >
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
