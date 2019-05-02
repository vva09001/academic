import React from "react";
import { Redirect } from "react-router-dom";
import { GoogleLoginService } from "../../store/services/googleService";

import { ButtonClick } from "../../theme/Button";
import Input from "../../theme/Input";
import Logo from "../../assets/svgComponents/VTCAlogo";
import ErrorMsg from "../../theme/FormElement/ErrorMsg";

const LoginPage = props => {
  const submit = e => {
    e.preventDefault();
    props.checkAccount(props.username, props.password);
  };

  return (
    <React.Fragment>
      {props.isLogged && <Redirect to={"/academic/dashbroad"} />}
      <div className="loginPage">
        <div className="loginForm">
          <form>
            <div>
              <Logo fill="#203e7d" height={45} width={250} />
            </div>
            <h6>Đăng nhập vào VTC Academy</h6>
            <Input
              value={props.username}
              onChange={e => props.setUsername(e.target.value)}
              placeholder="Tài khoản"
            />
            <Input
              value={props.password}
              onChange={e => props.setPassword(e.target.value)}
              placeholder="Mật khẩu"
              type="password"
            />
            <ErrorMsg error={props.account_err} />
            <ButtonClick
              onClick={e => submit(e)}
              classes={"loginButton"}
              title={`Đăng nhập`}
            />
            <p>Hoặc</p>
            <GoogleLoginService
              className="googleButton"
              buttonText="Đăng nhập với google"
              login={response => props.loginByGoogle(response)}
            />
          </form>
        </div>
      </div>
    </React.Fragment>
  );
};

export default LoginPage;
