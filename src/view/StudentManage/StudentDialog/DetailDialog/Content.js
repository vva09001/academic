import React from "react";
import moment from "moment";

import Label from "../../../../theme/FormElement/Label";
import Textarea from "../../../../theme/FormElement/Textarea";

const Content = ({ data }) => {
  let birthday = data.birthday.toString();
  let admissionDate = data.admissionDate.toString();
  return (
    <React.Fragment>
      <div className="form detailForm">
        <Label
          classes="formItem"
          labelName="Họ và tên:"
          type="text"
          value={data.fullName}
          readOnly={true}
        />
        <Label
          classes="formItem"
          labelName="Chuyên nghành:"
          type="text"
          value={data._Programme.programmeName}
          readOnly={true}
        />
        <Label
          classes="formItem"
          labelName="Trạng thái:"
          type="text"
          value={data._StudentStatus.ssName.replace("", "")}
          readOnly={true}
        />
        <Label
          classes="formItem"
          labelName="Ngày nhập học:"
          type="text"
          value={moment(admissionDate).format("DD/MM/YYYY")}
          readOnly={true}
        />
        <Label
          classes="formItem"
          labelName="Giới tính:"
          type="text"
          value={data.gender === "M" ? "Nam" : "Nữ"}
          readOnly={true}
        />
        <Label
          classes="formItem"
          labelName="Ngày sinh:"
          type="text"
          value={moment(birthday).format("DD/MM/YYYY")}
          readOnly={true}
        />
        <Label
          classes="formItem"
          labelName="Số CMND:"
          type="text"
          value={data.idCardNo}
          readOnly={true}
        />
        <Label
          classes="formItem"
          labelName="Điện thoại:"
          type="text"
          value={data.phoneNo}
          readOnly={true}
        />
        <Label
          classes="formItem"
          labelName="Email:"
          type="text"
          value={data.email}
          readOnly={true}
        />
        <Label
          classes="formItem"
          labelName="Email cá nhân:"
          type="text"
          value={data.personalEmail}
          readOnly={true}
        />

        <Textarea
          classes="formItem"
          labelName="Địa chỉ:"
          rows={2}
          value={data.address}
          readOnly={true}
        />

        <Textarea
          classes="formItem"
          labelName="Ghi chú:"
          rows={2}
          value={data.note}
          readOnly={true}
        />
      </div>
    </React.Fragment>
  );
};

export default Content;
