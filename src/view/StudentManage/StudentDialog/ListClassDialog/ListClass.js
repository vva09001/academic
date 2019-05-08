import React from "react";

import ListDialog from "../../../../theme/Dialog/ListDialog";

import Content from "./Content.container";
import Footer from "./Footer.container";

const ListClass = props => {
  let content = <Content />;
  let footer = <Footer />;

  return (
    <React.Fragment>
      <ListDialog
        open={props.isListClassOpen}
        handleClose={() => props.closeListClassDialog()}
        dialogName="Danh sách các lớp đã và đang học của sinh viên"
        content={content}
        footer={footer}
      />
    </React.Fragment>
  );
};

export default ListClass;
