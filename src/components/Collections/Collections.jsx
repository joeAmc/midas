import React from "react";
import "../Collections/collections.css";
import { Link } from "react-router-dom";
import Ring from "../../assets/midas rings.jpg";
import Earring from "../../assets/midas earrings.jpg";
import { BsThreeDots } from "react-icons/bs";

const Collections = () => {
  return (
    <section
      data-aos="fade"
      // data-aos-anchor-placement="top-center"

      data-aos-duration="800"
      // data-aos-offset="100"
      id="collections"
    >
      <div className="spacer"></div>
      {/* <h2>See Collection</h2> */}
      {/* <div className="collections-container"> */}
      <div className="rings-container">
        <Link to="/rings">
          <div className="rings-h1">
            <h1>Rings</h1>
            <BsThreeDots />
          </div>
          <div className="rings">
            <img src={Ring} alt="" />
          </div>
        </Link>
      </div>
      <div className="earrings-container">
        <Link to="/earrings">
          <div className="earrings">
            <img src={Earring} alt="" />
          </div>
          <div className="earring-h1">
            <h1>Earrings</h1>
            <BsThreeDots />
          </div>
        </Link>
      </div>
      {/* </div> */}
    </section>
  );
};

export default Collections;
