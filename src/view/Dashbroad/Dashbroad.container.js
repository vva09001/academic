import { connect } from "react-redux";
import Dashbroad from "./Dashbroad";

import { toDashbroad } from "../../store/slice/title.slice";
import { getStatisticalData } from "../../store/slice/statistical.slice";

const mapDispatchToProps = dispatch => ({
  toDashbroad: () => dispatch(toDashbroad()),
  getStatisticalData: () => dispatch(getStatisticalData()),
});

const mapStateToProps = state => ({
  title: state.title.title,
  totalStudent : state.statistical.totalData.totalStudent,
  totalLearning : state.statistical.totalData.totalLearning,
  totalWaitingStudent : state.statistical.totalData.totalWaitingStudent,
  totalClass : state.statistical.totalData.totalClass,
  totalDoingProjectCLass :  state.statistical.totalData.totalDoingProjectCLass,
  totalDesinger : state.statistical.totalData.totalDesinger,
  totalDeveloper : state.statistical.totalData.totalDeveloper,
  totalReserving : state.statistical.totalData.totalReserving,
  loading : state.statistical.isLoading,
  total3DA: state.statistical.totalData.total3DA,
  total3DM: state.statistical.totalData.total3DM,
  totalVFX: state.statistical.totalData.totalVFX,
  totalGDG: state.statistical.totalData.totalGDG,
  totalGD: state.statistical.totalData.totalGD,
  totalMD: state.statistical.totalData.totalMD,
  totalWD: state.statistical.totalData.totalWD,
  totaClassPasue: state.statistical.totalData.totaClassPasue,
  totaClassComplete: state.statistical.totalData.totaClassComplete,
  doingClass: state.statistical.totalData.doingClass
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Dashbroad);
