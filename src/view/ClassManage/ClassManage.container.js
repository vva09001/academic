import { connect } from "react-redux";
import ClassManage from "./ClassManage";
import { getClassData, search } from "../../store/slice/class.slice";
import { toClasses } from "../../store/slice/title.slice";
import { openAddDialog } from "../../store/slice/dialogController.slice";
import { getListStatus } from "../../store/slice/statistical.slice";

const mapDispatchToProps = dispatch => ({
  getClassData: page => dispatch(getClassData(page)),
  getListStatus: () => dispatch(getListStatus()),
  toClasses: () => dispatch(toClasses()),
  search: (searchKey, cs_id, page) => dispatch(search(searchKey, cs_id, page)),
  openAddDialog: () => dispatch(openAddDialog())
});

const mapStateToProps = state => ({
  page: state.classes.page,
  cs_id: state.classes.cs_id,
  loading: state.classes.loading,
  posting: state.classes.posting,
  list: state.classes.list,
  total: state.classes.total,
  searchKey: state.classes.searchKey,
  listClassStatus: state.statistical.listStatus.classStatus
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ClassManage);
