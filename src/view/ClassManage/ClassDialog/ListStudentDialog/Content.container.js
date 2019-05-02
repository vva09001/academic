import { connect } from "react-redux";
import Content from "./Content";
import { classStudent } from "../../../../store/slice/class.slice";
import { openChangeClassConfirm } from "../../../../store/slice/notice.slice";

const mapDispatchToProps = dispatch => ({
  classStudent: classId => dispatch(classStudent(classId)),
  openChangeClassConfirm: (studentData) =>
    dispatch(openChangeClassConfirm(studentData))
});

const mapStateToProps = state => ({
  loadingStudent: state.classes.loadingStudent,
  listStudent: state.classes.listStudent,
  classId: state.dialogController.classId,
  posting: state.classes.posting
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Content);
