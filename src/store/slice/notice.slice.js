import { createSlice } from "redux-starter-kit";

const slice = createSlice({
  slice: "notice",
  initialState: {
    isAddConfirmOpen: false,
    isAddResultOpen: false,
    isEditConfirmOpen: false,
    isEditResultOpen: false,
    isAddStudentConfirmOpen: false,
    isAddStudentResultOpen: false,
    isChangeClassConfirmOpen: false,
    isChangeClassResultOpen: false,
    isErrorOpen: false,
    studentId: ""
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
    addStudentConfirm: (state, action) => ({
      ...state,
      isAddStudentConfirmOpen: action.payload.isAddStudentConfirmOpen,
      studentId: action.payload.studentId
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
      studentId: action.payload.studentId
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

export const openErrorNotice = () => dispatch => {
  dispatch(slice.actions.isErrorOpen(true));
};

export const openAddStudentConfirm = (studentId) => dispatch => {
  dispatch(slice.actions.addStudentConfirm({
    studentId,
    isAddStudentConfirmOpen: true
  }));
};

export const closeAddStudentConfirm = () => dispatch => {
  dispatch(slice.actions.addStudentConfirm({
    studentId: "",
    isAddStudentConfirmOpen: false
  }));
};

export const openAddStudentResult = () => dispatch => {
  dispatch(slice.actions.addStudentResult(true));
};

export const closeAddStudentResult = () => dispatch => {
  dispatch(slice.actions.addStudentResult(false));
};

export const openChangeClassConfirm = (studentData) => dispatch => {
  dispatch(slice.actions.changeClassConfirm({
    isChangeClassConfirmOpen: true,
    studentId: studentData.studentId,
  }))
}

export const closeChangeClassConfirm = () => dispatch => {
  dispatch(slice.actions.changeClassConfirm({
    isChangeClassConfirmOpen: false,
    studentId: "",
  }))
}

export const openChangeClassResult = () => dispatch => {
  dispatch(slice.actions.changeClassResult(true))
}

export const closeChangeClassResult = () => dispatch => {
  dispatch(slice.actions.changeClassResult(false))
}

export const closeErrorNotice = () => dispatch => {
  dispatch(slice.actions.isErrorOpen(false));
};

export default slice;
