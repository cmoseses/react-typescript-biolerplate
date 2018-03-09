import * as React from "react";
import { mount, ReactWrapper } from "enzyme";
import { fromJS } from "immutable";
import { AGENT_TYPE, AGENT_STATE } from "../../../types";
import { Provider } from "react-redux";
import configureStore from "../../../store/configureStore";
import Agents from "../Agents";
import Cruise from "../../Cruise";

describe("Agents", () => {
  it("should render agent with right count", () => {
    const store = configureStore();
    const wrapper = mount(
      <Provider store={store}>
        <Cruise />
      </Provider>
    );
    expect(wrapper.find(".agents").find(".gray-hole").length).toEqual(4);
  });
});
