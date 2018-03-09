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
describe("Summary", () => {
  it("should render building count", () => {
    expect(
      wrapper
        .find(".summary")
        .find(".custom-panel")
        .find("tr")
        .first()
        .children()
        .last()
        .text()
    ).toEqual("2");
  });
  it("should render idle count", () => {
    expect(
      wrapper
        .find(".summary")
        .find(".custom-panel")
        .find("tr")
        .last()
        .children()
        .last()
        .text()
    ).toEqual("3");
  });
});
