import React from "react";
import { create } from "react-test-renderer";
import Confirm from "../Notice/Confirm";
import Result from "../Notice/Result";

describe("Notice Testing", () => {
  it("Test Result component it work", () => {
    const component = create(<Result />).toJSON();
    expect(component).toMatchSnapshot();
  });
  exports[`Rerender Search component`] = (
    <Result handleClose={[Function]} open={undefined} title={[Text]} />
  );
  it("Test Confirm component it work", () => {
    const component = create(<Confirm />).toJSON();
    expect(component).toMatchSnapshot();
  });
  exports[`Rerender Notice component`] = (
    <Confirm
      handleClose={[Function]}
      confirmAction={[Function]}
      open={undefined}
      title={[String]}
    />
  );
});
