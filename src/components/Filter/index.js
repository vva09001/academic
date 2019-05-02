import React from "react";
import PropTypes from "prop-types";

export const StudentStatus = ({ list, filter }) => {
  if (list.length > 0) {
    const listStatus = list.map(e => {
      return (
        <li key={e.ssId} onClick={() => filter(e.ssId)}>
          {e.ssName.split("")}
        </li>
      );
    });
    return (
      <React.Fragment>
        <ul className="filter studentStatus">
          <li onClick={() => filter("")}>Tất cả</li>
          {listStatus}
        </ul>
      </React.Fragment>
    );
  }
  return <React.Fragment />;
};

export const AllProgram = ({ list, filter }) => {
  if (list.length > 0) {
    const listProgram = list.map(e => {
      return (
        <li key={e.programmeId} onClick={() => filter(e.programmeId)}>
          {e.programmeName}
        </li>
      );
    });
    return (
      <React.Fragment>
        <ul className="filter allProgram">
          <li onClick={() => filter("")}>Tất cả</li>
          {listProgram}
        </ul>
      </React.Fragment>
    );
  }
  return <React.Fragment />;
};

export const ClassStatus = ({ list, filter }) => {
  if (list.length > 0) {
    const listStatus = list.map(e => {
      return (
        <li key={e.csId} onClick={() => filter && filter(e.csId)}>
          {e.csName}
        </li>
      );
    });
    return (
      <React.Fragment>
        <ul className="filter classStatus">
          <li onClick={() => filter("")}>Tất cả</li>
          {listStatus}
        </ul>
      </React.Fragment>
    );
  }
  return <React.Fragment />;
};

StudentStatus.propTypes = {
  list: PropTypes.array
};
StudentStatus.defaultProps = {
  list: []
};

AllProgram.propTypes = {
  list: PropTypes.array
};
AllProgram.defaultProps = {
  list: []
};

ClassStatus.propTypes = {
  ist: PropTypes.array
};
ClassStatus.defaultProps = {
  list: []
};
