import { connect } from "react-redux";
import Content from "./Content";
import * as validate from "../../../../store/slice/validate.slice";

const mapDispatchToProps = dispatch => ({
  validateFullname: value => dispatch(validate.validateFullname(value)),
  validateProgrammeId: value => dispatch(validate.validateProgrammeId(value)),
  validateBirthday: value => dispatch(validate.validateBirthday(value)),
  validateIdCardNo: value => dispatch(validate.validateIdCardNo(value)),
  validatePhoneNo: value => dispatch(validate.validatePhoneNo(value)),
  validateEmail: value => dispatch(validate.validateEmail(value)),
  validatePersonalEmail: value =>
    dispatch(validate.validatePersonalEmail(value)),
  validateGender: value => dispatch(validate.validateGender(value)),
  validateAddress: value => dispatch(validate.validateAddress(value)),
  validateNote: value => dispatch(validate.validateNote(value))
});

const mapStateToProps = state => ({
  fullName_err: state.validate.fullName_err,
  programmeId_err: state.validate.programmeId_err,
  birthday_err: state.validate.birthday_err,
  idCardNo_err: state.validate.idCardNo_err,
  phoneNo_err: state.validate.phoneNo_err,
  email_err: state.validate.email_err,
  personalEmail_err: state.validate.personalEmail_err,
  validatedForm: state.validate.validatedForm
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Content);
