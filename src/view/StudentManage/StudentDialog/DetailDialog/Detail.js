import React from "react";

import StudentDialog from "../../../../theme/Dialog/StudentDialog";
import Side from "./Side.container";
import Content from "./Content.container";

const Detail = props => {
  if (props.detailDialogData !== null) {
    let side = <Side data={props.detailDialogData} />;
    let content = <Content data={props.detailDialogData} />;
    return (
      <StudentDialog
        handleClose={props.closeDetailDialog}
        open={props.isDetailDialogOpen}
        side={side}
        content={content}
        dialogName="Thông tin chi tiết sinh viên"
      />
    );
  }
  return null;
};

export default Detail;
