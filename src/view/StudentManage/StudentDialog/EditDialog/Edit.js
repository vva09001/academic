import React from "react";

import StudentDialog from "../../../../theme/Dialog/StudentDialog";
import ResultNotice from "../../../../components/Notice/Result";
import ConfirmNotice from "../../../../components/Notice/Confirm";

import Side from "./Side.container";
import Content from "./Content.container";

const Edit = props => {
  const closeEditDialog = () => {
    props.closeEditDialog();
    props.resetValidate();
  };

  const openConfirmNotice = () => {
    if (
      JSON.stringify(props.validatedForm) ===
      JSON.stringify(props.editDialogData)
    ) {
      props.openErrorNotice();
    } else if (
      props.validatedForm.fullName !== "" &&
      props.validatedForm.programmeId !== "" &&
      props.validatedForm.ssId !== "" &&
      props.validatedForm.birthday !== "" &&
      props.fullName_err === "" &&
      props.ssId_err === "" &&
      props.programmeId_err === "" &&
      props.birthday_err === "" &&
      props.idCardNo_err === "" &&
      props.phoneNo_err === "" &&
      props.email_err === "" &&
      props.personalEmail_err === ""
    ) {
      props.openEditConfirm();
    }
  };

  const postStudent = () => {
    props.editStudent(props.validatedForm, props.detailDialogData.studentId);
    props.openEditResult();
    closeEditDialog();
    props.closeEditConfirm();
  };

  let side = <Side openConfirmNotice={openConfirmNotice} />;
  let content = <Content />;
  return (
    <React.Fragment>
      <StudentDialog
        handleClose={closeEditDialog}
        open={props.isEditDialogOpen}
        side={side}
        content={content}
        dialogName="Chỉnh sửa thông tin sinh viên"
      />
      <ConfirmNotice
        handleClose={() => props.closeEditConfirm()}
        confirmAction={postStudent}
        open={props.isEditConfirmOpen}
        title="Chỉnh sửa thông tin sinh viên?"
      />
      <ResultNotice
        open={props.isEditResultOpen}
        handleClose={() => props.closeEditResult()}
        title={
          props.isPostingSuccess
            ? "Chỉnh sửa thông tin sinh viên thành công"
            : "Chỉnh sửa thông tin sinh viên thất bại"
        }
      />
       <ResultNotice
        open={props.isErrorOpen}
        handleClose={() => props.closeErrorNotice()}
        title="Thông tin sinh viên chưa được thay đổi"
      />
    </React.Fragment>
  );
};

export default Edit;
