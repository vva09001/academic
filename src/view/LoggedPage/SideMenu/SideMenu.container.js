import { connect } from "react-redux";
import SideMenu from "./SideMenu";
import {logout} from "../../../store/slice/login.slice";

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout())
})

export default connect(
  null,
  mapDispatchToProps
)(SideMenu);
