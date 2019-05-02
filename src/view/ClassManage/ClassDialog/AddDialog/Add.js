import React from "react";

import ClassDialog from "../../../../theme/Dialog/ClassDialog";
import ConfirmNotice from "../../../../components/Notice/Confirm";
import ResultNotice from "../../../../components/Notice/Result";

import Footer from "./Footer.container";
import Content from "./Content.container";

const Add = props => {
  const closeAddDialog = () => {
    props.closeAddDialog();
    props.resetValidate();
  };

  const openConfirmNotice = () => {
    props.validateClassId(props.validatedClassForm.classId);
    props.validateClassName(props.validatedClassForm.className);
    props.validateStartDate(props.validatedClassForm.startDate);
    props.validateExpectedEndDate(props.validatedClassForm.expectedEndDate);
    props.validateCsId(props.validatedClassForm.csId);
    if (
      props.validatedClassForm.classId !== "" &&
      props.validatedClassForm.className !== "" &&
      props.validatedClassForm.startDate !== "" &&
      props.validatedClassForm.expectedEndDate !== "" &&
      props.validatedClassForm.csId !== "" &&
      props.classId_err === "" &&
      props.className_err === "" &&
      props.startdate_err === "" &&
      props.expectedEndDate_err === "" &&
      props.csId_err === ""
    ) {
      props.openAddConfirm();
    }
  };

  const postStudent = () => {
    props.addClass(props.validatedClassForm);
    props.openAddResult();
    closeAddDialog();
    props.closeAddConfirm();
  };

  let footer = <Footer openConfirmNotice={openConfirmNotice} />;
  let content = <Content />;
  return (
    <React.Fragment>
      <ClassDialog
        handleClose={closeAddDialog}
        dialogName="Thêm mới lớp học"
        open={props.isAddDialogOpen}
        footer={footer}
        content={content}
      />
      <ConfirmNotice
        handleClose={() => props.closeAddConfirm()}
        confirmAction={postStudent}
        open={props.isAddConfirmOpen}
        title="Thêm mới thông tin lớp học?"
      />
      <ResultNotice
        open={props.isAddResultOpen}
        handleClose={() => props.closeAddResult()}
        title={
          props.isPostingSuccess
            ? "Thêm mới thông tin lớp học thành công"
            : "Thêm mới thông tin lớp học thất bại"
        }
      />
    </React.Fragment>
  );
};

export default Add;
