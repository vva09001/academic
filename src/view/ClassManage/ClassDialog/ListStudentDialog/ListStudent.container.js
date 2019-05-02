import { connect } from "react-redux";
import ListStudent from "./ListStudent";
import { closeListStudentDialog } from "../../../../store/slice/dialogController.slice";
import {
  closeChangeClassConfirm,
  openChangeClassResult,
  closeChangeClassResult
} from "../../../../store/slice/notice.slice";
import { changeStudentClass } from "../../../../store/slice/class.slice";

const mapDispatchToProps = dispatch => ({
  closeListStudentDialog: () => dispatch(closeListStudentDialog()),
  closeChangeClassConfirm: () => dispatch(closeChangeClassConfirm()),
  openChangeClassResult: () => dispatch(openChangeClassResult()),
  closeChangeClassResult: () => dispatch(closeChangeClassResult()),
  changeStudentClass: (studentId, classId, endDate) =>
    dispatch(changeStudentClass(studentId, classId, endDate))
});

const mapStateToProps = state => ({
  isListStudentDialogOpen: state.dialogController.isListStudentDialogOpen,
  studentId: state.notice.studentId,
  classId: state.dialogController.classId,
  endDate: state.dialogController.endDate,
  isPostingSuccess: state.classes.isPostingSuccess,
  isChangeClassResultOpen: state.notice.isChangeClassResultOpen,
  isChangeClassConfirmOpen: state.notice.isChangeClassConfirmOpen
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ListStudent);
