import React, { Fragment } from "react";

const Button = ({ className, text }) => (
  <Fragment>
    <button className={className} >
      {text}
    </button>
  </Fragment>
);

export default Button;
