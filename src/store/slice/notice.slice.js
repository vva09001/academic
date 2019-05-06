import { createSlice } from "redux-starter-kit";

const slice = createSlice({
  slice: "notice",
  initialState: {
    isAddConfirmOpen: false,
    isAddResultOpen: false,
    isEditConfirmOpen: false,
    isEditResultOpen: false,
    isOutDateInputOpen: false,
    isAddStudentNoMainClassConfirmOpen: false,
    isAddStudentConfirmOpen: false,
    isAddStudentResultOpen: false,
    isChangeClassConfirmOpen: false,
    isChangeClassResultOpen: false,
    isErrorOpen: false,
    studentId: "",
    studentData: []
  },
  reducers: {
    addConfirm: (state, action) => ({
      ...state,
      isAddConfirmOpen: action.payload
    }),
    addResult: (state, action) => ({
      ...state,
      isAddResultOpen: action.payload
    }),
    editConfirm: (state, action) => ({
      ...state,
      isEditConfirmOpen: action.payload
    }),
    editResult: (state, action) => ({
      ...state,
      isEditResultOpen: action.payload
    }),
    outDateInput: (state, action) => ({
      ...state,
      isOutDateInputOpen: action.payload.isOutDateInputOpen,
      studentId: action.payload.studentId,
      studentData: action.payload.studentData
    }),
    addStudentNoMainClass: (state, action) => ({
      ...state,
      isAddStudentNoMainClassConfirmOpen: action.payload.isAddStudentNoMainClassConfirmOpen,
      studentId: action.payload.studentId,
      studentData: action.payload.studentData
    }),
    addStudentConfirm: (state, action) => ({
      ...state,
      isAddStudentConfirmOpen: action.payload
    }),
    addStudentResult: (state, action) => ({
      ...state,
      isAddStudentResultOpen: action.payload
    }),
    isErrorOpen: (state, action) => ({
      ...state,
      isErrorOpen: action.payload
    }),
    changeClassConfirm: (state, action) => ({
      ...state,
      isChangeClassConfirmOpen: action.payload.isChangeClassConfirmOpen,
      studentId: action.payload.studentId,
      studentData: action.payload.studentData
    }),
    changeClassResult: (state, action) => ({
      ...state,
      isChangeClassResultOpen: action.payload
    })
  }
});

export const openAddConfirm = () => dispatch => {
  dispatch(slice.actions.addConfirm(true));
};

export const closeAddConfirm = () => dispatch => {
  dispatch(slice.actions.addConfirm(false));
};

export const openAddResult = () => dispatch => {
  dispatch(slice.actions.addResult(true));
};

export const closeAddResult = () => dispatch => {
  dispatch(slice.actions.addResult(false));
};

export const openEditConfirm = () => dispatch => {
  dispatch(slice.actions.editConfirm(true));
};

export const closeEditConfirm = () => dispatch => {
  dispatch(slice.actions.editConfirm(false));
};

export const openEditResult = () => dispatch => {
  dispatch(slice.actions.editResult(true));
};

export const closeEditResult = () => dispatch => {
  dispatch(slice.actions.editResult(false));
};

export const openOutDateInput = studentData => dispatch => {
  dispatch(
    slice.actions.outDateInput({
      isOutDateInputOpen: true,
      studentId: studentData.studentId,
      studentData
    })
  );
};

export const closeOutDateInput = () => dispatch => {
  dispatch(
    slice.actions.outDateInput({
      isOutDateInputOpen: false,
      studentId: "",
      studentData: []
    })
  );
};

export const openErrorNotice = () => dispatch => {
  dispatch(slice.actions.isErrorOpen(true));
};

export const openAddStudentNoMainClassConfirm = studentData => dispatch => {
  dispatch(
    slice.actions.addStudentNoMainClass({
      isAddStudentNoMainClassConfirmOpen: true,
      studentId: studentData.studentId,
      studentData
    })
  );
};

export const closeAddStudentNoMainClassConfirm = () => dispatch => {
  dispatch(
    slice.actions.addStudentNoMainClass({
      isAddStudentNoMainClassConfirmOpen: false,
      studentId: "",
      studentData: []
    })
  );
};

export const openAddStudentConfirm = () => dispatch => {
  dispatch(slice.actions.addStudentConfirm(true));
};

export const closeAddStudentConfirm = () => dispatch => {
  dispatch(slice.actions.addStudentConfirm(false));
};

export const openAddStudentResult = () => dispatch => {
  dispatch(slice.actions.addStudentResult(true));
};

export const closeAddStudentResult = () => dispatch => {
  dispatch(slice.actions.addStudentResult(false));
};

export const openChangeClassConfirm = studentData => dispatch => {
  dispatch(
    slice.actions.changeClassConfirm({
      isChangeClassConfirmOpen: true,
      studentId: studentData.studentId,
      studentData
    })
  );
};

export const closeChangeClassConfirm = () => dispatch => {
  dispatch(
    slice.actions.changeClassConfirm({
      isChangeClassConfirmOpen: false,
      studentId: "",
      studentData: []
    })
  );
};

export const openChangeClassResult = () => dispatch => {
  dispatch(slice.actions.changeClassResult(true));
};

export const closeChangeClassResult = () => dispatch => {
  dispatch(slice.actions.changeClassResult(false));
};

export const closeErrorNotice = () => dispatch => {
  dispatch(slice.actions.isErrorOpen(false));
};

export default slice;
