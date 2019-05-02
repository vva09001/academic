import { connect } from "react-redux";
import Footer from "./Footer";
import { closeListAddStudentDialog } from "../../../../store/slice/dialogController.slice";

const mapDispatchToProps = dispatch => ({
  closeListAddStudentDialog: () => dispatch(closeListAddStudentDialog())
});

const mapStateToProps = state => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Footer);
