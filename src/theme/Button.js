import React from "react";

export const ButtonClick = ({ classes, onClick, disabled, title }) => {
  return (
    <button className={classes} onClick={onClick} disabled={disabled}>
      {title}
    </button>
  );
};
