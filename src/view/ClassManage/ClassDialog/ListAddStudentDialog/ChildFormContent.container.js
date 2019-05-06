import { connect } from "react-redux";
import ChildFormContent from "./ChildFormContent";
import {
  validateOutDate,
  resetValidate
} from "../../../../store/slice/validate.slice";

export const mapDispatchToProps = dispatch => ({
  validateOutDate: value => dispatch(validateOutDate(value)),
  resetValidate: () => dispatch(resetValidate())
});

export const mapStateToProps = state => ({
  validatedOutDate: state.validate.validatedOutDate,
  endDate: state.dialogController.endDate,
  outDate_err: state.validate.outDate_err
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ChildFormContent);
