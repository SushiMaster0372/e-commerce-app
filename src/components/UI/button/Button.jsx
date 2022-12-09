import React from "react";
import classes from "./Button.module.scss";

const Button = ({ children }) => {
  return (
    <button className={classes.btn}>
      <span>{children}</span>
    </button>
  );
};

export default Button;
