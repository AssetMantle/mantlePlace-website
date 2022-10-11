import React from "react";
import NextLink from "./NextLink";

const TitleAndSubtitle = (props) => {
  const {
    title = null,
    subTitle = null,
    textAlign = "center",
    isContent = false,
  } = props;
  const SectionConfigData = {
    title,
    titleVariant: isContent ? "h2" : "h1",
    titleColor: "secondary.light",
    subTitle,
    subTitleVariant: "subtitle2",
    subTitleColor: "secondary.light",
    subTitleStyle: { maxWidth: "min(836px, 100%)" }, // object of styles or false
  };

  return (
    <div
      className="d-flex flex-column align-items-center"
      style={{ textAlign }}
      id={
        title &&
        title
          .toLowerCase()
          .replaceAll(" ", "-")
          .replace(/[^a-z-]/g, "")
      }
    >
      {SectionConfigData.title && (
        <h1
          className="h1"
          style={{ color: SectionConfigData.titleColor || "inherit" }}
        >
          <NextLink
            color="inherit"
            underline="hover"
            href={`#${
              SectionConfigData.title &&
              SectionConfigData.title
                .toLowerCase()
                .replaceAll(" ", "-")
                .replace(/[^a-z-]/g, "")
            }`}
          >
            {SectionConfigData.title}
          </NextLink>
        </h1>
      )}

      {SectionConfigData.subTitle && (
        <p
          className="subtitle1"
          style={{
            color: SectionConfigData.titleColor || "inherit",
            ...SectionConfigData.subTitleStyle,
          }}
        >
          {SectionConfigData.subTitle}
        </p>
      )}
    </div>
  );
};

export default TitleAndSubtitle;
