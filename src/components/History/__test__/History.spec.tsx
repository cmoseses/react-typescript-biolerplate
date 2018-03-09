import * as React from "react";
import { mount } from "enzyme";
import { fromJS } from "immutable";

import History from "../History";
describe("History", () => {
  it("should render head", () => {
    const wrapper = mount(<History />);
    expect(
      wrapper
        .find("h4")
        .first()
        .text()
    ).toEqual("History");
  });
  it("should render body", () => {
    const wrapper = mount(<History />);
    expect(
      wrapper
        .find("p")
        .last()
        .text()
    ).toEqual("bjstdmngbgr02/Acceptance_test");
  });
});
