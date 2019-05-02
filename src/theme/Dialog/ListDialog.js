import React from "react";
import Dialog from "@material-ui/core/Dialog";
import X from "../../assets/svgComponents/X";

const ListStudentDialog = props => {
  return (
    <Dialog
      onClose={props.handleClose}
      aria-labelledby="dialog"
      open={props.open}
    >
      <div className="lsDialog">
        <div className="lsTitle">
          <div className="title">{props.dialogName}</div>
          <div className="XBtn" onClick={props.handleClose}>
            <X height={12} width={12} fill="#fff" />
          </div>
        </div>
        <div className="lsDialogContent">{props.content}</div>
        <div className="lsDialogFooter">{props.footer}</div>
      </div>
    </Dialog>
  );
};

export default ListStudentDialog;
