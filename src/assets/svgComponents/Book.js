import React from "react";

const SvgBook = props => (
  <svg
    className={props.classes}
    height={props.height}
    viewBox="-60 0 512 512"
    width={props.width}
    onClick={props.onClick}
  >
    <path
      d="M55.898 0C25.074 0 0 25.074 0 55.898v400.204C0 486.926 25.074 512 55.898 512h336.45V0zm0 30h306.45v51.797H55.898C41.618 81.797 30 70.18 30 55.898S41.617 30 55.898 30zm173.786 81.797h68.664v91.324l-34.332-14.383-34.332 14.383zM30 456.102V105.41a55.517 55.517 0 0 0 25.898 6.387h17.118V482H55.898C41.618 482 30 470.383
30 456.102zM362.348 482H103.016V111.797h96.668v136.418l64.332-26.95 64.332 26.95V111.797h34zm0 0"
      fill={props.fill}
    />
    <path
      d="M168.348 350.668h129v30h-129zm0 0M168.348 408.668h129v30h-129zm0 0"
      fill={props.fill}
    />
  </svg>
);

export default SvgBook;
