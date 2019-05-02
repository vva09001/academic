import { connect } from "react-redux";
import Footer from "./Footer";
import { openListAddStudentDialog } from "../../../../store/slice/dialogController.slice";

const mapDispatchToProps = dispatch => ({
  openListAddStudentDialog: () => dispatch(openListAddStudentDialog())
});

const mapStateToProps = state => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Footer);
