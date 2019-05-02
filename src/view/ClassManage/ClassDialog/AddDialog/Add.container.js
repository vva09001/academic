import { connect } from "react-redux";
import Add from "./Add";
import { closeAddDialog } from "../../../../store/slice/dialogController.slice";
import * as notice from "../../../../store/slice/notice.slice";
import * as validate from "../../../../store/slice/validate.slice";
import { addClass } from "../../../../store/slice/class.slice";

const mapDispatchToProps = dispatch => ({
  resetValidate: () => dispatch(validate.resetValidate()),
  closeAddDialog: () => dispatch(closeAddDialog()),
  openAddConfirm: () => dispatch(notice.openAddConfirm()),
  closeAddConfirm: () => dispatch(notice.closeAddConfirm()),
  openAddResult: () => dispatch(notice.openAddResult()),
  closeAddResult: () => dispatch(notice.closeAddResult()),
  validateClassId: value => dispatch(validate.validateClassId(value)),
  validateClassName: value => dispatch(validate.validateClassName(value)),
  validateStartDate: value => dispatch(validate.validateStartDate(value)),
  validateExpectedEndDate: value =>
    dispatch(validate.validateExpectedEndDate(value)),
  validateCsId: value => dispatch(validate.validateCsId(value)),
  addClass: form => dispatch(addClass(form))
});

const mapStateToProps = state => ({
  isAddDialogOpen: state.dialogController.isAddDialogOpen,
  isAddConfirmOpen: state.notice.isAddConfirmOpen,
  isAddResultOpen: state.notice.isAddResultOpen,
  isPostingSuccess: state.classes.isPostingSuccess,
  validatedClassForm: state.validate.validatedClassForm,
  classId_err: state.validate.classId_err,
  className_err: state.validate.className_err,
  startdate_err: state.validate.startDate_err,
  expectedEndDate_err: state.validate.expectedEndDate_err,
  csId_err: state.validate.csId_err
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Add);
