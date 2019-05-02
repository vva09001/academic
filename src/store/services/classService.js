import fetch from "../utils/fetch";
import moment from "moment";

const classService = {
  /*Lấy ra danh sách các lớp học */

  getClassData: page =>
    fetch.get(`vtcaclass?page=${page}&page_size=30`).then(res => res.data),

  /*Tìm kiếm lớp học */

  searchClass: (searchQuery, cs_id, page) =>
    fetch
      .get(
        `vtcaclass/search?query=${searchQuery}&cs_id=${cs_id}&page=${page}&page_size=30`
      )
      .then(res => res.data),

  /*Thêm mới lớp học */

  addClass: form =>
    fetch
      .post(`/vtcaclass`, {
        classId: form.classId,
        className: form.className,
        startDate: moment(form.startDate, "DD/MM/YYYY").format("YYYY/MM/DD"),
        expectedEndDate: moment(form.expectedEndDate, "DD/MM/YYYY").format(
          "YYYY/MM/DD"
        ),
        endDate: null,
        _ClassStatus: {
          csId: form.csId,
          csName: null,
          csDesc: null
        }
      })
      .then(res => res.data),

  /*Chỉnh sửa thông tin lớp học */

  editClass: (form, classId) => {
    let endDate;
    if (form.endDate === "") {
      endDate = null;
    } else {
      endDate = moment(form.endDate, "DD/MM/YYYY").format("YYYY/MM/DD");
    }
    fetch
      .put(`/VtcaClass/${classId}`, {
        classId: form.classId,
        className: form.className,
        startDate: moment(form.startDate, "DD/MM/YYYY").format("YYYY/MM/DD"),
        expectedEndDate: moment(form.expectedEndDate, "DD/MM/YYYY").format(
          "YYYY/MM/DD"
        ),
        endDate: endDate,
        _ClassStatus: {
          csId: form.csId,
          csName: null,
          csDesc: null
        }
      })
      .then(res => res.data);
  },

  /*Lấy danh sách học sinh trong lớp */

  classStudent: classId =>
    fetch
      .get(`/classstudent?classid=${classId}&page=1&page_size=100`)
      .then(res => res.data),

  /*Thêm học sinh vào một lớp */

  addStudentIntoClass: (classId, studentId, endDate) => {
    let outDate;
    if (endDate === null) {
      outDate = null;
    } else {
      outDate = moment(endDate, "DD/MM/YYYY").format("YYYY/MM/DD");
    }
    fetch
      .post(`/classstudent`, {
        _Student: {
          StudentId: studentId
        },
        _VtcaClass: {
          ClassId: classId
        },
        InDate: moment().format("YYYY/MM/DD"),
        OutDate: outDate
      })
      .then(res => res.data);
  },

  /*Chuyển lớp cho học sinh*/

  changeClass: (studentId, classId, endDate) => {
    let outDate;
    if (endDate === null) {
      outDate = null;
    } else {
      outDate = moment(endDate).format("YYYY/MM/DD");
    }
    fetch
      .put(`/classstudent/${studentId}`, {
        _Student: {
          StudentId: studentId
        },
        _VtcaClass: {
          ClassId: classId
        },
        InDate: moment().format("YYYY/MM/DD"),
        OutDate: outDate
      })
      .then(res => res.data);
  }
};

export default classService;
