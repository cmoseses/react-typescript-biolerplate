import * as React from "react";
import { mount, ReactWrapper } from "enzyme";
import { fromJS } from "immutable";
import { AGENT_TYPE, AGENT_STATE } from "../../../types";
import { Provider } from "react-redux";
import configureStore from "../../../store/configureStore";
let store: any;
let wrapper: ReactWrapper;
import Cruise from "../../../components/Cruise";
beforeEach(() => {
  store = configureStore();
  wrapper = mount(
    <Provider store={store}>
      <Cruise />
    </Provider>
  );
});
describe("AgentCard", () => {
  it("should render deny when state is idle", () => {
    expect(wrapper.find(".glyphicon-ban-circle").length).toEqual(2);
  });

  it("should call removeSpecifyResource when click remove", () => {
    wrapper
      .find(".glyphicon-remove-circle")
      .first()
      .simulate("click");
    expect(
      wrapper
        .find(".resources-content")
        .first()
        .children().length
    ).toEqual(2);
  });

  it("should call addSpecifyResources when click add", () => {
    wrapper
      .find(".agent-card")
      .first()
      .find("a")
      .first()
      .simulate("click");

    let input: any = wrapper.find(".popover-content").find("input");
    input.instance().value = "aaa,bbb,ccc,aaa";
    input.simulate("change");

    wrapper
      .find(".popover-content")
      .find(".custom-button")
      .first()
      .simulate("click");

    expect(
      wrapper
        .find(".agent-card")
        .first()
        .find(".resources-content")
        .first()
        .children().length
    ).toEqual(6);
  });
});
