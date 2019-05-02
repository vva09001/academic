import React from "react";

import ListDialog from "../../../../theme/Dialog/ListDialog";
import ConfirmNotice from "../../../../components/Notice/Confirm";
import ResultNotice from "../../../../components/Notice/Result";

import Content from "./Content.container";
import Footer from "./Footer.container";
import ListAddStudent from "../ListAddStudentDialog/ListAddStudent.container";

const ListStudent = props => {
  let content = <Content />;
  let footer = <Footer />;

  const changeClass = () => {
    props.changeStudentClass(props.studentId, props.classId, props.endDate);
    props.closeChangeClassConfirm();
    props.openChangeClassResult();
  };

  return (
    <React.Fragment>
      <ListDialog
        open={props.isListStudentDialogOpen}
        handleClose={() => props.closeListStudentDialog()}
        dialogName={`Danh sách học sinh trong lớp ${props.classId}`}
        content={content}
        footer={footer}
      />
      <ListAddStudent />
      <ConfirmNotice
        handleClose={() => props.closeChangeClassConfirm()}
        confirmAction={changeClass}
        open={props.isChangeClassConfirmOpen}
        title={`Chuyển lớp học chính cho học sinh có mã số ${
          props.studentId
        } sang lớp này`}
      />
      <ResultNotice
        handleClose={() => props.closeChangeClassResult()}
        open={props.isChangeClassResultOpen}
        title={
          props.isPostingSuccess
            ? "Chuyển lớp thành công"
            : "Chuyển lớp thất bại"
        }
      />
    </React.Fragment>
  );
};

export default ListStudent;
