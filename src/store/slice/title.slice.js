import { createSlice } from "redux-starter-kit";

const slice = createSlice({
  slice: "title",
  initialState: {
    title: ""
  },
  reducers: {
    setTitle: (state, action) => ({
      title: action.payload
    })
  }
});
// cao state cua ham day dau
export const toDashbroad = () => dispatch => {
  dispatch(slice.actions.setTitle("Thống kê"));
};

export const toStudent = () => dispatch => {
  dispatch(slice.actions.setTitle("Quản lý sinh viên"));
};

export const toClasses = () => dispatch => {
  dispatch(slice.actions.setTitle("Quản lý lớp học"));
};

export const toSubject = () => dispatch => {
  dispatch(slice.actions.setTitle("Quản lý môn học"));
};

export const toProgramme = () => dispatch => {
  dispatch(slice.actions.setTitle("Quản lý chương trình học"));
};

export const toSetting = () => dispatch => {
  dispatch(slice.actions.setTitle("Cài đặt"));
};

export const toHelp = () => dispatch => {
  dispatch(slice.actions.setTitle("Trợ giúp"));
};

export const toContact = () => dispatch => {
  dispatch(slice.actions.setTitle("Liên hệ với VTC Academy"));
};

export default slice;
