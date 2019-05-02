import React from "react";

const MenuItem = props => {
  return (
    <React.Fragment>
      <li className={props.classes} onClick={props.onClick}>
        <span>{props.title}</span>
      </li>
    </React.Fragment>
  );
};

export default MenuItem;
