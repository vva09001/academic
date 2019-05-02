import { createSlice } from "redux-starter-kit";
import moment from "moment";

const slice = createSlice({
  slice: "dialogController",
  initialState: {
    isDetailDialogOpen: false,
    isAddDialogOpen: false,
    isEditDialogOpen: false,
    isListStudentDialogOpen: false,
    isListAddStudentDialogOpen: false,
    isChangeClassDialogOpen: false,
    detailDialogData: null,
    classId: "",
    endDate: null,
    studentId: "",
    editDialogData: {
      fullName: "",
      programmeId: "",
      ssId: "",
      gender: "M",
      birthday: "",
      idCardNo: "",
      phoneNo: "",
      email: "",
      personalEmail: "",
      address: "",
      note: ""
    },
    editClassDialogData: {
      classId: "",
      className: "",
      startDate: "",
      expectedEndDate: "",
      endDate: "",
      csId: ""
    }
  },
  reducers: {
    openDetailDialog: (state, action) => ({
      ...state,
      isDetailDialogOpen: true,
      detailDialogData: action.payload.detailDialogData
    }),
    closeDetailDialog: state => ({
      ...state,
      isDetailDialogOpen: false,
      detailDialogData: null
    }),
    openAddDialog: state => ({
      ...state,
      isAddDialogOpen: true
    }),
    closeAddDialog: state => ({
      ...state,
      isAddDialogOpen: false
    }),
    openEditDialog: (state, action) => ({
      ...state,
      isEditDialogOpen: true,
      detailDialogData: action.payload.detailDialogData,
      editDialogData: {
        fullName: action.payload.fullName,
        programmeId: action.payload.programmeId,
        ssId: action.payload.ssId.toString(),
        gender: action.payload.gender,
        birthday: action.payload.birthday,
        idCardNo: action.payload.idCardNo,
        phoneNo: action.payload.phoneNo,
        email: action.payload.email,
        personalEmail: action.payload.personalEmail,
        address: action.payload.address,
        note: action.payload.note
      }
    }),
    closeEditDialog: state => ({
      ...state,
      isEditDialogOpen: false,
      detailDialogData: null,
      editDialogData: {
        fullName: "",
        programmeId: "",
        ssId: "",
        gender: "M",
        birthday: "",
        idCardNo: "",
        phoneNo: "",
        email: "",
        personalEmail: "",
        address: "",
        note: ""
      }
    }),
    openEditClassDialog: (state, action) => ({
      ...state,
      isEditDialogOpen: true,
      editClassDialogData: {
        classId: action.payload.classId,
        className: action.payload.className,
        startDate: action.payload.startDate,
        expectedEndDate: action.payload.expectedEndDate,
        endDate: action.payload.endDate,
        csId: action.payload.csId
      }
    }),
    closeEditClassDialog: state => ({
      ...state,
      isEditDialogOpen: false,
      editClassDialogData: {
        classId: "",
        className: "",
        startDate: "",
        expectedEndDate: "",
        endDate: "",
        csId: ""
      }
    }),
    openListStudentDialog: (state, action) => ({
      ...state,
      isListStudentDialogOpen: true,
      classId: action.payload.classId,
      endDate: action.payload.endDate
    }),
    closeListStudentDialog: (state, action) => ({
      ...state,
      isListStudentDialogOpen: false,
      classId: "",
      endDate: null
    }),
    openListAddStudentDialog: (state, action) => ({
      ...state,
      isListAddStudentDialogOpen: true
    }),
    closeListAddStudentDialog: (state, action) => ({
      ...state,
      isListAddStudentDialogOpen: false
    }),
    openChangeClassDialog: (state, action) => ({
      ...state,
      studentId: action.payload,
      isChangeClassDialogOpen: true
    }),
    closeChangeClassDialog: (state, action) => ({
      ...state,
      studentId: "",
      isChangeClassDialogOpen: false
    })
  }
});

export const openDetailDialog = detailDialogData => dispatch =>
  dispatch(
    slice.actions.openDetailDialog({
      detailDialogData
    })
  );

export const closeDetailDialog = () => dispatch =>
  dispatch(slice.actions.closeDetailDialog());

export const openAddDialog = () => dispatch =>
  dispatch(slice.actions.openAddDialog());

export const closeAddDialog = () => dispatch =>
  dispatch(slice.actions.closeAddDialog());

export const openEditDialog = data => dispatch => {
  dispatch(
    slice.actions.openEditDialog({
      detailDialogData: data,
      fullName: data.fullName,
      programmeId: data._Programme.programmeId,
      ssId: data._StudentStatus.ssId,
      gender: data.gender,
      birthday: moment(data.birthday.toString()).format("DD/MM/YYYY"),
      idCardNo: data.idCardNo,
      phoneNo: data.phoneNo,
      email: data.email,
      personalEmail: data.personalEmail,
      address: data.address,
      note: data.note
    })
  );
};

export const closeEditDialog = () => dispatch =>
  dispatch(slice.actions.closeEditDialog());

export const openEditClassDialog = data => dispatch => {
  let endDate;
  if (data.endDate !== null) {
    endDate = moment(data.endDate.toString()).format("DD/MM/YYYY");
  } else {
    endDate = "";
  }
  dispatch(
    slice.actions.openEditClassDialog({
      classId: data.classId,
      className: data.className,
      startDate: moment(data.startDate.toString()).format("DD/MM/YYYY"),
      expectedEndDate: moment(data.expectedEndDate.toString()).format(
        "DD/MM/YYYY"
      ),
      endDate: endDate,
      csId: data._ClassStatus.csId
    })
  );
};

export const closeEditClassDialog = () => dispatch =>
  dispatch(slice.actions.closeEditClassDialog());

export const openListStudentDialog = dialogData => dispatch => {
  let endDate;
  if (dialogData.endDate === null) {
    endDate = null;
  } else {
    endDate = moment(dialogData.endDate.toString()).format("DD/MM/YYYY");
  }
  dispatch(
    slice.actions.openListStudentDialog({
      classId: dialogData.classId,
      endDate: endDate
    })
  );
};

export const closeListStudentDialog = () => dispatch =>
  dispatch(slice.actions.closeListStudentDialog());

export const openListAddStudentDialog = () => dispatch =>
  dispatch(slice.actions.openListAddStudentDialog());

export const closeListAddStudentDialog = () => dispatch =>
  dispatch(slice.actions.closeListAddStudentDialog());

export const openChangeClassDialog = (studentId) => dispatch => {
  dispatch(slice.actions.openChangeClassDialog(studentId));
};

export const closeChangeClassDialog = () => dispatch => {
  dispatch(slice.actions.closeChangeClassDialog());
};

export default slice;
