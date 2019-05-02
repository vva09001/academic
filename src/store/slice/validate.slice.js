import { createSlice } from "redux-starter-kit";

const slice = createSlice({
  slice: "validate",
  initialState: {
    /*student validate state */
    fullName_err: "",
    programmeId_err: "",
    ssId_err: "",
    birthday_err: "",
    idCardNo_err: "",
    phoneNo_err: "",
    email_err: "",
    personalEmail_err: "",
    validatedForm: {
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
    /*class validate state */
    classId_err: "",
    className_err: "",
    startDate_err: "",
    expectedEndDate_err: "",
    endDate_err: "",
    csId_err: "",
    validatedClassForm: {
      classId: "",
      className: "",
      startDate: "",
      expectedEndDate: "",
      endDate: "",
      csId: ""
    }
  },
  reducers: {
    validateFullname: (state, action) => ({
      ...state,
      fullName_err: action.payload.error,
      validatedForm: {
        ...state.validatedForm,
        fullName: action.payload.value
      }
    }),
    validateProgrammeId: (state, action) => ({
      ...state,
      programmeId_err: action.payload.error,
      validatedForm: {
        ...state.validatedForm,
        programmeId: action.payload.value
      }
    }),
    validateSsId: (state, action) => ({
      ...state,
      ssId_err: action.payload.error,
      validatedForm: {
        ...state.validatedForm,
        ssId: action.payload.value
      }
    }),
    validateBirthday: (state, action) => ({
      ...state,
      birthday_err: action.payload.error,
      validatedForm: {
        ...state.validatedForm,
        birthday: action.payload.value
      }
    }),
    validateIdCardNo: (state, action) => ({
      ...state,
      idCardNo_err: action.payload.error,
      validatedForm: {
        ...state.validatedForm,
        idCardNo: action.payload.value
      }
    }),
    validatePhoneNo: (state, action) => ({
      ...state,
      phoneNo_err: action.payload.error,
      validatedForm: {
        ...state.validatedForm,
        phoneNo: action.payload.value
      }
    }),
    validateEmail: (state, action) => ({
      ...state,
      email_err: action.payload.error,
      validatedForm: {
        ...state.validatedForm,
        email: action.payload.value
      }
    }),
    validatePersonalEmail: (state, action) => ({
      ...state,
      personalEmail_err: action.payload.error,
      validatedForm: {
        ...state.validatedForm,
        personalEmail: action.payload.value
      }
    }),
    validateGender: (state, action) => ({
      ...state,
      validatedForm: {
        ...state.validatedForm,
        gender: action.payload
      }
    }),
    validateAddress: (state, action) => ({
      ...state,
      validatedForm: {
        ...state.validatedForm,
        address: action.payload
      }
    }),
    validateNote: (state, action) => ({
      ...state,
      validatedForm: {
        ...state.validatedForm,
        note: action.payload
      }
    }),
    resetValidate: () => ({
      fullName_err: "",
      programmeId_err: "",
      ssId_err: "",
      birthday_err: "",
      idCardNo_err: "",
      phoneNo_err: "",
      email_err: "",
      personalEmail_err: "",
      validatedForm: {
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
      classId_err: "",
      className_err: "",
      startDate_err: "",
      expectedEndDate_err: "",
      csId_err: "",
      validatedClassForm: {
        classId: "",
        className: "",
        startDate: "",
        expectedEndDate: "",
        endDate: "",
        csId: ""
      }
    }),
    validateClassId: (state, action) => ({
      ...state,
      classId_err: action.payload.error,
      validatedClassForm: {
        ...state.validatedClassForm,
        classId: action.payload.value
      }
    }),
    validateClassName: (state, action) => ({
      ...state,
      className_err: action.payload.error,
      validatedClassForm: {
        ...state.validatedClassForm,
        className: action.payload.value
      }
    }),
    validateStartDate: (state, action) => ({
      ...state,
      startDate_err: action.payload.error,
      validatedClassForm: {
        ...state.validatedClassForm,
        startDate: action.payload.value
      }
    }),
    validateExpectedEndDate: (state, action) => ({
      ...state,
      expectedEndDate_err: action.payload.error,
      validatedClassForm: {
        ...state.validatedClassForm,
        expectedEndDate: action.payload.value
      }
    }),
    validateEndDate: (state, action) => ({
      ...state,
      endDate_err: action.payload.error,
      validatedClassForm: {
        ...state.validatedClassForm,
        endDate: action.payload.value
      }
    }),
    validateCsId: (state, action) => ({
      ...state,
      csId_err: action.payload.error,
      validatedClassForm: {
        ...state.validatedClassForm,
        csId: action.payload.value
      }
    })
  }
});

export const validateFullname = value => dispatch => {
  if (value === "") {
    dispatch(
      slice.actions.validateFullname({
        error: "Họ và tên không được để trống!",
        value: ""
      })
    );
  } else {
    const regex = /^[a-zA-ZaáàạãâấầẫậăắằặẵeéèẹẽêếềệễiíìịĩyýỳỹỵoóòõọôốồộỗơớờợỡuúùụũưứừựữđĐ ]+$/;
    const checkingResult = regex.test(value);
    if (!checkingResult) {
      dispatch(
        slice.actions.validateFullname({
          error: "Họ và tên không hợp lệ!",
          value: ""
        })
      );
    } else {
      dispatch(
        slice.actions.validateFullname({
          error: "",
          value
        })
      );
    }
  }
};

export const validateProgrammeId = value => dispatch => {
  if (value === "") {
    dispatch(
      slice.actions.validateProgrammeId({
        error: "Chuyên nghành không được bỏ trống!",
        value: ""
      })
    );
  } else {
    dispatch(slice.actions.validateProgrammeId({ error: "", value }));
  }
};

export const validateSsId = value => dispatch => {
  if (value === "") {
    dispatch(
      slice.actions.validateSsId({
        error: "Trạng thái sinh viên không được bỏ trống!",
        value: ""
      })
    );
  } else {
    dispatch(slice.actions.validateSsId({ error: "", value }));
  }
};

export const validateBirthday = value => dispatch => {
  if (value === "") {
    dispatch(
      slice.actions.validateBirthday({
        error: "Ngày sinh không được để trống!",
        value: ""
      })
    );
  } else {
    const regex = /^(?:(?:31(\/|-|\.)(?:0?[13578]|1[02]))\1|(?:(?:29|30)(\/|-|\.)(?:0?[13-9]|1[0-2])\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|^(?:29(\/|-|\.)0?2\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\d|2[0-8])(\/|-|\.)(?:(?:0?[1-9])|(?:1[0-2]))\4(?:(?:1[6-9]|[2-9]\d)?\d{2})$/;
    const checkingResult = regex.test(value);
    if (!checkingResult) {
      dispatch(
        slice.actions.validateBirthday({
          error: "Ngày sinh không hợp lệ!",
          value: ""
        })
      );
    } else {
      dispatch(slice.actions.validateBirthday({ error: "", value }));
    }
  }
};

export const validateIdCardNo = value => dispatch => {
  const regex = /^\d{9}$/;
  const checkingResult = regex.test(value);
  if (!checkingResult && value !== "") {
    dispatch(
      slice.actions.validateIdCardNo({
        error: "Số CMND bao gồm 9 chữ số!",
        value: ""
      })
    );
  } else {
    dispatch(slice.actions.validateIdCardNo({ error: "", value }));
  }
};

export const validatePhoneNo = value => dispatch => {
  const regex = /\d/;
  const checkingResult = regex.test(value);
  if (!checkingResult && value !== "") {
    dispatch(
      slice.actions.validatePhoneNo({
        error: "Số điện thoại không hợp lệ!",
        value: ""
      })
    );
  } else {
    dispatch(slice.actions.validatePhoneNo({ error: "", value }));
  }
};

export const validateEmail = value => dispatch => {
  const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9]+\.[A-Za-z.]+$/;
  const checkingResult = regex.test(value);
  if (!checkingResult && value !== "") {
    dispatch(
      slice.actions.validateEmail({ error: "Email không hợp lệ!", value: "" })
    );
  } else {
    dispatch(slice.actions.validateEmail({ error: "", value }));
  }
};

export const validatePersonalEmail = value => dispatch => {
  const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9]+\.[A-Za-z.]+$/;
  const checkingResult = regex.test(value);
  if (!checkingResult && value !== "") {
    dispatch(
      slice.actions.validatePersonalEmail({
        error: "Email cá nhân không hợp lệ!",
        value: ""
      })
    );
  } else {
    dispatch(slice.actions.validatePersonalEmail({ error: "", value }));
  }
};

export const validateGender = value => dispatch => {
  dispatch(slice.actions.validateGender(value));
};

export const validateAddress = value => dispatch => {
  dispatch(slice.actions.validateAddress(value));
};

export const validateNote = value => dispatch => {
  dispatch(slice.actions.validateNote(value));
};

export const resetValidate = () => dispatch => {
  dispatch(slice.actions.resetValidate());
};

export const validateClassId = value => dispatch => {
  if (value === "") {
    dispatch(
      slice.actions.validateClassId({
        error: "Mã lớp không được để trống!",
        value
      })
    );
  } else {
    const regex = /^[a-zA-Z0-9-_]{3,8}$/;
    const checkingResult = regex.test(value);
    if (!checkingResult) {
      dispatch(
        slice.actions.validateClassId({
          error: "Mã lớp chỉ chứa chữ cái, số, dấu - và dài từ 3 đến 8 kí tự!",
          value
        })
      );
    } else {
      dispatch(
        slice.actions.validateClassId({
          error: "",
          value
        })
      );
    }
  }
};

export const validateClassName = value => dispatch => {
  if (value === "") {
    dispatch(
      slice.actions.validateClassName({
        error: "Tên lớp không được để trống!",
        value
      })
    );
  } else {
    const regex = /^[0-9a-zA-zaáàạãâấầẫậăắằặẵeéèẹẽêếềệễiíìịĩyýỳỹỵoóòõọôốồộỗơớờợỡuúùụũưứừựữđĐ -_]+$/;
    const checkingResult = regex.test(value);
    if (!checkingResult) {
      dispatch(
        slice.actions.validateClassName({
          error: "Tên lớp không hợp lệ!",
          value
        })
      );
    } else {
      dispatch(
        slice.actions.validateClassName({
          error: "",
          value
        })
      );
    }
  }
};

export const validateStartDate = value => dispatch => {
  if (value === "") {
    dispatch(
      slice.actions.validateStartDate({
        error: "Ngày bắt đầu không được để trống!",
        value
      })
    );
  } else {
    const regex = /^(?:(?:31(\/|-|\.)(?:0?[13578]|1[02]))\1|(?:(?:29|30)(\/|-|\.)(?:0?[13-9]|1[0-2])\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|^(?:29(\/|-|\.)0?2\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\d|2[0-8])(\/|-|\.)(?:(?:0?[1-9])|(?:1[0-2]))\4(?:(?:1[6-9]|[2-9]\d)?\d{2})$/;
    const checkingResult = regex.test(value);
    if (!checkingResult) {
      dispatch(
        slice.actions.validateStartDate({
          error: "Ngày bắt đầu không hợp lệ!",
          value
        })
      );
    } else {
      dispatch(slice.actions.validateStartDate({ error: "", value }));
    }
  }
};

export const validateExpectedEndDate = value => dispatch => {
  if (value === "") {
    dispatch(
      slice.actions.validateExpectedEndDate({
        error: "Ngày dự kiến kết thúc không được để trống!",
        value
      })
    );
  } else {
    const regex = /^(?:(?:31(\/|-|\.)(?:0?[13578]|1[02]))\1|(?:(?:29|30)(\/|-|\.)(?:0?[13-9]|1[0-2])\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|^(?:29(\/|-|\.)0?2\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\d|2[0-8])(\/|-|\.)(?:(?:0?[1-9])|(?:1[0-2]))\4(?:(?:1[6-9]|[2-9]\d)?\d{2})$/;
    const checkingResult = regex.test(value);
    if (!checkingResult) {
      dispatch(
        slice.actions.validateExpectedEndDate({
          error: "Ngày dự kiến kết thúc không hợp lệ!",
          value
        })
      );
    } else {
      dispatch(slice.actions.validateExpectedEndDate({ error: "", value }));
    }
  }
};

export const validateEndDate = value => dispatch => {
  if (value !== "") {
    const regex = /^(?:(?:31(\/|-|\.)(?:0?[13578]|1[02]))\1|(?:(?:29|30)(\/|-|\.)(?:0?[13-9]|1[0-2])\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|^(?:29(\/|-|\.)0?2\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\d|2[0-8])(\/|-|\.)(?:(?:0?[1-9])|(?:1[0-2]))\4(?:(?:1[6-9]|[2-9]\d)?\d{2})$/;
    const checkingResult = regex.test(value);
    if (!checkingResult) {
      dispatch(
        slice.actions.validateEndDate({
          error: "Ngày kết thúc không hợp lệ!",
          value
        })
      );
    } else {
      dispatch(slice.actions.validateEndDate({ error: "", value }));
    }
  }
};

export const validateCsId = value => dispatch => {
  if (value === "") {
    dispatch(
      slice.actions.validateCsId({
        error: "Trạng thái lớp học không được bỏ trống!",
        value
      })
    );
  } else {
    dispatch(slice.actions.validateCsId({ error: "", value }));
  }
};

export default slice;
