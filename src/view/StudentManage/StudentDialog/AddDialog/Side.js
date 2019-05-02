import React from "react";

import { ButtonClick } from "../../../../theme/Button";

const Side = props => {
  const handleClose = () => {
    props.closeAddDialog && props.closeAddDialog();
    props.resetValidate && props.resetValidate();
  };
  return (
    <React.Fragment>
      <div className="profileAvatar">
        <img src="" alt="" />
      </div>
      <ButtonClick
        title="Thêm mới"
        classes="saveDialogBtn saveBtn"
        onClick={props.openConfirmNotice}
      />
      <ButtonClick
        title="Đóng"
        onClick={handleClose}
        classes="closeDialogBtn closeBtn"
      />
    </React.Fragment>
  );
};

export default Side;
