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
describe("Agents", () => {
  it("should render ALL agents when ALL clicked", () => {
    wrapper
      .find(".agent-type-selector")
      .find("button")
      .findWhere(
        x =>
          x.type() === "button" &&
          x.text() === AGENT_TYPE.ALL.toLocaleLowerCase()
      )
      .simulate("click");

    expect(wrapper.find(".agents").find(".gray-hole").length).toEqual(5);
  });
  it("should render PHYSICAL agents when PHYSICAL clicked", () => {
    wrapper
      .find(".agent-type-selector")
      .find("button")
      .findWhere(
        x =>
          x.type() === "button" &&
          x.text() === AGENT_TYPE.PHYSICAL.toLocaleLowerCase()
      )
      .simulate("click");

    expect(wrapper.find(".agents").find(".gray-hole").length).toEqual(4);
  });
  it("should render VIRTUAL agents when VIRTUAL clicked", () => {
    wrapper
      .find(".agent-type-selector")
      .find("button")
      .findWhere(
        x =>
          x.type() === "button" &&
          x.text() === AGENT_TYPE.VIRTUAL.toLocaleLowerCase()
      )
      .simulate("click");

    expect(wrapper.find(".agents").find(".gray-hole").length).toEqual(1);
  });
});
