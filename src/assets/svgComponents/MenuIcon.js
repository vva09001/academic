import React from "react";
import propTypes from "prop-types";

const MenuIcon = props => (
  <svg
    onClick={props.onClick}
    width={props.width}
    height={props.height}
    {...props}
    id={props.id}
  >
    <path d="M0,5 30,5" stroke={props.color} strokeWidth={props.elheight} />
    <path d="M0,14 30,14" stroke={props.color} strokeWidth={props.elheight} />
    <path d="M0,23 30,23" stroke={props.color} strokeWidth={props.elheight} />
  </svg>
);

MenuIcon.propTypes = {
  width: propTypes.number,
  height: propTypes.number,
  color: propTypes.string,
  elheight: propTypes.number,
  id: propTypes.string,
  onClick: propTypes.func
};

export default MenuIcon;
