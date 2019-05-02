import React from "react";

import StudentDialog from "../../../../theme/Dialog/StudentDialog";
import ConfirmNotice from "../../../../components/Notice/Confirm";
import ResultNotice from "../../../../components/Notice/Result";

import Content from "./Content.container";
import Side from "./Side.container";

const Add = props => {
  const closeAddDialog = () => {
    props.closeAddDialog();
    props.resetValidate();
  };

  const openConfirmNotice = () => {
    props.validateFullname(props.validatedForm.fullName);
    props.validateProgrammeId(props.validatedForm.programmeId);
    props.validateBirthday(props.validatedForm.birthday);
    if (
      props.validatedForm.fullName !== "" &&
      props.validatedForm.programmeId !== "" &&
      props.validatedForm.birthday !== "" &&
      props.fullName_err === "" &&
      props.idCardNo_err === "" &&
      props.phoneNo_err === "" &&
      props.email_err === "" &&
      props.personalEmail_err === ""
    ) {
      props.openAddConfirm();
    }
  };

  const postStudent = () => {
    props.addStudent(props.validatedForm);
    props.openAddResult();
    closeAddDialog();
    props.closeAddConfirm();
  };

  let side = <Side openConfirmNotice={openConfirmNotice} />;
  let content = <Content />;
  return (
    <React.Fragment>
      <StudentDialog
        handleClose={closeAddDialog}
        open={props.isAddDialogOpen}
        side={side}
        content={content}
        dialogName="Thêm mới thông tin sinh viên"
      />
      <ConfirmNotice
        handleClose={() => props.closeAddConfirm()}
        confirmAction={postStudent}
        open={props.isAddConfirmOpen}
        title="Thêm mới thông tin sinh viên?"
      />
      <ResultNotice
        open={props.isAddResultOpen}
        handleClose={() => props.closeAddResult()}
        title={
          props.isPostingSuccess
            ? "Thêm mới thông tin sinh viên thành công"
            : "Thêm mới thông tin sinh viên thất bại"
        }
      />
    </React.Fragment>
  );
};

export default Add;
