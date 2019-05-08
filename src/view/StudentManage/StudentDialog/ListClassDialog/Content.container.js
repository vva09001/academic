import { connect } from "react-redux";
import Content from "./Content";

import { getListStudentClass } from "../../../../store/slice/student.slice";

const mapDispatchToProps = dispatch => ({
  getListStudentClass: (studentId, page) =>
    dispatch(getListStudentClass(studentId, page))
});

const mapStateToProps = state => ({
  studentId: state.dialogController.studentId,
  listClassPage: state.students.listClassPage,
  listStudentClass: state.students.listStudentClass,
  loadingListClass: state.students.loadingListClass,
  totalStudentClass: state.students.totalStudentClass
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Content);
