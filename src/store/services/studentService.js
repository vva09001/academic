import fetch from "../utils/fetch";
import moment from "moment";

const studentService = {
  /*Lấy ra danh sách sinh viên*/

  getStudentData: page =>
    fetch.get(`students?page=${page}&page_size=30`).then(res => res.data),
  
    /*Tìm kiếm học sinh */

  searchStudent: (searchKey, class_id, ss_id, programme_id, page) =>
    fetch
      .get(
        `/students/search?query=${searchKey}&class_id=${class_id}&ss_id=${ss_id}&programme_id=${programme_id}&page=${page}&page_size=30`
      )
      .then(res => res.data),

  /*Thêm mới học sinh */

  addStudent: form =>
    fetch
      .post(`/students`, {
        StudentId: null,
        _StudentStatus: {
          SsId: 1,
          SsName: null,
          SsDesc: null
        },
        _Programme: {
          ProgrammeId: form.programmeId,
          ProgrammeName: null,
          LastUpdate: null,
          ProgrammeType: null,
          ProgrammeVersion: null,
          Active: null,
          ProgrammeDesc: null,
          Semesters: null
        },
        FullName: form.fullName,
        Gender: form.gender,
        Email: form.email,
        PersonalEmail: form.personalEmail,
        PhoneNo: form.phoneNo,
        IdCardNo: form.idCardNo,
        Birthday: moment(form.birthday, "DD/MM/YYYY").format("YYYY/MM/DD"),
        Address: form.address,
        AdmissionDate: null,
        FamilyInfo: null,
        Note: form.note,
        VtcaMainClass: null
      })
      .then(res => res.data),

  /*chỉnh sửa thông tin học sinh */

  editStudent: (form, studentId) =>
    fetch
      .put(`/students/${studentId}`, {
        StudentId: studentId,
        _StudentStatus: {
          SsId: form.ssId,
          SsName: null,
          SsDesc: null
        },
        _Programme: {
          ProgrammeId: form.programmeId,
          ProgrammeName: null,
          LastUpdate: null,
          ProgrammeType: null,
          ProgrammeVersion: null,
          Active: null,
          ProgrammeDesc: null,
          Semesters: null
        },
        FullName: form.fullName,
        Gender: form.gender,
        Email: form.email,
        PersonalEmail: null,
        PhoneNo: form.phoneNo,
        IdCardNo: form.idCardNo,
        Birthday: moment(form.birthday, "DD/MM/YYYY").format("YYYY/MM/DD"),
        Address: form.address,
        AdmissionDate: null,
        FamilyInfo: null,
        Note: form.note,
        VtcaMainClass: null
      })
      .then(res => res.data)
};

export default studentService;
