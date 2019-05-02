import React from "react";
import PropTypes from "prop-types";

import Dialog from "@material-ui/core/Dialog";
import { ButtonClick } from "../../theme/Button";

const ResultNotice = ({ handleClose, open, title }) => {
  return (
    <Dialog onClose={handleClose} aria-labelledby="success" open={open}>
      <div className="notice">
        <div className="noticeContent">{title}</div>
        <div className="noticeFooter">
          <ButtonClick
            classes="confirmBtn"
            onClick={handleClose}
            title="Xác nhận"
          />
        </div>
      </div>
    </Dialog>
  );
};

ResultNotice.propTypes = {
  open: PropTypes.bool
};

ResultNotice.defaultProps = {
  open: false
};
export default ResultNotice;
