import React from "react";
import { ButtonClick } from "../../../../theme/Button";

const Footer = props => {
  return (
    <React.Fragment>
      <ButtonClick
        title="Đóng"
        classes="lsBtn"
        onClick={() => props.closeListAddStudentDialog()}
      />
    </React.Fragment>
  );
};

export default Footer;
