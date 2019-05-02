import { connect } from "react-redux";
import Side from "./Side";
import { closeAddDialog } from "../../../../store/slice/dialogController.slice";
import { resetValidate } from "../../../../store/slice/validate.slice";

const mapDispatchToProps = dispatch => ({
  closeAddDialog: () => dispatch(closeAddDialog()),
  resetValidate: () => dispatch(resetValidate())
});

const mapStateToProps = state => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Side);
