import { Record, List, fromJS } from "immutable";
import { AGENT_TYPE, AGENT_STATE, IImmutableAgent } from "../types/index";

// Actions
export const ADD_SPECIFY_RESOURCES = "ADD_SPECIFY_RESOURCES";
export type ADD_SPECIFY_RESOURCES = typeof ADD_SPECIFY_RESOURCES;

export const REMOVE_SPECIFY_RESOURCE = "REMOVE_SPECIFY_RESOURCE";
export type REMOVE_SPECIFY_RESOURCE = typeof REMOVE_SPECIFY_RESOURCE;

// InitState
const IAgentRecord = Record({
  agents: fromJS([
    {
      name: "bjstdmngbgr02.thinkpad.com",
      ip: "192.168.1.2",
      path: "/var/lib/cruise-agent",
      type: AGENT_TYPE.PHYSICAL,
      state: AGENT_STATE.IDLE,
      resources: ["ubuntu", "firefox3", "core-duo"]
    },
    {
      name: "bjstdmngbgr03.thinkpad.com",
      ip: "192.168.1.3",
      path: "/var/lib/cruise-agent",
      type: AGENT_TYPE.PHYSICAL,
      state: AGENT_STATE.BUILDING,
      resources: ["ubuntu", "firefox3", "mysql", "core-duo"]
    },
    {
      name: "bjstdmngbgr04.thinkpad.com",
      ip: "192.168.1.4",
      path: "/var/lib/cruise-agent",
      type: AGENT_TYPE.PHYSICAL,
      state: AGENT_STATE.BUILDING,
      resources: ["ubuntu", "firefox3", "mysql", "core-duo"]
    },
    {
      name: "bjstdmngbgr05.thinkpad.com",
      ip: "192.168.1.5",
      path: "/var/lib/cruise-agent",
      type: AGENT_TYPE.PHYSICAL,
      state: AGENT_STATE.IDLE,
      resources: ["ubuntu"]
    },
    {
      name: "bjstdmngbgr06.thinkpad.com",
      ip: "192.168.1.6",
      path: "/var/lib/cruise-agent",
      type: AGENT_TYPE.VIRTUAL,
      state: AGENT_STATE.IDLE,
      resources: ["ubuntu"]
    }
  ])
});

export class IAgent extends IAgentRecord {
  agents: List<IImmutableAgent>;
}

const initState = new IAgent();

// Action Creators
export function addSpecifyResources(agentName: string, resources: string) {
  return { type: ADD_SPECIFY_RESOURCES, payload: { agentName, resources } };
}

export function removeSpecifyResource(agentName: string, resource: string) {
  return { type: REMOVE_SPECIFY_RESOURCE, payload: { agentName, resource } };
}

// Reducer
export default function reducer(state: IAgent = initState, action: any) {
  switch (action.type) {
    case ADD_SPECIFY_RESOURCES:
      return state.updateIn(
        [
          "agents",
          state
            .get("agents")
            .findIndex(
              (agent: IAgent) => agent.get("name") === action.payload.agentName
            ),
          "resources"
        ],
        resources =>
          Array.from(
            new Set([
              ...resources,
              ...action.payload.resources
                .split(",")
                .filter((resource: string) => resource !== "")
            ])
          )
      );
    case REMOVE_SPECIFY_RESOURCE:
      return state.updateIn(
        [
          "agents",
          state
            .get("agents")
            .findIndex(
              (agent: IAgent) => agent.get("name") === action.payload.agentName
            ),
          "resources"
        ],
        resources =>
          resources.filter(
            (resource: string) => resource !== action.payload.resource
          )
      );
    default:
      return state;
  }
}
