import * as React from "react";
import * as ReactDOM from "react-dom";
import { List } from "immutable";
import PanelBody from "./PanelBody";
import PanelHead from "./PanelHead";

import "./style";

interface Props {}
interface State {}

export default class Panel extends React.PureComponent<Props, State> {
  static Head = PanelHead;
  static Body = PanelBody;

  render() {
    return <div className="custom-panel">{this.props.children}</div>;
  }
}
