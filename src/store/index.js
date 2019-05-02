import { configureStore } from "redux-starter-kit";
import { combineReducers } from "redux";

import studentSlice from "./slice/student.slice";
import titleSlice from "./slice/title.slice";
import statistical from "./slice/statistical.slice";
import dialogController from "./slice/dialogController.slice";
import validate from "./slice/validate.slice";
import notice from "./slice/notice.slice";
import classes from './slice/class.slice';
import login from './slice/login.slice';

const rootReducer = combineReducers({
  title: titleSlice.reducer,
  students: studentSlice.reducer,
  statistical: statistical.reducer,
  dialogController: dialogController.reducer,
  validate: validate.reducer,
  notice: notice.reducer,
  classes: classes.reducer,
  login: login.reducer
});

export default () =>
  configureStore({
    reducer: rootReducer
  });
