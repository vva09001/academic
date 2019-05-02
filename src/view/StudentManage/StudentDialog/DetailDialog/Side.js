import React from "react";

import Input from "../../../../theme/Input";
import { ButtonClick } from "../../../../theme/Button";

const Side = props => {
  return (
    <React.Fragment>
      <div className="profileAvatar">
        <img src={props.data.image} alt="" />
      </div>
      <Input value={props.data.studentId} readOnly={true} />
      <ButtonClick
        title="Đóng"
        onClick={props.closeDetailDialog}
        classes="closeBtn"
      />
    </React.Fragment>
  );
};

export default Side;
