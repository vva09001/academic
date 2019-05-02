import React from "react";
import { ButtonClick } from "../../../../theme/Button";

const Footer = props => {
  const closeAddDialog = () => {
    props.closeAddDialog();
    props.resetValidate();
  };
  return (
    <React.Fragment>
      <ButtonClick
        title="Thêm mới"
        classes="saveDialogBtn saveBtn"
        onClick={props.openConfirmNotice}
      />
      <ButtonClick
        title="Đóng"
        onClick={closeAddDialog}
        classes="closeDialogBtn closeBtn"
      />
    </React.Fragment>
  );
};

export default Footer;
