import React from "react";
import moment from "moment";

import EditIcon from "../../assets/svgComponents/Edit";

const ClassData = props => {
  const openEditClassDialog = (event,e) => {
    event.stopPropagation();
    props.openEditClassDialog(e);
  };

  const listClass = props.list.map(e => {
    let startDate = e.startDate.toString();
    let expectedEndDate = e.expectedEndDate.toString();
    let endDate = "";
    if (e.endDate !== null) {
      endDate = moment(e.endDate.toString()).format("DD/MM/YYYY");
    }
    return (
      <tr
        key={e.classId}
        className="tablerow"
        onClick={() => props.openListStudentDialog(e)}
      >
        <td className="cId">{e.classId}</td>
        <td className="cFullname">{e.className}</td>
        <td className="cStartDate">{moment(startDate).format("DD/MM/YYYY")}</td>
        <td className="ceEndDate">{moment(expectedEndDate).format("DD/MM/YYYY")}</td>
        <td className="cEndDate">{endDate}</td>
        <td className="classesStatus cstatus">{e._ClassStatus.csName.split("")}</td>
        <td>
          <EditIcon
            height={20}
            width={20}
            fill="#203e7d"
            classes="editIcon"
            onClick={(event) => openEditClassDialog(event,e)}
          />
        </td>
      </tr>
    );
  });
  return (
    <React.Fragment>
      <tbody>{listClass}</tbody>
    </React.Fragment>
  );
};

export default ClassData;
