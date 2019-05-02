import { connect } from "react-redux";
import ListAddStudent from "./ListAddStudent";
import { closeListAddStudentDialog } from "../../../../store/slice/dialogController.slice";
import * as notice from "../../../../store/slice/notice.slice";
import { addStudentIntoClass } from "../../../../store/slice/class.slice";

const mapDispatchToProps = dispatch => ({
  closeListAddStudentDialog: () => dispatch(closeListAddStudentDialog()),
  closeAddStudentConfirm: () => dispatch(notice.closeAddStudentConfirm()),
  addStudentIntoClass: (classId, studentId, endDate) => dispatch(addStudentIntoClass(classId, studentId, endDate)),
  openAddStudentResult: () => dispatch(notice.openAddStudentResult()),
  closeAddStudentResult: () => dispatch(notice.closeAddStudentResult())
});

const mapStateToProps = state => ({
  isListAddStudentDialogOpen: state.dialogController.isListAddStudentDialogOpen,
  isAddStudentConfirmOpen: state.notice.isAddStudentConfirmOpen,
  isAddStudentResultOpen: state.notice.isAddStudentResultOpen,
  classId: state.dialogController.classId,
  endDate: state.dialogController.endDate,
  studentId: state.notice.studentId,
  isPostingSuccess: state.classes.isPostingSuccess
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ListAddStudent);
