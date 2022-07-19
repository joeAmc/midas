import React from "react";
import "../Collections/collections.css";
import Ring from "../../assets/midas rings.jpg";
import Earring from "../../assets/midas earrings.jpg";

const Collections = () => {
  return (
    <section id="collections">
      <div className="spacer"></div>
      <div className="rings">
        <img src={Ring} alt="" />
      </div>
      <div className="earrings">
        <img src={Earring} alt="" />
      </div>
    </section>
  );
};

export default Collections;
