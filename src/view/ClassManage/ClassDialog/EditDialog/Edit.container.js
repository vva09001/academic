import { connect } from "react-redux";
import Edit from "./Edit";
import { closeEditClassDialog } from "../../../../store/slice/dialogController.slice";
import * as validate from "../../../../store/slice/validate.slice";
import * as notice from "../../../../store/slice/notice.slice";
import { editClass } from "../../../../store/slice/class.slice";

const mapDispatchToProps = dispatch => ({
  resetValidate: () => dispatch(validate.resetValidate()),
  closeEditClassDialog: () => dispatch(closeEditClassDialog()),
  openErrorNotice: () => dispatch(notice.openErrorNotice()),
  closeErrorNotice: () => dispatch(notice.closeErrorNotice()),
  openEditConfirm: () => dispatch(notice.openEditConfirm()),
  closeEditConfirm: () => dispatch(notice.closeEditConfirm()),
  openEditResult: () => dispatch(notice.openEditResult()),
  closeEditResult: () => dispatch(notice.closeEditResult()),
  editClass: (form, classId) => dispatch(editClass(form, classId))
});

const mapStateToProps = state => ({
  isEditDialogOpen: state.dialogController.isEditDialogOpen,
  editClassDialogData: state.dialogController.editClassDialogData,
  validatedClassForm: state.validate.validatedClassForm,
  isErrorOpen: state.notice.isErrorOpen,
  isEditConfirmOpen: state.notice.isEditConfirmOpen,
  isEditResultOpen: state.notice.isEditResultOpen,
  isPostingSuccess: state.classes.isPostingSuccess,
  className_err: state.validate.className_err,
  startDate_err: state.validate.startDate_err,
  expectedEndDate_err: state.validate.expectedEndDate_err,
  csId_err: state.validate.csId_err
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Edit);
