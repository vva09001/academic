import { createSlice } from "redux-starter-kit";
import studentService from "../services/studentService";

const slice = createSlice({
  slice: "student",
  initialState: {
    loading: false,
    loadingListClass: false,
    list: [],
    listStudentClass: [],
    page: 1,
    listClassPage: 1,
    searchKey: "",
    class_id: "",
    ss_id: 2,
    programme_id: "",
    error: null,
    totalStudentClass: 0,
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
    }),
    getListClassStart: (state, action) => ({
      ...state,
      loadingListClass: true,
      error: null
    }),
    getListClassSuccess: (state, action) => ({
      ...state,
      loadingListClass: false,
      listStudentClass: [...action.payload.listStudentClass],
      listClassPage: action.payload.listClassPage,
      totalStudentClass: action.payload.totalStudentClass
    }),
    getListClassFail: (state, action) => ({
      ...state,
      loadingListClass: false,
      error: action.payload
    }),
    resetStudentState: (state, action) => ({
      ...state,
      page: 1,
      listClassPage: 1,
      searchKey: "",
      class_id: "",
      ss_id: 2,
      programme_id: "",
      error: null,
      totalStudentClass: 0,
      total: 0
    })
  }
});

export const resetStudentState = () => dispatch => {
  dispatch(slice.actions.resetStudentState());
};

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
      programme_id
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

export const getListStudentClass = (studentId, page) => async dispatch => {
  dispatch(slice.actions.getListClassStart());
  try {
    const listClassData = await studentService.getStudentClasses(
      studentId,
      page
    );
    dispatch(
      slice.actions.getListClassSuccess({
        listStudentClass: listClassData,
        listClassPage: page,
        totalStudentClass: listClassData.length
      })
    );
  } catch (error) {
    dispatch(slice.actions.getListClassFail(error.message));
  }
};

export default slice;
