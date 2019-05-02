import { connect } from "react-redux";
import Edit from "./Edit";

import { closeEditDialog } from "../../../../store/slice/dialogController.slice";
import * as validate from "../../../../store/slice/validate.slice";
import * as notice from "../../../../store/slice/notice.slice";
import { editStudent } from "../../../../store/slice/student.slice";

const mapDispatchToProps = dispatch => ({
  closeEditDialog: () => dispatch(closeEditDialog()),
  resetValidate: () => dispatch(validate.resetValidate()),
  validateFullname: value => dispatch(validate.validateFullname(value)),
  validateProgrammeId: value => dispatch(validate.validateProgrammeId(value)),
  validateBirthday: value => dispatch(validate.validateBirthday(value)),
  openEditConfirm: () => dispatch(notice.openEditConfirm()),
  closeEditConfirm: () => dispatch(notice.closeEditConfirm()),
  openEditResult: () => dispatch(notice.openEditResult()),
  closeEditResult: () => dispatch(notice.closeEditResult()),
  editStudent: (form, studentId) => dispatch(editStudent(form,studentId)),
  openErrorNotice: () => dispatch(notice.openErrorNotice()),
  closeErrorNotice: () => dispatch(notice.closeErrorNotice())
});

const mapStateToProps = state => ({
  isEditDialogOpen: state.dialogController.isEditDialogOpen,
  validatedForm: state.validate.validatedForm,
  detailDialogData: state.dialogController.detailDialogData,
  isEditConfirmOpen: state.notice.isEditConfirmOpen,
  isEditResultOpen: state.notice.isEditResultOpen,
  isErrorOpen: state.notice.isErrorOpen,
  editDialogData: state.dialogController.editDialogData,
  isPostingSuccess: state.students.isPostingSuccess,
  fullName_err: state.validate.fullName_err,
  ssId_err: state.validate.ssId_err,
  programmeId_err: state.validate.programmeId_err,
  birthday_err: state.validate.birthday_err,
  idCardNo_err: state.validate.idCardNo_err,
  phoneNo_err: state.validate.phoneNo_err,
  email_err: state.validate.email_err,
  personalEmail_err: state.validate.personalEmail_err,
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Edit);
