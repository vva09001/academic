import { connect } from "react-redux";
import Side from "./Side";
import { closeDetailDialog } from "../../../../store/slice/dialogController.slice";

const mapDispatchToProps = dispatch => ({
  closeDetailDialog: () => dispatch(closeDetailDialog())
});

const mapStateToProps = state => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Side);
