import React from "react";
import { create } from "react-test-renderer";
import Search from "../Search";

describe("SearchComponent", () => {
  it("Test Search component it work", () => {
    const component = create(<Search />).toJSON();
    expect(component).toMatchSnapshot();
  });
  exports[`Rerender Search component`] = (
    <Search
      onKeyPressSearch={Function}
      onClickSearch={[Function]}
      placeholder={[String]}
    />
  );
});
