import React from "react";
import moment from "moment";
import EditIcon from "../../assets/svgComponents/Edit";

const StudentData = props => {
  const listStudent = props.list.map(e => {
    let birthday = e.birthday.toString();
    return (
      <tr key={e.studentId} className="tablerow" onClick={() => props.openDetailDialog(e)}>
        <td className="sId">{e.studentId}</td>
        <td className="sFullname">
          {e.fullName}
        </td>
        <td className="sBirth">{moment(birthday).format("DD/MM/YYYY")}</td>
        <td className="sIdcard">{e.idCardNo}</td>
        <td className="sPhone">
          <a id="tel" href={"tel:" + e.phoneNo}>
            {e.phoneNo}
          </a>
        </td>
        <td className="sClass">{e.vtcaMainClass.classId}</td>
        <td className="status">{e._StudentStatus.ssName.split("")}</td>
        <td className="program sProgram">{e._Programme.programmeName}</td>
        <td>
          <EditIcon
            height={20}
            width={20}
            fill="#203e7d"
            classes="editIcon"
            onClick={() => props.openEditDialog(e)}
          />
        </td>
      </tr>
    );
  });
  return (
    <React.Fragment>
      <tbody>{listStudent}</tbody>
    </React.Fragment>
  );
};

export default StudentData;
