import React from "react";
import Dialog from "@material-ui/core/Dialog";
import X from "../../assets/svgComponents/X";

const ClassDialog = props => {
  return (
    <Dialog
      onClose={props.handleClose}
      aria-labelledby="dialog"
      open={props.open}
    >
      <div className="cDialog">
        <div className="cTitle">
          <div className="title">{props.dialogName}</div>
          <div className="cXBtn" onClick={props.handleClose}>
            <X height={12} width={12} fill="#fff" />
          </div>
        </div>
        <div className="cDialogContent">{props.content}</div>
        <div className="cDialogFooter">
          {props.footer}
        </div>
      </div>
    </Dialog>
  );
};

export default ClassDialog;
