import { connect } from "react-redux";
import Side from "./Side";

import { closeEditDialog } from "../../../../store/slice/dialogController.slice";
import { resetValidate } from "../../../../store/slice/validate.slice";

const mapDispatchToProps = dispatch => ({
  closeEditDialog: () => dispatch(closeEditDialog()),
  resetValidate: () => dispatch(resetValidate())
});

const mapStateToProps = state => ({
  detailDialogData: state.dialogController.detailDialogData
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Side);
