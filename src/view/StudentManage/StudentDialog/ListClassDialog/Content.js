import React, { useEffect } from "react";
import moment from "moment";
import NoData from "../../../../theme/NoData";
import Loading from "../../../../components/Loading";
import Pagination from "../../../../components/Pagination";

const Content = props => {
  useEffect(() => {
    props.getListStudentClass(props.studentId, props.listClassPage);
  }, []);

  const listStudentClass = props.listStudentClass.map(e => (
    <tr key={e._VtcaClass.classId}>
      <td>{e._VtcaClass.classId}</td>
      <td>{e._VtcaClass.className}</td>
      <td>{e._VtcaClass._ClassStatus.csName}</td>
      <td>{moment(e.inDate).format("DD/MM/YYYY")}</td>
      <td>
        {e.outDate !== null ? moment(e.outDate).format("DD/MM/YYYY") : ""}
      </td>
    </tr>
  ));

  return (
    <React.Fragment>
      <table className="table table-sm">
        <thead>
          <tr>
            <th>Mã</th>
            <th>Tên lớp</th>
            <th>Trạng thái</th>
            <th>Ngày vào lớp</th>
            <th>Ngày hoàn thành</th>
          </tr>
        </thead>
        {props.listStudentClass.length > 0 && <tbody>{listStudentClass}</tbody>}
      </table>
      {props.loadingListClass && (
        <Loading type="TailSpin" height={25} width={25} color="#203e7d" />
      )}
      {props.listStudentClass.length < 1 && <NoData />}
      {Math.ceil(props.totalStudentClass / 30) > 1 && (
        <Pagination
          page={props.listClassPage}
          maxPage={Math.ceil(props.totalStudentClass / 30)}
          onPressEnter={page =>
            props.getListStudentClass(props.studentId, page)
          }
          prevPage={page => props.getListStudentClass(props.studentId, page)}
          nextPage={page => props.getListStudentClass(props.studentId, page)}
        />
      )}
    </React.Fragment>
  );
};

export default Content;
