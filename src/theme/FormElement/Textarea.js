import React from "react";

const Textarea = ({
  classes,
  labelName,
  name,
  onChange,
  value,
  rows,
  onBlur,
  readOnly
}) => {
  return (
    <React.Fragment>
      <div className={classes}>
        <label>{labelName}</label>
        <textarea
          name={name}
          onChange={onChange}
          value={value}
          rows={rows}
          readOnly={readOnly}
          onBlur={onBlur}
        />
      </div>
    </React.Fragment>
  );
};

export default Textarea;
