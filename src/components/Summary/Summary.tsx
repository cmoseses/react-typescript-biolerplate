import * as React from "react";
import * as ReactDOM from "react-dom";
import { List } from "immutable";

import "./style";
import Panel from "../Panel";

interface Props {
  buildingAgentsCount?: number;
  idleAgentsCount?: number;
}
interface State {}

export default class Summary extends React.PureComponent<Props, State> {
  render() {
    const { buildingAgentsCount, idleAgentsCount } = this.props;
    return (
      <div className="summary">
        <Panel>
          <Panel.Head>Summary</Panel.Head>
          <Panel.Body>
            <table>
              <tbody>
                <tr>
                  <td>building</td>
                  <td>{buildingAgentsCount}</td>
                </tr>
                <tr>
                  <td>idle</td>
                  <td>{idleAgentsCount}</td>
                </tr>
              </tbody>
            </table>
          </Panel.Body>
        </Panel>
      </div>
    );
  }
}
