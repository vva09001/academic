import { createSlice } from "redux-starter-kit";

const slice = createSlice({
  slice: "login",
  initialState: {
    userInfo: localStorage.getItem("_name"),
    isLogged: Boolean(localStorage.getItem("_lgn")),
    username: "",
    password: "",
    account_err: ""
  },
  reducers: {
    loginSuccess: (state, action) => ({
      ...state,
      account_err: "",
      isLogged: true
    }),
    loginFail: (state, action) => ({
      ...state,
      account_err: action.payload
    }),
    logout: (state, action) => ({
      userInfo: "",
      username: "",
      password: "",
      account_err: "",
      isLogged: false
    }),
    getUserInformation: (state, action) => ({
      ...state,
      userInfo: action.payload
    }),
    setPassword: (state, action) => ({
      ...state,
      password: action.payload
    }),
    setUsername: (state, action) => ({
      ...state,
      username: action.payload
    })
  }
});

export const loginByGoogle = userInfo => dispatch => {
  const regex = /^[a-z]{3,10}.nde+[0-9]+@vtc.edu.vn+$/;
  const checkEmail = regex.test(userInfo.profileObj.email);
  if (!checkEmail) {
    dispatch(
      slice.actions.loginFail(
        "Vui lòng sử dụng email của vtc academy để đăng nhập"
      )
    );
  } else {
    localStorage.setItem("_lgn", true);
    localStorage.setItem("_name", userInfo.profileObj.name);
    dispatch(slice.actions.getUserInformation(userInfo.profileObj.name));
    dispatch(slice.actions.loginSuccess());
  }
};

export const logout = () => dispatch => {
  localStorage.clear();
  sessionStorage.clear();
  dispatch(slice.actions.logout());
};

export const setPassword = password => dispatch => {
  dispatch(slice.actions.setPassword(password));
};

export const setUsername = username => dispatch => {
  dispatch(slice.actions.setUsername(username));
};

export const checkAccount = (username, password) => dispatch => {
  if (username === "admin" && password === "admin") {
    localStorage.setItem("_lgn", true);
    localStorage.setItem("_name", "");
    dispatch(slice.actions.loginSuccess());
  } else if (username === "" || password === "") {
    dispatch(
      slice.actions.loginFail("Tên đăng nhập hoặc mật khẩu không được để trống")
    );
  } else if (username !== "admin") {
    dispatch(slice.actions.loginFail("Tài khoản không tồn tại"));
  } else if (password !== "admin") {
    dispatch(slice.actions.loginFail("Sai mật khẩu"));
  }
};

export default slice;
