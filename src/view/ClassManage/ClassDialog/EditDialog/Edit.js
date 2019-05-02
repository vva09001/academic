import React from "react";

import ClassDialog from "../../../../theme/Dialog/ClassDialog";
import ConfirmNotice from "../../../../components/Notice/Confirm";
import ResultNotice from "../../../../components/Notice/Result";

import Footer from "./Footer.container";
import Content from "./Content.container";

const Edit = props => {
  const closeEditClassDialog = () => {
    props.closeEditClassDialog();
    props.resetValidate();
  };

  const openConfirmNotice = () => {
    if (
      JSON.stringify(props.validatedClassForm) ===
      JSON.stringify(props.editClassDialogData)
    ) {
      props.openErrorNotice();
    } else if (
      props.className_err === "" &&
      props.startDate_err === "" &&
      props.expectedEndDate_err === "" &&
      props.csId_err === ""
    ) {
      props.openEditConfirm();
    }
  };

  const postClass = () => {
    props.editClass(props.validatedClassForm, props.validatedClassForm.classId)
    props.openEditResult();
    closeEditClassDialog();
    props.closeEditConfirm();
  };

  let footer = <Footer openConfirmNotice={openConfirmNotice} />;
  let content = <Content />;
  let dialogName = `Chỉnh sửa thông tin lớp học mã: ${props.editClassDialogData.classId}`
  return (
    <React.Fragment>
      <ClassDialog
        handleClose={closeEditClassDialog}
        open={props.isEditDialogOpen}
        footer={footer}
        content={content}
        dialogName={dialogName}
      />
      <ConfirmNotice
        handleClose={() => props.closeEditConfirm()}
        confirmAction={postClass}
        open={props.isEditConfirmOpen}
        title="Chỉnh sửa thông tin lớp học?"
      />
      <ResultNotice
        open={props.isEditResultOpen}
        handleClose={() => props.closeEditResult()}
        title={
          props.isPostingSuccess
            ? "Chỉnh sửa thông tin lớp học thành công"
            : "Chỉnh sửa thông tin lớp học thất bại"
        }
      />
      <ResultNotice
        open={props.isErrorOpen}
        handleClose={() => props.closeErrorNotice()}
        title="Thông tin lớp học chưa được thay đổi"
      />
    </React.Fragment>
  );
};

export default Edit;
