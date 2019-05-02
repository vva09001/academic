import React from "react";
import { create } from "react-test-renderer";
import Loading from "../Loading";

describe("Loading Component", () => {
  it("Test Loading component it work", () => {
    const component = create(<Loading />).toJSON();
    expect(component).toMatchSnapshot();
  });
  exports[`Rerender Loading component`] = (
    <Loading
      type={undefined}
      color={undefined}
      height={[Number]}
      width={[Number]}
    />
  );
});
