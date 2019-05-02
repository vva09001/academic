import { connect } from "react-redux";
import * as login from "../../store/slice/login.slice";
import LoginPage from "./LoginPage";

const mapDispatchToProps = dispatch => ({
  setUsername: username => dispatch(login.setUsername(username)),
  setPassword: password => dispatch(login.setPassword(password)),
  checkAccount: (username, password) =>
    dispatch(login.checkAccount(username, password)),
  loginByGoogle: userInfo => dispatch(login.loginByGoogle(userInfo))
});

const mapStateToProps = state => ({
  username: state.login.username,
  password: state.login.password,
  account_err: state.login.account_err,
  isLogged: state.login.isLogged
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginPage);
