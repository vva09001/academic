import React from "react";
import { create } from "react-test-renderer";
import { StudentStatus, AllProgram } from "../Filter";

describe("StudentStatus Component", () => {
  it("Test StudentStatus component it work", () => {
    const component = create(<StudentStatus />).toJSON();
    expect(component).toMatchSnapshot();
  });
  exports[`Rerender StudentStatus component`] = (
    <StudentStatus list={[Array]} filterByStudentStatus={[Function]} />
  );

  it("Test AllProgram component it work", () => {
    const component = create(<AllProgram />).toJSON();
    expect(component).toMatchSnapshot();
  });
  exports[`Rerender AllProgram component`] = (
    <AllProgram list={undefined} filterByProgram={[Function]} />
  );
});
