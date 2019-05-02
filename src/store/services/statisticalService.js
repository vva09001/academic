import fetch from "../utils/fetch";

const statisticalService = {
  /*-----------------------------------------------------------------------------------*/
  /* Thống kê dữ liệu sinh viên */

  /* Lấy ra tất cả trạng thái của học sinh */

  getStudentStatus: () => fetch.get(`/studentstatus`).then(res => res.data.studentStatuses),

  /* Lấy ra tổng số sinh viên */

  getTotalStudent: () => fetch.get(`/students`).then(res => res.data.count),

  /* Lấy ra tổng số sinh viên thiết kế */
  getstudents3DAnimtion: () => fetch.get(`students/search?query=&programme_id=3DA_18.09`).then(res => res.data.count),
  getstudents3DAModeling: () => fetch.get(`students/search?query=&programme_id=3DM_18.09`).then(res => res.data.count),
  getstudentsDGD: () => fetch.get(`students/search?query=&programme_id=GDG_18.09`).then(res => res.data.count),
  getstudentsVFX: () => fetch.get(`students/search?query=&programme_id=VFX_18.09`).then(res => res.data.count),

  /* Lấy ra tổng số sinh viên lập trình */
  getstudentsGD: () => fetch.get(`students/search?query=&programme_id=GD_18.09`).then(res => res.data.count),
  getstudentsMD: () => fetch.get(`students/search?query=&programme_id=MD_18.09`).then(res => res.data.count),
  getstudentsWD: () => fetch.get(`students/search?query=&programme_id=WD_18.09`).then(res => res.data.count),
  /* Lấy ra tổng sinh viên đang học */

  getLearingStudent: () =>
    fetch.get(`students/search?query=&ss_id=2`).then(res => res.data.count),

  /* Lấy ra tổng sinh viên đang bảo lưu */

  getReservingStudent: () =>
    fetch.get(`students/search?query=&ss_id=3`).then(res => res.data.count),

  /* Lấy ra tổng sinh viên đang chờ lớp */

  getWaitingClassStudent: () =>
    fetch.get(`students/search?query=&ss_id=4`).then(res => res.data.count),

  /*-----------------------------------------------------------------------------------*/
  /* Thống kê dữ liệu lớp học */

  /* Lấy ra tất cả trạng thái lớp */

  getClassStatus: () => fetch.get(`/classstatus`).then(res => res.data.classStatuses),

  /* Lấy ra tổng số lớp */

  getTotalCLass: () => fetch.get(`/vtcaclass`).then(res => res.data.count),

  /* Lấy ra tổng số lớp chuyên nghành lập trình */

  /* Lấy ra tổng số lớp chuyên nghành thiết kế  */

  /* Lấy ra tổng số lớp đang làm project */

  getDoingProjectClass: () =>
    fetch.get(`/vtcaclass/search?query=&cs_id=2`).then(res => res.data.count),

  /* Lấy ra tổng số lớp đang làm project chuyên nghành thiết kế */
  // Lấy ra tổng số sinh viên đang học
  getDoingClass: () =>
    fetch.get(`/vtcaclass/search?query=&cs_id=1`).then(res => res.data.count),

  // lấy ra tổng số lớp đang tạm dừng
  getClassPause: () =>
    fetch.get(`/vtcaclass/search?query=&cs_id=3`).then(res => res.data.count),

  // lấy ra tổng số lớp kết thúc
  getClassComplete: () =>
    fetch.get(`/vtcaclass/search?query=&cs_id=5`).then(res => res.data.count),
  /* Lấy ra tổng số lớp đang làm project chuyên nghành lập trình */

  /*-----------------------------------------------------------------------------------*/
  /* Thông kê chuyên nghành */

  /* Lấy ra tất cả các chuyên nghành */

  getAllProgram: () => fetch.get(`/programme?isActive=true`).then(res => res.data)
};

export default statisticalService;
