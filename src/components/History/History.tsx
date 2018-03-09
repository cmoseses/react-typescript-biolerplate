import * as React from "react";
import * as ReactDOM from "react-dom";
import { List } from "immutable";

import "./style";
import Panel from "../Panel";

interface Props {}
interface State {}

export default class History extends React.PureComponent<Props, State> {
  render() {
    return (
      <div className="history">
        <Panel>
          <Panel.Head>History</Panel.Head>
          <Panel.Body>
            <p>bjstdmngbgr02/Acceptance_test</p>
            <p>bjstdmngbgr02/Acceptance_test</p>
            <p>bjstdmngbgr02/Acceptance_test</p>
            <p>bjstdmngbgr02/Acceptance_test</p>
            <p>bjstdmngbgr02/Acceptance_test</p>
            <p>bjstdmngbgr02/Acceptance_test</p>
            <p>bjstdmngbgr02/Acceptance_test</p>
          </Panel.Body>
        </Panel>
      </div>
    );
  }
}
