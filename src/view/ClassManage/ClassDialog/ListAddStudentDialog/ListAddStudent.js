import React from "react";

import ListDialog from "../../../../theme/Dialog/ListDialog";
import ConfirmNotice from "../../../../components/Notice/Confirm";
import ResultNotice from "../../../../components/Notice/Result";

import Content from "./Content.container";
import Footer from "./Footer.container";

const ListAddStudent = props => {
  const addStudentToClass = () => {
    props.addStudentIntoClass(props.classId, props.studentId, props.endDate);
    props.openAddStudentResult();
    props.closeAddStudentConfirm();
  };
  let content = <Content />;
  let footer = <Footer />;
  return (
    <React.Fragment>
      <ListDialog
        open={props.isListAddStudentDialogOpen}
        handleClose={() => props.closeListAddStudentDialog()}
        dialogName="Thêm học sinh vào lớp"
        content={content}
        footer={footer}
      />
      <ConfirmNotice
        handleClose={() => props.closeAddStudentConfirm()}
        confirmAction={addStudentToClass}
        open={props.isAddStudentConfirmOpen}
        title="Thêm học sinh vào lớp?"
      />
      <ResultNotice
        open={props.isAddStudentResultOpen}
        handleClose={() => props.closeAddStudentResult()}
        title={
          props.isPostingSuccess
            ? "Thêm học sinh vào lớp thành công"
            : "Thêm học sinh vào lớp thất bại"
        }
      />
    </React.Fragment>
  );
};

export default ListAddStudent;
