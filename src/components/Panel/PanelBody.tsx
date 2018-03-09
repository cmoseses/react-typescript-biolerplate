import * as React from "react";
import * as ReactDOM from "react-dom";
import { List } from "immutable";

import "./style";

interface Props {}
interface State {}

export default class PanelBody extends React.PureComponent<Props, State> {
  render() {
    return <div>{this.props.children}</div>;
  }
}
