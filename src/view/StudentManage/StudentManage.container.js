import { connect } from "react-redux";
import StudentManage from "./StudentManage";
import { search, getStudentData } from "../../store/slice/student.slice";
import { getListStatus } from "../../store/slice/statistical.slice";
import { toStudent } from "../../store/slice/title.slice";
import { openAddDialog } from "../../store/slice/dialogController.slice";

const mapDispatchToProps = dispatch => ({
  toStudent: () => dispatch(toStudent()),
  getStudentData: page => dispatch(getStudentData(page)),
  search: (searchKey, class_id, ss_id, programme_id, page) =>
    dispatch(search(searchKey, class_id, ss_id, programme_id, page)),
  getListStatus: () => dispatch(getListStatus()),
  openAddDialog: () => dispatch(openAddDialog()),
});

const mapStateToProps = state => ({
  searchKey: state.students.searchKey,
  class_id: state.students.class_id,
  ss_id: state.students.ss_id,
  page: state.students.page,
  posting: state.students.posting,
  loading: state.students.loading,
  list: state.students.list,
  total: state.students.total,
  programme_id: state.students.programme_id,
  error: state.students.error,
  listStudentStatus: state.statistical.listStatus.studentStatus,
  allProgram: state.statistical.listStatus.allProgram
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(StudentManage);
