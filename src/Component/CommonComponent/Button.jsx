import React from "react";

const Button = ({ btnStyle, btnContent }) => {
  return (
    <>
      <button className={btnStyle}>{btnContent}</button>
    </>
  );
};

export default Button;
