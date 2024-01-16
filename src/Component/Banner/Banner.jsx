import React from "react";
import "./Banner.css";

const Banner = () => {
  return (
    <>
      <div className="banner">
        <div className="container">
          <div className="bannerwraper">
            <div className="bannerLeft">
              <h1 className="banner__title">
                We help you grow your
                <span className="title__span"> conversions.</span>
              </h1>
              <p className="banner__detailes">
                Featured in leading publications around the world
              </p>
              <div className="banner__icons">
                <div>
                  <picture>
                    <img
                      src="../src/assets/Market.png"
                      alt="../src/assets/Market.png"
                    />
                  </picture>
                </div>
                <div>
                  <picture>
                    <img
                      src="../src/assets/Saas.png"
                      alt="../src/assets/Saas.png"
                    />
                  </picture>
                </div>
                <div>
                  <picture>
                    <img
                      src="../src/assets/Fiver.png"
                      alt="../src/assets/Fiver.png"
                    />
                  </picture>
                </div>
              </div>
            </div>
            <div className="bannerRight">
              <picture>
                <img
                  src="../src/assets/Banner.png"
                  alt="../src/assets/Banner.png"
                  className="banner__img"
                />
              </picture>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
