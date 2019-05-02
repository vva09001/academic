import { connect } from "react-redux";
import Add from "./Add";
import { closeAddDialog } from "../../../../store/slice/dialogController.slice";
import * as validate from "../../../../store/slice/validate.slice";
import { addStudent } from "../../../../store/slice/student.slice";
import * as notice from "../../../../store/slice/notice.slice";

const mapDispatchToProps = dispatch => ({
  closeAddDialog: () => dispatch(closeAddDialog()),
  resetValidate: () => dispatch(validate.resetValidate()),
  addStudent: form => dispatch(addStudent(form)),
  validateFullname: value => dispatch(validate.validateFullname(value)),
  validateProgrammeId: value => dispatch(validate.validateProgrammeId(value)),
  validateBirthday: value => dispatch(validate.validateBirthday(value)),
  openAddConfirm: () => dispatch(notice.openAddConfirm()),
  closeAddConfirm: () => dispatch(notice.closeAddConfirm()),
  openAddResult: () => dispatch(notice.openAddResult()),
  closeAddResult: () => dispatch(notice.closeAddResult())
});

const mapStateToProps = state => ({
  isAddDialogOpen: state.dialogController.isAddDialogOpen,
  validatedForm: state.validate.validatedForm,
  isAddConfirmOpen: state.notice.isAddConfirmOpen,
  isAddResultOpen: state.notice.isAddResultOpen,
  isPostingSuccess: state.students.isPostingSuccess,
  posting: state.students.posting,
  fullName_err: state.validate.fullName_err,
  programmeId_err: state.validate.programmeId_err,
  birthday_err: state.validate.birthday_err,
  idCardNo_err: state.validate.idCardNo_err,
  phoneNo_err: state.validate.phoneNo_err,
  email_err: state.validate.email_err,
  personalEmail_err: state.validate.personalEmail_err
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Add);
