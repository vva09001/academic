import React from "react";
import PropTypes from "prop-types";
import Dialog from "@material-ui/core/Dialog";
import { ButtonClick } from "../../theme/Button";

const ChildForm = props => {
  return (
    <Dialog
      onClose={props.handleClose}
      aria-labelledby="childForm"
      open={props.open}
    >
      <div className="notice">
        <div className="noticeContent">{props.title}</div>
        <div className="noticeForm">{props.content}</div>
        <div className="noticeFooter">
          <ButtonClick
            classes="confirmBtn"
            onClick={props.confirmAction}
            title="Xác nhận"
          />
          <ButtonClick
            classes="cancelBtn"
            onClick={props.handleClose}
            title="Hủy bỏ"
          />
        </div>
      </div>
    </Dialog>
  );
};

ChildForm.propTypes = {
  open: PropTypes.bool
};
ChildForm.defaultProps = {
  open: false
};

export default ChildForm;
