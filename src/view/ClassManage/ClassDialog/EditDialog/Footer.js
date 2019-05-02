import React from "react";
import { ButtonClick } from "../../../../theme/Button";

const Footer = props => {
  const closeEditClassDialog = () => {
    props.closeEditClassDialog();
    props.resetValidate();
  };
  return (
    <React.Fragment>
      <ButtonClick
        title="Chỉnh sửa"
        classes="saveDialogBtn saveBtn"
        onClick={props.openConfirmNotice}
      />
      <ButtonClick
        title="Đóng"
        onClick={closeEditClassDialog}
        classes="closeDialogBtn closeBtn"
      />
    </React.Fragment>
  );
};

export default Footer;
