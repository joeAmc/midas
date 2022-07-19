import React from "react";
import "../Collections/collections.css";
import { Link } from "react-router-dom";
import Ring from "../../assets/midas rings.jpg";
import Earring from "../../assets/midas earrings.jpg";

const Collections = () => {
  return (
    <section
      data-aos="fade"
      // data-aos-anchor-placement="top-center"

      data-aos-duration="700"
      // data-aos-offset="100"
      id="collections"
    >
      <div className="spacer"></div>
      {/* <h2>See Collection</h2> */}
      <Link to="/rings">
        <div className="rings">
          <img src={Ring} alt="" />
        </div>
      </Link>
      <Link to="/earrings">
        <div className="earrings">
          <img src={Earring} alt="" />
        </div>
      </Link>
    </section>
  );
};

export default Collections;
