import React from "react";
import { ButtonClick } from "../../../../theme/Button";

const Footer = props => {
  const closeListAddStudentDialog = () => {
    props.closeListAddStudentDialog();
    props.resetState();
  }
  return (
    <React.Fragment>
      <ButtonClick
        title="Đóng"
        classes="lsBtn"
        onClick={closeListAddStudentDialog}
      />
    </React.Fragment>
  );
};

export default Footer;
