import React, { useEffect } from "react";
import NoData from "../../../../theme/NoData";
import Loading from "../../../../components/Loading";

const Content = props => {
  useEffect(() => {
    props.classStudent(props.classId);
  }, [props.posting]);

  const listStudent = props.listStudent.map(e => (
    <tr key={e.studentId} onClick={() => props.openChangeClassConfirm(e)}>
      <td>{e.studentId}</td>
      <td>{e.fullName}</td>
      <td>{e._StudentStatus.ssName.split("")}</td>
      <td>{e._Programme.programmeName}</td>
    </tr>
  ));

  return (
    <React.Fragment>
      <table className="table table-sm">
        <thead>
          <tr>
            <th>Mã</th>
            <th>Họ & Tên</th>
            <th>Trạng thái</th>
            <th>Chuyên nghành</th>
          </tr>
        </thead>
        {props.listStudent.length > 0 && <tbody>{listStudent}</tbody>}
      </table>
      {props.loadingStudent && <Loading type="TailSpin" height={25} width={25} color="#203e7d" />}
      {props.listStudent.length < 1 && <NoData />}
    </React.Fragment>
  );
};

export default Content;
