import { createSlice } from "redux-starter-kit";
import classService from "../services/classService";
import studentService from "../services/studentService";
import moment from "moment";

const slice = createSlice({
  slice: "class",
  initialState: {
    loading: false,
    loadingStudent: false,
    loadingWaitingStudent: false,
    loadingChangeClass: false,
    list: [],
    listStudent: [],
    listWaitingStudents: [],
    listChangeClass: [],
    page: 1,
    addStudentPage: 1,
    changeClassPage: 1,
    cs_id: "",
    ccs_id: "",
    programme_id: "",
    ss_id: 4,
    searchKey: "",
    searchAddStudent: "",
    searchChangeClass: "",
    total: 0,
    totalAddAble: 0,
    totalChangeAble: 0,
    error: null,
    posting: false,
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
      cs_id: action.payload.cs_id
    }),
    postStart: (state, action) => ({
      ...state,
      posting: true,
      error: null
    }),
    postSuccess: (state, action) => ({
      ...state,
      posting: false,
      isPostingSuccess: true,
      postData: action.payload
    }),
    postFail: (state, action) => ({
      ...state,
      posting: false,
      error: action.payload,
      isPostingSuccess: false
    }),
    getStudentStart: (state, action) => ({
      ...state,
      loadingStudent: true,
      error: null,
      listStudent: []
    }),
    getStudentSuccess: (state, action) => ({
      ...state,
      loadingStudent: false,
      listStudent: action.payload
    }),
    getStudentFail: (state, action) => ({
      ...state,
      loadingStudent: false,
      error: action.payload
    }),
    getWaitingStudentStart: (state, action) => ({
      ...state,
      loadingWaitingStudent: true,
      error: null,
      listWaitingStudents: [],
      searchAddStudent: action.payload
    }),
    getWaitingStudentSuccess: (state, action) => ({
      ...state,
      loadingWaitingStudent: false,
      listWaitingStudents: action.payload.listWaitingStudents,
      addStudentPage: action.payload.addStudentPage,
      totalAddAble: action.payload.totalAddAble,
      programme_id: action.payload.programme_id,
      ss_id: action.payload.ss_id
    }),
    getWaitingStudentFail: (state, action) => ({
      ...state,
      loadingWaitingStudent: false,
      error: action.payload
    }),
    getChangeClassStart: (state, action) => ({
      ...state,
      loadingChangeClass: true,
      error: null,
      listChangeClass: [],
      searchChangeClass: action.payload
    }),
    getChangeClassSuccess: (state, action) => ({
      ...state,
      loadingChangeClass: false,
      listChangeClass: action.payload.listChangeClass,
      changeClassPage: action.payload.changeClassPage,
      totalChangeAble: action.payload.totalChangeAble,
      ccs_id: action.payload.ccs_id
    }),
    getChangeClassFail: (state, action) => ({
      ...state,
      loadingChangeClass: false,
      error: action.payload
    })
  }
});

export const getClassData = page => async dispatch => {
  dispatch(slice.actions.loadStart());
  try {
    const classData = await classService.getClassData(page);
    dispatch(
      slice.actions.loadSuccess({
        list: classData.vtcaClasses,
        total: classData.count,
        page
      })
    );
  } catch (error) {
    dispatch(slice.actions.loadFail(error.message));
  }
};

export const search = (searchKey, cs_id, page) => async dispatch => {
  dispatch(slice.actions.searchStart({ searchKey, cs_id }));
  try {
    const classData = await classService.searchClass(searchKey, cs_id, page);
    dispatch(
      slice.actions.loadSuccess({
        list: classData.vtcaClasses,
        total: classData.count,
        page
      })
    );
  } catch (error) {
    dispatch(slice.actions.loadFail(error.message));
  }
};

export const addClass = form => async dispatch => {
  dispatch(slice.actions.postStart());
  try {
    const post = await classService.addClass(form);
    dispatch(slice.actions.postSuccess(post));
  } catch (error) {
    dispatch(slice.actions.postFail(error.message));
  }
};

export const editClass = (form, classId) => async dispatch => {
  dispatch(slice.actions.postStart());
  try {
    const post = await classService.editClass(form, classId);
    dispatch(slice.actions.postSuccess(post));
  } catch (error) {
    dispatch(slice.actions.postFail(error.message));
  }
};

export const classStudent = classId => async dispatch => {
  dispatch(slice.actions.getStudentStart());
  try {
    const studentData = await classService.classStudent(classId);
    dispatch(slice.actions.getStudentSuccess(studentData.students));
  } catch (error) {
    dispatch(slice.actions.getStudentFail(error.message));
  }
};

export const getWaitingStudents = (
  searchAddStudent,
  ss_id,
  programme_id,
  page
) => async dispatch => {
  dispatch(slice.actions.getWaitingStudentStart(searchAddStudent));
  try {
    const studentData = await studentService.searchStudent(
      searchAddStudent,
      "",
      ss_id,
      programme_id,
      page
    );
    dispatch(
      slice.actions.getWaitingStudentSuccess({
        listWaitingStudents: studentData.students,
        totalAddAble: studentData.count,
        addStudentPage: page,
        programme_id,
        ss_id
      })
    );
  } catch (error) {
    dispatch(slice.actions.getWaitingStudentFail(error.message));
  }
};

export const addStudentIntoClass = (
  classId,
  studentData,
  endDate
) => async dispatch => {
  let form = {
    studentId: studentData.studentId,
    ssId: 2,
    programmeId: studentData._Programme.programmeId,
    fullName: studentData.fullName,
    gender: studentData.gender,
    email: studentData.email,
    phoneNo: studentData.phoneNo,
    idCardNo: studentData.idCardNo,
    birthday: moment(studentData.birthday).format("YYYY/MM/DD"),
    address: studentData.address,
    note: studentData.note
  };
  dispatch(slice.actions.postStart());
  try {
    const post = await classService.addStudentIntoClass(
      classId,
      studentData.studentId,
      endDate
    );
    await studentService.editStudent(form, studentData.studentId);
    dispatch(slice.actions.postSuccess(post));
  } catch (error) {
    dispatch(slice.actions.postFail(error.message));
  }
};

export const getChangeClass = (
  searchChangeClass,
  ccs_id,
  changeClassPage
) => async dispatch => {
  dispatch(slice.actions.getChangeClassStart(searchChangeClass));
  try {
    const classData = await classService.searchClass(
      searchChangeClass,
      ccs_id,
      changeClassPage
    );
    dispatch(
      slice.actions.getChangeClassSuccess({
        listChangeClass: classData.vtcaClasses,
        totalChangeAble: classData.count,
        changeClassPage,
        ccs_id
      })
    );
  } catch (error) {
    dispatch(slice.actions.getChangeClassFail(error.message));
  }
};

export const changeStudentClass = (
  studentId,
  classId,
  endDate
) => async dispatch => {
  dispatch(slice.actions.postStart());
  try {
    const post = await classService.changeClass(studentId, classId, endDate);
    dispatch(slice.actions.postSuccess(post));
  } catch (error) {
    dispatch(slice.actions.postFail(error.message));
  }
};
export default slice;
