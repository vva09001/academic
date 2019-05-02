import { connect } from "react-redux";
import Footer from "./Footer";
import { closeEditClassDialog } from "../../../../store/slice/dialogController.slice";
import { resetValidate } from "../../../../store/slice/validate.slice"

const mapDispatchToProps = dispatch => ({
  closeEditClassDialog: () => dispatch(closeEditClassDialog()),
  resetValidate: () => dispatch(resetValidate())
});

const mapStateToProps = state => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Footer);
