import React from "react";
import PropTypes from "prop-types";
import Dialog from "@material-ui/core/Dialog";
import { ButtonClick } from "../../theme/Button";

const ConfirmDialog = ({ handleClose, confirmAction, open, title }) => {
  return (
    <Dialog onClose={handleClose} aria-labelledby="confirm" open={open}>
      <div className="notice">
        <div className="noticeContent">{title}</div>
        <div className="noticeFooter">
          <ButtonClick
            classes="confirmBtn"
            onClick={confirmAction}
            title="Xác nhận"
          />
          <ButtonClick
            classes="cancelBtn"
            onClick={handleClose}
            title="Hủy bỏ"
          />
        </div>
      </div>
    </Dialog>
  );
};

ConfirmDialog.propTypes = {
  open: PropTypes.bool
};
ConfirmDialog.defaultProps = {
  open: false
};

export default ConfirmDialog;
