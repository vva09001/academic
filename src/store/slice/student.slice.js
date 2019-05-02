import { createSlice } from "redux-starter-kit";
import studentService from "../services/studentService";

const slice = createSlice({
  slice: "student",
  initialState: {
    loading: false,
    list: [],
    page: 1,
    searchKey: "",
    class_id: "",
    ss_id: 2,
    programme_id: "",
    error: null,
    total: 0,
    posting: false,
    postData: {},
    isPostingSuccess: true
  },
  reducers: {
    loadStart: (state, action) => ({
      ...state,
      loading: true,
      error: null
    }),
    loadSuccess: (state, action) => ({
      ...state,
      loading: false,
      list: [...action.payload.list],
      total: action.payload.total,
      page: action.payload.page
    }),
    loadFail: (state, action) => ({
      ...state,
      loading: false,
      error: action.payload
    }),
    searchStart: (state, action) => ({
      ...state,
      loading: true,
      error: null,
      searchKey: action.payload.searchKey,
      class_id: action.payload.class_id,
      ss_id: action.payload.ss_id,
      programme_id: action.payload.programme_id
    }),
    postStart: (state, action) => ({
      ...state,
      posting: true,
      error: null
    }),
    postSuccess: (state, action) => ({
      ...state,
      posting: false,
      postData: action.payload,
      isPostingSuccess: true
    }),
    postFail: (state, action) => ({
      ...state,
      posting: false,
      error: action.payload,
      isPostingSuccess: false
    })
  }
});

export const getStudentData = page => async dispatch => {
  dispatch(slice.actions.loadStart());
  try {
    const studentData = await studentService.getStudentData(page);
    dispatch(
      slice.actions.loadSuccess({
        list: studentData.students,
        total: studentData.count,
        page
      })
    );
  } catch (error) {
    dispatch(slice.actions.loadFail(error.message));
  }
};

export const search = (
  searchKey,
  class_id,
  ss_id,
  programme_id,
  page
) => async dispatch => {
  dispatch(
    slice.actions.searchStart({
      searchKey,
      class_id,
      ss_id,
      programme_id,
    })
  );
  try {
    const studentData = await studentService.searchStudent(
      searchKey,
      class_id,
      ss_id,
      programme_id,
      page
    );
    dispatch(
      slice.actions.loadSuccess({
        list: studentData.students,
        total: studentData.count,
        page
      })
    );
  } catch (error) {
    dispatch(slice.actions.loadFail(error.message));
  }
};

export const addStudent = form => async dispatch => {
  dispatch(slice.actions.postStart());
  try {
    const post = await studentService.addStudent(form);
    dispatch(slice.actions.postSuccess(post));
  } catch (error) {
    dispatch(slice.actions.postFail(error.message));
  }
};

export const editStudent = (form, studentId) => async dispatch => {
  dispatch(slice.actions.postStart());
  try {
    const post = await studentService.editStudent(form, studentId);
    dispatch(slice.actions.postSuccess(post));
  } catch (error) {
    dispatch(slice.actions.postFail(error.message));
  }
};

export default slice;
