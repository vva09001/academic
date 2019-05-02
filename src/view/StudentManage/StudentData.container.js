import { connect } from "react-redux";
import StudentData from "./StudentData";
import { openEditDialog, openDetailDialog } from "../../store/slice/dialogController.slice";

const mapDispatchToProps = dispatch => ({
  openEditDialog: dialogData => dispatch(openEditDialog(dialogData)),
  openDetailDialog: dialogData => dispatch(openDetailDialog(dialogData))
});

const mapStateToProps = state => ({
  list: state.students.list
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(StudentData);
