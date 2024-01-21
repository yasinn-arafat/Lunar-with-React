import React from "react";
import Button from "../CommonComponent/Button";
import { MdKeyboardArrowRight } from "react-icons/md";
import "./Strategy.css";

const Strategy = () => {
  return (
    <>
      <div className="strategy">
        <div className="container">
          <div className="strategyWrapper">
            <div className="strategy__left">
              <h3 className="strategy__title">Why Lunar Strategy?</h3>
              <p className="strategy__details">
                To get customers, it's imperative to be seen by the mass. Every
                successful company is unique and needs contrasting digital
                marketing strategies. Book a meeting with us and we will help
                you find the correct strategy for your company.
              </p>
              <Button btnStyle="strategy__btn">
                Book Free Meeting <MdKeyboardArrowRight className="book__btn" />
              </Button>
            </div>
            <div className="strategy__right">
              <picture>
                <img
                  src="../src/assets/Strategy-img.png"
                  alt="../src/assets/Strategy-img.png"
                  className="strategy__img"
                />
              </picture>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Strategy;
