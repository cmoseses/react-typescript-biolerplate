import * as React from "react";
import { mount, ReactWrapper } from "enzyme";
import { fromJS } from "immutable";
import { AGENT_TYPE, AGENT_STATE } from "../../../types";
import { Provider } from "react-redux";

let wrapper: ReactWrapper;
import Summary from "../Summary";
beforeEach(() => {
  wrapper = mount(<Summary idleAgentsCount={8} buildingAgentsCount={4} />);
});

describe("Summary", () => {
  it("should render header", () => {
    expect(
      wrapper
        .find(".summary")
        .find("h4")
        .first()
        .text()
    ).toEqual("Summary");
  });
  it("should render building count", () => {
    expect(
      wrapper
        .find(".custom-panel")
        .find("tr")
        .first()
        .children()
        .last()
        .text()
    ).toEqual("4");
  });
  it("should render idle count", () => {
    expect(
      wrapper
        .find(".custom-panel")
        .find("tr")
        .last()
        .children()
        .last()
        .text()
    ).toEqual("8");
  });
});
