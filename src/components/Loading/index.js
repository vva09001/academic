import React from "react";
import Loader from "react-loader-spinner";

const Loading = ({ type, color, height, width }) => {
  return (
    <div className="loading">
      <Loader type={type} color={color} height={height} width={width} />
    </div>
  );
};

export default Loading;
