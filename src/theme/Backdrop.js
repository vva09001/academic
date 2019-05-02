import React from "react";
import PropTypes from "prop-types";

const Backdrop = ({ closeBackdrop }) => (
  <div className="backdrop" onClick={closeBackdrop} />
);

Backdrop.propTypes = {
  onClick: PropTypes.func
};

export default Backdrop;
