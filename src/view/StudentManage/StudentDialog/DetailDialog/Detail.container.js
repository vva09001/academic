import { connect } from "react-redux";
import Detail from "./Detail";
import { closeDetailDialog } from "../../../../store/slice/dialogController.slice";

const mapDispatchToProps = dispatch => ({
  closeDetailDialog: () => dispatch(closeDetailDialog())
});

const mapStateToProps = state => ({
  isDetailDialogOpen: state.dialogController.isDetailDialogOpen,  
  detailDialogData: state.dialogController.detailDialogData
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Detail);
