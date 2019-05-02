import { connect } from 'react-redux'
import Content from './Content'
import * as validate from "../../../../store/slice/validate.slice";

const mapDispatchToProps = dispatch => ({
  validateClassId: (value) => dispatch(validate.validateClassId(value)),
  validateClassName: (value) => dispatch(validate.validateClassName(value)),
  validateStartDate: (value) => dispatch(validate.validateStartDate(value)),
  validateExpectedEndDate: (value) => dispatch(validate.validateExpectedEndDate(value)),
  validateCsId: (value) => dispatch(validate.validateCsId(value))
})

const mapStateToProps = state => ({
  validatedClassForm: state.validate.validatedClassForm,
  classId_err: state.validate.classId_err,
  className_err: state.validate.className_err,
  startDate_err: state.validate.startDate_err,
  expectedEndDate_err: state.validate.expectedEndDate_err,
  csId_err: state.validate.csId_err
})

export default connect(mapStateToProps,mapDispatchToProps)(Content)
