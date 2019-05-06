import React, { useEffect } from "react";

import Label from "../../../../theme/FormElement/Label";
import ErrorMsg from "../../../../theme/FormElement/ErrorMsg";

const ChildFromContent = props => {
  useEffect(() => {
    if (props.endDate !== null) {
      props.validateOutDate(props.endDate);
    }
  }, []);

  return (
    <React.Fragment>
      <div className="form childForm">
        <Label
          classes="formItem"
          labelName="Ngày hoàn thành:"
          placeholder='nhập ngày / tháng / năm  vd: "30/4/2018"'
          name="outDate"
          type="text"
          value={props.validatedOutDate}
          onChange={e => props.validateOutDate(e.target.value)}
          onBlur={e => props.validateOutDate(e.target.value)}
        />
        <ErrorMsg error={props.outDate_err} />
      </div>
    </React.Fragment>
  );
};

export default ChildFromContent;
