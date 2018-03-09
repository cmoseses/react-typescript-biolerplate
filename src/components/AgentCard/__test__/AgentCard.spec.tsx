import * as React from "react";
import { mount, ReactWrapper } from "enzyme";
import { fromJS } from "immutable";
import { AGENT_TYPE, AGENT_STATE, AGENT_TYPES } from "../../../types";

import AgentCard from "../AgentCard";

let wrapper: ReactWrapper;
const addSpecifyResources = jest.fn();
const removeSpecifyResource = jest.fn();
const agent = fromJS({
  name: "bjstdmngbgr02.thinkpad.com",
  ip: "192.168.1.2",
  path: "/var/lib/cruise-agent",
  type: AGENT_TYPE.PHYSICAL,
  state: AGENT_STATE.IDLE,
  resources: ["ubuntu", "firefox3", "core-duo"]
});
beforeEach(() => {
  wrapper = mount(
    <AgentCard
      addSpecifyResources={addSpecifyResources}
      removeSpecifyResource={removeSpecifyResource}
      agent={agent}
    />
  );
});

describe("Agent", () => {
  it("should render deny when state is idle", () => {
    expect(wrapper.find(".glyphicon-ban-circle")).toBeTruthy();
  });
  it("should call removeSpecifyResource when click remove", () => {
    wrapper
      .find(".glyphicon-remove-circle")
      .first()
      .simulate("click");

    expect(removeSpecifyResource).toBeCalled();
  });
  it("should call addSpecifyResources when click add", () => {
    wrapper
      .find("a")
      .first()
      .simulate("click");

    wrapper
      .find(".popover-content")
      .find("input")
      .first()
      .simulate("keydown", { which: "a" });
    wrapper
      .find("button.custom-button")
      .first()
      .simulate("click");

    expect(addSpecifyResources).toBeCalled();
  });
});
