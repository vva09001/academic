import { connect } from "react-redux";
import ClassData from "./ClassData";
import * as dialogController from "../../store/slice/dialogController.slice";

const mapDispatchToProps = dispatch => ({
  openEditClassDialog: dialogData =>
    dispatch(dialogController.openEditClassDialog(dialogData)),
  openListStudentDialog: dialogData =>
    dispatch(dialogController.openListStudentDialog(dialogData))
});

const mapStateToProps = state => ({
  list: state.classes.list
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ClassData);
