import React from "react";
import "../Cards/cards.css";
import triangle from "../../assets/triangle ring.jpg";
import { FaShoppingBag } from "react-icons/fa";

const Cards = () => {
  const ringEg = {
    title: " Triangular stackable ring",
    // img: {triangle};
    material: "gold filled",
    price: 35,
    url: "https://www.etsy.com/uk/listing/1246783193/gold-filled-ring-triangular-stackable?click_key=e0b71b463e8be4ff37724f03a7b33c1cd8e7c530%3A1246783193&click_sum=1d27a000&ref=shop_home_active_6&frs=1",
  };

  return (
    <div>
      <div className="spacer-card"></div>
      <div className="cards-container">
        <a href={ringEg.url}>
          <div className="card">
            <div className="card-img">
              <img src={triangle} alt="" />
            </div>
            <div className="card-text">
              <div className="top-text">
                <h1>{ringEg.title}</h1>
                <a href={ringEg.url}>
                  <FaShoppingBag />
                </a>
              </div>
              <div className="bottom-text">
                <h5>{`£${ringEg.price}`}</h5>
                {/* <h5>{`£${ringEg.price}`}</h5> */}
              </div>
            </div>
          </div>
        </a>
        <div className="card">
          <div className="card-img">
            <img src={triangle} alt="" />
          </div>
          <div className="card-text">
            <div className="top-text">
              <h1>{ringEg.title}</h1>
              <a href={ringEg.url}>
                <FaShoppingBag />
              </a>
            </div>
            <div className="bottom-text">
              <h5>{`£${ringEg.price}`}</h5>
              {/* <h5>{`£${ringEg.price}`}</h5> */}
            </div>
          </div>
        </div>
        <div className="card">
          <div className="card-img">
            <img src={triangle} alt="" />
          </div>
          <div className="card-text">
            <div className="top-text">
              <h1>{ringEg.title}</h1>
              <a href={ringEg.url}>
                <FaShoppingBag />
              </a>
            </div>
            <div className="bottom-text">
              <h5>{`£${ringEg.price}`}</h5>
              {/* <h5>{`£${ringEg.price}`}</h5> */}
            </div>
          </div>
        </div>
        <div className="card">
          <div className="card-img">
            <img src={triangle} alt="" />
          </div>
          <div className="card-text">
            <div className="top-text">
              <h1>{ringEg.title}</h1>
              <a href={ringEg.url}>
                <FaShoppingBag />
              </a>
            </div>
            <div className="bottom-text">
              <h5>{`£${ringEg.price}`}</h5>
              {/* <h5>{`£${ringEg.price}`}</h5> */}
            </div>
          </div>
        </div>
        <div className="card">
          <div className="card-img">
            <img src={triangle} alt="" />
          </div>
          <div className="card-text">
            <div className="top-text">
              <h1>{ringEg.title}</h1>
              <a href={ringEg.url}>
                <FaShoppingBag />
              </a>
            </div>
            <div className="bottom-text">
              <h5>{`£${ringEg.price}`}</h5>
              {/* <h5>{`£${ringEg.price}`}</h5> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
