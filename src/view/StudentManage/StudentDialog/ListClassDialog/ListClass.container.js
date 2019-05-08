import { connect } from "react-redux";
import ListClass from "./ListClass";

import { closeListClassDialog } from "../../../../store/slice/dialogController.slice";

const mapDispatchToProps = dispatch => ({
  closeListClassDialog: () => dispatch(closeListClassDialog())
});

const mapStateToProps = state => ({
  isListClassOpen: state.dialogController.isListClassOpen
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ListClass);
