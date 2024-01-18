import React from "react";
import Button from "../CommonComponent/Button";
import "./Marketing.css";

const Marketing = () => {
  return (
    <>
      <div className="marketing">
        <div className="container">
          <div className="marketingWraper">
            <div className="marteing__text">
              <h2 className="marketing__title">
                Book A Free Digital Marketing Consultation
              </h2>
            </div>
            <div className="marketing__form">
              <input
                type="email"
                placeholder="Your Email"
                className="marketing__email"
              />
              <Button btnStyle="form__btn">Book my free meeting</Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Marketing;
