import { connect } from "react-redux";
import SideMenu from "./SideMenu";
import {logout} from "../../../store/slice/login.slice";
import { resetStudentState } from "../../../store/slice/student.slice";
import { resetClassState } from "../../../store/slice/class.slice";

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout()),
  resetStudentState: () => dispatch(resetStudentState()),
  resetClassState: () => dispatch(resetClassState())
})

export default connect(
  null,
  mapDispatchToProps
)(SideMenu);
