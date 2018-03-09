import * as React from "react";
import { mount, ReactWrapper } from "enzyme";
import { fromJS } from "immutable";
import { AGENT_TYPE, AGENT_STATE } from "../../../types";
import { Provider } from "react-redux";
import configureStore from "../../../store/configureStore";
let store: any;
let wrapper: ReactWrapper;
import Cruise from "../Cruise";
beforeEach(() => {
  store = configureStore();
  wrapper = mount(
    <Provider store={store}>
      <Cruise />
    </Provider>
  );
});
describe("Cruise", () => {
  it("should render header", () => {
    expect(
      wrapper
        .find("header")
        .find("h2")
        .last()
        .text()
    ).toEqual("Cruise");
  });
  it("should render default tab", () => {
    expect(
      wrapper
        .find("h4")
        .first()
        .text()
    ).toEqual("Agents");
  });
  it("should render tab4 when click", () => {
    wrapper
      .find("#cruise-tab-4")
      .first()
      .simulate("click");
    expect(
      wrapper
        .find(".tab-pane")
        .last()
        .text()
    ).toEqual("Tab 4 content");
  });
});
