import * as React from "react";
import { List } from "immutable";
import { Button } from "react-bootstrap";

import { IImmutableAgent, AGENT_TYPE } from "../../types/index";

import AgentCard from "../../containers/AgentCard";

import "./style";
import { addSpecifyResources, removeSpecifyResource } from "../../ducks/agent";

interface Props {
  agents?: List<IImmutableAgent>;
}

export default class Agents extends React.PureComponent<Props, object> {
  render() {
    const { agents } = this.props;
    return (
      <div className="agents">
        {agents.map(agent => (
          <AgentCard key={agent.get("name")} agent={agent} />
        ))}
      </div>
    );
  }
}
