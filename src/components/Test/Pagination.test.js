import React from "react";
import { create } from "react-test-renderer";
import Pagination from "../Pagination";

describe("Pagination Component", () => {
  it("Test Pagination component it work", () => {
    const component = create(<Pagination />).toJSON();
    expect(component).toMatchSnapshot();
  });
  exports[`Rerender Pagination component`] = (
    <Pagination
      maxPage={[Number]}
      page={[Number]}
      onPressEnter={[Function]}
      prevPage={[Number]}
      nextPage={[Number]}
    />
  );
});
