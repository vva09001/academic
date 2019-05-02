import React from "react";
import PropTypes from "prop-types";

const Input = ({ classes, placeholder, onChange, value, type, readOnly, name, onBlur}) => {
  return (
    <input
      className={classes}
      type={type}
      onChange={onChange}
      placeholder={placeholder}
      value={value}
      readOnly={readOnly}
      name={name}
      onBlur={onBlur}
    />
  );
};

Input.propTypes = {
  classes: PropTypes.string,
  type: PropTypes.string,
  value: PropTypes.string,
  placeholder: PropTypes.string,
  onChange: PropTypes.func,
  readOnly: PropTypes.bool,
  name: PropTypes.string,
  onBlur: PropTypes.func,
};

export default Input;