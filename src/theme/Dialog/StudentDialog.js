import React from "react";
import Dialog from "@material-ui/core/Dialog";

import X from "../../assets/svgComponents/X";

const StudentDialog = ({ handleClose, open, side, content, dialogName }) => {
  return (
    <Dialog onClose={handleClose} aria-labelledby="dialog" open={open}>
      <div className="sDialog">
        <div className="sSideDialog">{side}</div>
        <div className="sDialogBody">
          <div className="sDialogTitle">
            <div className="sTitle">{dialogName}</div>
            <div className="sXBtn" onClick={handleClose}>
              <X height={12} width={12} fill="#fff" />
            </div>
          </div>
          <div className="sDialogContent">{content}</div>
        </div>
      </div>
    </Dialog>
  );
};

export default StudentDialog;
