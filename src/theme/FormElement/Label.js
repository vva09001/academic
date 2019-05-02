import React from "react";
// import Input from "../Input";

const Label = ({
  classes,
  labelName,
  placeholder,
  onChange,
  value,
  type,
  readOnly,
  name,
  onBlur
}) => {
  return (
    <div className={classes}>
      <label>{labelName}</label>
      <input
        type={type}
        onChange={onChange}
        placeholder={placeholder}
        value={value}
        readOnly={readOnly}
        name={name}
        onBlur={onBlur}
      />
    </div>
  );
};

export default Label;
