import React from "react";

import ListDialog from "../../../../theme/Dialog/ListDialog";
import ConfirmNotice from "../../../../components/Notice/Confirm";
import ResultNotice from "../../../../components/Notice/Result";
import ChildForm from "../../../../theme/Dialog/ChildForm";

import Content from "./Content.container";
import Footer from "./Footer.container";
import ChildFormContent from "./ChildFormContent.container";

const ListAddStudent = props => {
  const openAddStudentConfirm = () => {
    props.validateOutDate(props.validatedOutDate);
    if (props.outDate_err === "") {
      props.openAddStudentConfirm();
    }
  };

  const addStudentToClass = () => {
    if(props.isOutDateInputOpen === true) {
      props.addStudentIntoClass(props.classId, props.studentData, props.validatedOutDate);
    } else {
      props.addStudentIntoClass(props.classId, props.studentData, props.endDate);
    }
    props.openAddStudentResult();
    props.closeAddStudentConfirm();
  };

  const closeListAddStudentDialog = () => {
    props.closeListAddStudentDialog();
    props.resetState();
  };

  const closeOutDateInput = () => {
    props.closeOutDateInput();
    props.resetValidate();
  };

  const closeAddStudentResult = () => {
    props.closeAddStudentResult();
    if(props.isOutDateInputOpen === true) {
      props.closeOutDateInput();
      props.resetValidate();
    } else {
      props.closeAddStudentNoMainClassConfirm();
    }
  }

  let content = <Content />;
  let footer = <Footer />;
  let childFormContent = <ChildFormContent />;
  return (
    <React.Fragment>
      <ListDialog
        open={props.isListAddStudentDialogOpen}
        handleClose={closeListAddStudentDialog}
        dialogName="Thêm sinh viên vào lớp"
        content={content}
        footer={footer}
      />
      <ChildForm
        handleClose={closeOutDateInput}
        confirmAction={openAddStudentConfirm}
        open={props.isOutDateInputOpen}
        content={childFormContent}
        title="Sinh viên này đã có lớp chính đây sẽ là lớp phụ của sinh viên, nhập ngày hoàn thành lớp:"
      />
      <ConfirmNotice
        handleClose={() => props.closeAddStudentConfirm()}
        confirmAction={addStudentToClass}
        open={props.isAddStudentConfirmOpen}
        title="Thêm sinh viên vào lớp?"
      />
      <ConfirmNotice
        handleClose={() => props.closeAddStudentNoMainClassConfirm()}
        confirmAction={addStudentToClass}
        open={props.isAddStudentNoMainClassConfirmOpen}
        title="Sinh viên này chưa có lớp chính, thêm sinh viên vào lớp thì lớp chính của sinh viên sẽ là lớp này. Thêm sinh viên vào lớp?"
      />
      <ResultNotice
        open={props.isAddStudentResultOpen}
        handleClose={closeAddStudentResult}
        title={
          props.isPostingSuccess
            ? "Thêm sinh viên vào lớp thành công"
            : "Thêm sinh viên vào lớp thất bại"
        }
      />
    </React.Fragment>
  );
};

export default ListAddStudent;
