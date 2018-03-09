import * as React from "react";
import { List } from "immutable";
import { Button } from "react-bootstrap";

import { AGENT_TYPE, AGENT_TYPES } from "../../types/index";

import "./style";

interface Props {
  selectedAgentType?: AGENT_TYPE;
  updateSelectedAgentType?: (selectedAgentType: AGENT_TYPE) => void;
}

export default class AgentTypeSelector extends React.PureComponent<
  Props,
  object
> {
  render() {
    const { selectedAgentType, updateSelectedAgentType } = this.props;
    return (
      <div className="agent-type-selector">
        <h4>Agents</h4>
        {AGENT_TYPES.map(agentType => (
          <Button
            key={agentType}
            onClick={() => updateSelectedAgentType(agentType)}
            active={selectedAgentType===agentType}
            bsClass={'custom-button'}
          >
            {agentType.toLowerCase()}
          </Button>
        ))}
      </div>
    );
  }
}
