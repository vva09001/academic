import React, { useEffect } from "react";

import Label from "../../../../theme/FormElement/Label";
import ErrorMsg from "../../../../theme/FormElement/ErrorMsg";
import Select from "../../../../theme/FormElement/Select";
import { listClassStatus } from "../../../../store/utils/listObj";

const Content = props => {
  useEffect(() => {
    props.validateClassId(props.editClassDialogData.classId);
    props.validateClassName(props.editClassDialogData.className);
    props.validateStartDate(props.editClassDialogData.startDate);
    props.validateExpectedEndDate(props.editClassDialogData.expectedEndDate);
    props.validateCsId(props.editClassDialogData.csId);
    props.validateEndDate(props.editClassDialogData.endDate);
  }, []);
  return (
    <React.Fragment>
      <div className="form addForm">
        <Label
          classes="formItem"
          labelName="Tên lớp*:"
          name="className"
          type="text"
          value={props.validatedClassForm.className}
          onChange={e => props.validateClassName(e.target.value)}
          onBlur={e => props.validateClassName(e.target.value)}
        />
        <ErrorMsg error={props.className_err} />
        <Label
          classes="formItem"
          labelName="Ngày bắt đầu*:"
          placeholder='nhập ngày / tháng / năm  vd: "30/4/2018"'
          name="startDate"
          type="text"
          value={props.validatedClassForm.startDate}
          onChange={e => props.validateStartDate(e.target.value)}
          onBlur={e => props.validateStartDate(e.target.value)}
        />
        <ErrorMsg error={props.startDate_err} />
        <Label
          classes="formItem"
          labelName="Ngày dự kiến kết thúc*:"
          placeholder='nhập ngày / tháng / năm  vd: "30/4/2018"'
          name="expectedEndDate"
          type="text"
          value={props.validatedClassForm.expectedEndDate}
          onChange={e => props.validateExpectedEndDate(e.target.value)}
          onBlur={e => props.validateExpectedEndDate(e.target.value)}
        />
        <ErrorMsg error={props.expectedEndDate_err} />
        <Label
          classes="formItem"
          labelName="Ngày kết thúc*:"
          placeholder='nhập ngày / tháng / năm  vd: "30/4/2018"'
          name="endDate"
          type="text"
          value={props.validatedClassForm.endDate}
          onChange={e => props.validateEndDate(e.target.value)}
          onBlur={e => props.validateEndDate(e.target.value)}
        />
        <ErrorMsg error={props.endDate_err} />
        <Select
          classes="formItem"
          title="Trạng thái*:"
          value={props.validatedClassForm.csId}
          list={listClassStatus}
          onChange={e => props.validateCsId(e.target.value)}
          onBlur={e => props.validateCsId(e.target.value)}
        />
        <ErrorMsg error={props.csId_err} />
      </div>
    </React.Fragment>
  );
};

export default Content;
