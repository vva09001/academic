import React from "react";

const Select = ({ classes, title, value, onChange, name, onBlur, list }) => {
  return (
    <React.Fragment>
      <div className={classes}>
        <label>{title}</label>
        <select value={value} onChange={onChange} name={name} onBlur={onBlur}>
          {list.map(e => {
            return (
              <option key={e.value} value={e.value}>
                {e.label}
              </option>
            );
          })}
        </select>
      </div>
    </React.Fragment>
  );
};

export default Select;
