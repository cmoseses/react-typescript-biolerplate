import * as React from "react";
import { mount, ReactWrapper } from "enzyme";
import { fromJS } from "immutable";
import { AGENT_TYPE, AGENT_STATE, AGENT_TYPES } from "../../../types";

import AgentTypeSelector from "../AgentTypeSelector";

let wrapper: ReactWrapper;
const updateSelectedAgentType = jest.fn();
beforeEach(() => {
  wrapper = mount(
    <AgentTypeSelector
      updateSelectedAgentType={updateSelectedAgentType}
      selectedAgentType={AGENT_TYPE.VIRTUAL}
    />
  );
});

describe("AgentTypeSelector", () => {
  it("should render header", () => {
    expect(
      wrapper
        .find("h4")
        .first()
        .text()
    ).toEqual("Agents");
  });

  it("should render all agent type buttons", () => {
    expect(wrapper.find("button").length).toEqual(AGENT_TYPES.length);
  });

  it("should render the style active button that is selectedAgentType", () => {
    expect(
      wrapper
        .find(".agent-type-selector")
        .find("button")
        .findWhere(
          x =>
            x.type() === "button" &&
            x.text() === AGENT_TYPE.VIRTUAL.toLocaleLowerCase()
        )
        .hasClass("active")
    ).toBeTruthy();
  });

  it("should call updateSelectedAgentType when one of it clicked", () => {
    wrapper
      .find(".agent-type-selector")
      .find("button")
      .findWhere(
        x =>
          x.type() === "button" &&
          x.text() === AGENT_TYPE.ALL.toLocaleLowerCase()
      )
      .simulate("click");

    expect(updateSelectedAgentType).toBeCalled();
  });
});
