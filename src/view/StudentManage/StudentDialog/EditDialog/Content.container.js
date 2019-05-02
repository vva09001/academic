import { connect } from "react-redux";
import Content from "./Content";
import * as validate from "../../../../store/slice/validate.slice";

const mapDispatchToProps = dispatch => ({
  validateFullname: value => dispatch(validate.validateFullname(value)),
  validateProgrammeId: value => dispatch(validate.validateProgrammeId(value)),
  validateSsId: value => dispatch(validate.validateSsId(value)),
  validateGender: value => dispatch(validate.validateGender(value)),
  validateBirthday: value => dispatch(validate.validateBirthday(value)),
  validateIdCardNo: value => dispatch(validate.validateIdCardNo(value)),
  validatePhoneNo: value => dispatch(validate.validatePhoneNo(value)),
  validateEmail: value => dispatch(validate.validateEmail(value)),
  validatePersonalEmail: value =>
    dispatch(validate.validatePersonalEmail(value)),
  validateAddress: value => dispatch(validate.validateAddress(value)),
  validateNote: value => dispatch(validate.validateNote(value))
});

const mapStateToProps = state => ({
  editDialogData: state.dialogController.editDialogData,
  fullName_err: state.validate.fullName_err,
  programmeId_err: state.validate.programmeId_err,
  ssId_err: state.validate.ssId_err,
  birthday_err: state.validate.birthday_err,
  idCardNo_err: state.validate.idCardNo_err,
  phoneNo_err: state.validate.phoneNo_err,
  email_err: state.validate.email_err,
  personalEmail_err: state.validate.personalEmail_err
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Content);
