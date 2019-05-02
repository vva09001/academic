import { connect } from "react-redux";
import Content from "./Content";
import { getWaitingStudents } from "../../../../store/slice/class.slice";
import { openAddStudentConfirm } from "../../../../store/slice/notice.slice";

const mapDispatchToProps = dispatch => ({
  getWaitingStudents: (searchAddStudent, ss_id, programme_id, page) =>
    dispatch(getWaitingStudents(searchAddStudent, ss_id, programme_id, page)),
  openAddStudentConfirm: studentData =>
    dispatch(openAddStudentConfirm(studentData))
});

const mapStateToProps = state => ({
  listWaitingStudents: state.classes.listWaitingStudents,
  addStudentPage: state.classes.addStudentPage,
  programme_id: state.classes.programme_id,
  ss_id: state.classes.ss_id,
  loadingWaitingStudent: state.classes.loadingWaitingStudent,
  allProgram: state.statistical.listStatus.allProgram,
  studentStatus: state.statistical.listStatus.studentStatus,
  totalAddAble: state.classes.totalAddAble,
  searchAddStudent: state.classes.searchAddStudent,
  posting: state.classes.posting,
  classId: state.dialogController.classId
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Content);
