import { createSelector } from "reselect";
import { List } from "immutable";

import { AGENT_TYPE, AGENT_STATE } from "../../types";
import { IAgent } from "../agent";
import { ISelectedAgentType } from "../selectedAgentType";

export const getSelectedAgentType = (state: any) =>
  state.getIn(["selectedAgentType", "selectedAgentType"]);
const getAgents = (state: any) => state.getIn(["agents", "agents"]);

export const getSelectedAgentTypeAgents = createSelector(
  [getSelectedAgentType, getAgents],
  (selectedAgentType: AGENT_TYPE, agents: List<IAgent>) => {
    switch (selectedAgentType) {
      case AGENT_TYPE.ALL:
        return agents;
      case AGENT_TYPE.PHYSICAL:
        return agents.filter(
          (agent: IAgent) => agent.get("type") === AGENT_TYPE.PHYSICAL
        );
      case AGENT_TYPE.VIRTUAL:
        return agents.filter(
          (agent: IAgent) => agent.get("type") === AGENT_TYPE.VIRTUAL
        );
    }
  }
);

export const getBuildingAgentsCount = createSelector(
  [getAgents],
  (agents: List<IAgent>) => {
    return agents
      .filter((agent: IAgent) => agent.get("state") === AGENT_STATE.BUILDING)
      .count();
  }
);
export const getIdleAgentsCount = createSelector(
  [getAgents],
  (agents: List<IAgent>) => {
    return agents
      .filter((agent: IAgent) => agent.get("state") === AGENT_STATE.IDLE)
      .count();
  }
);
