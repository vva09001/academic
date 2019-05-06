import { connect } from "react-redux";
import Footer from "./Footer";
import { closeListAddStudentDialog } from "../../../../store/slice/dialogController.slice";
import { resetState } from "../../../../store/slice/class.slice";

const mapDispatchToProps = dispatch => ({
  closeListAddStudentDialog: () => dispatch(closeListAddStudentDialog()),
  resetState: () => dispatch(resetState())
});

const mapStateToProps = state => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Footer);
