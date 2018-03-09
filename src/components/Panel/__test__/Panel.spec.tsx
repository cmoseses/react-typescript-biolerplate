import * as React from "react";
import { mount } from "enzyme";
import { fromJS } from "immutable";

import Panel from "../Panel";
describe("Panel", () => {
  it("should render head", () => {
    const wrapper = mount(
      <Panel>
        <Panel.Head>head</Panel.Head>
        <Panel.Body>body</Panel.Body>
      </Panel>
    );
    expect(
      wrapper
        .find("h4")
        .first()
        .text()
    ).toEqual("head");
  });
  it("should render body", () => {
    const wrapper = mount(
      <Panel>
        <Panel.Head>head</Panel.Head>
        <Panel.Body>body</Panel.Body>
      </Panel>
    );
    expect(
      wrapper
        .find(".custom-panel")
        .children()
        .last()
        .text()
    ).toEqual("body");
  });
});
