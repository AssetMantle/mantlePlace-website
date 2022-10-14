import React from "react";
import SocialIcons from "../components/SocialIcons";

export default function HeroSection({ heroSectionConfigData, sectionStyle }) {
  // contents of right sub-section
  const LeftSubSectionJSX = (
    <div className="d-flex flex-column align-items-center align-items-md-start gap-2">
      <h1
        className="text-center text-md-start h1"
        style={{ maxWidth: "399px" }}
      >
        {heroSectionConfigData.title}
      </h1>

      <h6
        className="text-center text-md-start subtitle1 text-primary "
        style={{ maxWidth: "399px" }}
      >
        {heroSectionConfigData.subtitle}
      </h6>

      <div className="d-flex flex-wrap justify-content-center justify-content-md-start gap-2 pt-2 pb-4">
        {React.Children.toArray(
          heroSectionConfigData.buttons.map((button) => (
            <a
              className={`btn d-flex align-items-center gap-2 ${button.variant}`}
              href={button.href}
              target="_blank"
            >
              {button.label} <i className={`bi ${button.endIcon}`}></i>
            </a>
          ))
        )}
      </div>
      <hr
        className="bg-theme-white rounded-4"
        style={{ height: "2px", width: "90%", opacity: "1" }}
      />
      <SocialIcons />
    </div>
  );

  // contents of left sub-section
  const RightSubSectionJSX = (
    // Hero Image
    <img
      src={heroSectionConfigData.image}
      alt="hero_image"
      style={{
        width: "95%",
        height: "auto",
      }}
    />
  );

  return (
    <section
      className={sectionStyle}
      id={
        heroSectionConfigData.title &&
        heroSectionConfigData.title.toLowerCase().replaceAll(" ", "-")
      }
    >
      <div className="container-lg">
        <div className="row align-items-center">
          {/* Left Sub-section */}
          <div className="col-12 col-md-6 py-10" py={10}>
            {LeftSubSectionJSX}
          </div>

          {/* Right Sub-section */}
          <div className="col-12 col-md-6">{RightSubSectionJSX}</div>
        </div>
      </div>
    </section>
  );
}
