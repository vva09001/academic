import { createSlice } from "redux-starter-kit";
import statisticalService from "../services/statisticalService";

const slice = createSlice({
  slice: "statistical",
  initialState: {
    totalData: {
      totalStudent: null,
      totalDesinger: null,
      totalDeveloper: null,
      totalStudying: null,
      totalWaitingClass: null,
      totalReserving: null,
      totalClass: null,
      totalDoingProjectCLass: null,
      total3DA: null,
      total3DM: null,
      totalVFX: null,
      totalGDG: null,
      totalGD: null,
      totalMD: null,
      totalWD: null,
      totaClassPasue: null,
      totaClassComplete: null,
      doingClass : null
    },
    listStatus: {
      studentStatus: [],
      classStatus: [],
      allProgram: []
    },
    error: null,
    isLoading: false
  },
  reducers: {
    startLoading: (state, action) => ({
      ...state,
      isLoading: true
    }),
    getTotalData: (state, action) => ({
      ...state,
      totalData: {
        totalStudent: action.payload.totalStudent,
        totalDesinger: action.payload.totalDesinger,
        totalDeveloper: action.payload.totalDeveloper,
        totalLearning: action.payload.totalLearning,
        totalWaitingStudent: action.payload.totalWaitingStudent,
        totalReserving: action.payload.totalReserving,
        totalClass: action.payload.totalClass,
        totalDoingProjectCLass: action.payload.totalDoingProjectCLass,
        total3DA: action.payload.total3DA,
        total3DM: action.payload.total3DM,
        totalVFX: action.payload.totalVFX,
        totalGDG: action.payload.totalGDG,
        totalGD: action.payload.totalGD,
        totalMD: action.payload.totalMD,
        totalWD: action.payload.totalWD,
        totaClassPasue: action.payload.totaClassPasue,
        totaClassComplete: action.payload.totaClassComplete,
        doingClass : action.payload.doingClass
      },
      isLoading: false
    }),
    getListStatus: (state, action) => ({
      ...state,
      listStatus: {
        studentStatus: action.payload.studentStatus,
        classStatus: action.payload.classStatus,
        allProgram: action.payload.allProgram
      },
      isLoading: false
    }),
    getStatisticalFail: (state, action) => ({
      ...state,
      error: action.payload
    })
  }
});

export const getStatisticalData = () => async dispatch => {
  dispatch(slice.actions.startLoading());
  try {
    const totalStudent = await statisticalService.getTotalStudent();
    const totalLearning = await statisticalService.getLearingStudent();
    const totalReserving = await statisticalService.getReservingStudent();
    const totalWaitingStudent = await statisticalService.getWaitingClassStudent();
    const totalClass = await statisticalService.getTotalCLass();
    const totalDoingProjectCLass = await statisticalService.getDoingProjectClass();
    const total3DA = await statisticalService.getstudents3DAModeling();
    const total3DM = await statisticalService.getstudents3DAnimtion();
    const totalVFX = await statisticalService.getstudentsVFX();
    const totalGDG = await statisticalService.getstudentsDGD();
    const totalDesinger = total3DA + total3DM + totalVFX + totalGDG;
    const totalGD = await statisticalService.getstudentsGD();
    const totalMD = await statisticalService.getstudentsMD();
    const totalWD = await statisticalService.getstudentsWD();
    const totalDeveloper = totalGD + totalWD + totalMD;
    const totaClassPasue = await statisticalService.getClassPause();
    const totaClassComplete = await statisticalService.getClassComplete();
    const doingClass = await statisticalService.getDoingClass();
    dispatch(
      slice.actions.getTotalData({
        totalStudent,
        totalLearning,
        totalReserving,
        totalWaitingStudent,
        totalClass,
        totalDoingProjectCLass,
        totalDesinger,
        totalDeveloper,
        total3DA,
        total3DM,
        totalVFX,
        totalGDG,
        totalGD,
        totalMD,
        totalWD,
        totaClassPasue,
        totaClassComplete,
        doingClass
      })
    );
  } catch (error) {
    dispatch(slice.actions.getStatisticalFail(error));
  }
};

export const getListStatus = () => async dispatch => {
  try {
    const studentStatus = await statisticalService.getStudentStatus();
    const classStatus = await statisticalService.getClassStatus();
    const allProgram = await statisticalService.getAllProgram();
    dispatch(slice.actions.getListStatus({
      studentStatus,
      classStatus,
      allProgram
    }))
  } catch (error) {
    dispatch(slice.actions.getStatisticalFail(error))
  }
}

export default slice;
