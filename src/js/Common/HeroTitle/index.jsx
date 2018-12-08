import React from "react";
import { string } from "prop-types";

const HeroTitle = ({ name, section }) => {
  let lineClass;
  let circleClass;
  let dotClass;
  let wraperClass = "hero-wraper";
  let dots = true;
  if (section === "1") {
    // with Two dots
    lineClass = "hero-line2 grey-line";
    circleClass = "c-1  grey-circle";
    dotClass = "";
  }else
  if (section === "2") {
    // with Three dots
    lineClass = "hero-line2";
    circleClass = "c-1";
    dotClass = "dot1";
  }else{
    // without dots section and Text in center
    dots = false;
    wraperClass = "hero-wraper h1-center";
  }

  return (
    <div id="HeroTitle">
      <div className={wraperClass}>
        <h1>{name}</h1>
      </div>
      {dots && (
        <div>
          <div className="hero-lines">
            <div className="hero-line1" />
            <div className={lineClass} />
          </div>
          <div className="hero-dots">
            <div className="c-1">
              <div className="dot1" />
            </div>
            <div className="c-1">
              <div className="dot1" />
            </div>
            <div className={circleClass}>
              <div className={dotClass} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

HeroTitle.propTypes = {
  name: string.isRequired,        // Title of the component
  section: string.isRequired      // select 0, 1 , 2 to use the active dots structure
};

export default HeroTitle;
