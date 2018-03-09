import * as React from "react";
import * as ReactDOM from "react-dom";
import { List } from "immutable";

import "./style";

interface Props {}
interface State {}

export default class PanelHead extends React.PureComponent<Props, State> {
  render() {
    return (
      <div>
        <h4>{this.props.children}</h4>
        <strong>
          <hr />
        </strong>
      </div>
    );
  }
}
