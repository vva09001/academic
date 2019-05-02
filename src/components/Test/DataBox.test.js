import React from "react";
import { create } from "react-test-renderer";
import DataBox from "../DataBox";

describe("DataBox Component", () => {
  it("Test DataBox component it work", () => {
    const component = create(<DataBox />).toJSON();
    expect(component).toMatchSnapshot();
  });
  exports[`Rerender DataBox component`] = (
    <DataBox title={undefined} value={undefined} />
  );
});
