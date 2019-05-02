import React from "react";

import Input from "../../../../theme/Input";
import { ButtonClick } from "../../../../theme/Button";

const Side = props => {
  const handleClose = () => {
    props.closeEditDialog && props.closeEditDialog();
    props.resetValidate && props.resetValidate();
  };

  return (
    <React.Fragment>
      <div className="profileAvatar">
        <img src="" alt="" />
      </div>
      <Input value={props.detailDialogData ? props.detailDialogData.studentId : ""} readOnly={true} />
      <ButtonClick
        title="Chỉnh sửa"
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
