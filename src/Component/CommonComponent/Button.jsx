import React from "react";

const Button = ({ btnStyle, children }) => {
  return (
    <>
      <button className={btnStyle}>{children}</button>
    </>
  );
};

export default Button;
