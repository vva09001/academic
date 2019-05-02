import React from "react";
import PropTypes from "prop-types";

const DataBox = ({ title, value }) => {
  return (
    <div className="dataBox">
      <p id="title">{title}</p>
      <p>{value}</p>
    </div>
  );
};

DataBox.propTypes = {
  title: PropTypes.string,
  value : PropTypes.number
};
export default DataBox;
