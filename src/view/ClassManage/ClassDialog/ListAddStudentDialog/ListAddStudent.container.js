import { connect } from "react-redux";
import ListAddStudent from "./ListAddStudent";
import { closeListAddStudentDialog } from "../../../../store/slice/dialogController.slice";
import * as notice from "../../../../store/slice/notice.slice";
import {
  addStudentIntoClass,
  resetState
} from "../../../../store/slice/class.slice";
import {
  resetValidate,
  validateOutDate
} from "../../../../store/slice/validate.slice";

const mapDispatchToProps = dispatch => ({
  closeListAddStudentDialog: () => dispatch(closeListAddStudentDialog()),
  closeOutDateInput: () => dispatch(notice.closeOutDateInput()),
  openAddStudentConfirm: () => dispatch(notice.openAddStudentConfirm()),
  closeAddStudentNoMainClassConfirm: () =>
    dispatch(notice.closeAddStudentNoMainClassConfirm()),
  closeAddStudentConfirm: () => dispatch(notice.closeAddStudentConfirm()),
  addStudentIntoClass: (classId, studentData, outDate) =>
    dispatch(addStudentIntoClass(classId, studentData, outDate)),
  openAddStudentResult: () => dispatch(notice.openAddStudentResult()),
  closeAddStudentResult: () => dispatch(notice.closeAddStudentResult()),
  resetState: () => dispatch(resetState()),
  resetValidate: () => dispatch(resetValidate()),
  validateOutDate: validatedOutDate =>
    dispatch(validateOutDate(validatedOutDate))
});

const mapStateToProps = state => ({
  isListAddStudentDialogOpen: state.dialogController.isListAddStudentDialogOpen,
  isOutDateInputOpen: state.notice.isOutDateInputOpen,
  isAddStudentNoMainClassConfirmOpen:
    state.notice.isAddStudentNoMainClassConfirmOpen,
  isAddStudentConfirmOpen: state.notice.isAddStudentConfirmOpen,
  isAddStudentResultOpen: state.notice.isAddStudentResultOpen,
  classId: state.dialogController.classId,
  endDate: state.dialogController.endDate,
  studentData: state.notice.studentData,
  isPostingSuccess: state.classes.isPostingSuccess,
  validatedOutDate: state.validate.validatedOutDate,
  outDate_err: state.validate.outDate_err
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ListAddStudent);
