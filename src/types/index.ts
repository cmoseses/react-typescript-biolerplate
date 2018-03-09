import { List } from "immutable";

enum AGENT_TYPE {
  ALL = "ALL",
  PHYSICAL = "PHYSICAL",
  VIRTUAL = "VIRTUAL"
}
enum AGENT_STATE {
  BUILDING = "BUILDING",
  IDLE = "IDLE"
}
const AGENT_TYPES = [AGENT_TYPE.ALL, AGENT_TYPE.PHYSICAL, AGENT_TYPE.VIRTUAL];

interface IAgent {
  name: string;
  ip: string;
  path: string;
  type: AGENT_TYPE;
  state: AGENT_STATE;
  resources: List<string>;
}
interface IImmutableAgent extends Map<string, any> {
  toJS(): IAgent;
  get<K extends keyof IAgent>(key: K): IAgent[K];
}

interface ISelectedAgentType {
  selectedAgentType: AGENT_TYPE;
}

interface IImmutableSelectedAgentType extends Map<string, any> {
  toJS(): ISelectedAgentType;
  get<K extends keyof ISelectedAgentType>(key: K): ISelectedAgentType[K];
}

export {
  IImmutableAgent,
  IImmutableSelectedAgentType,
  AGENT_TYPE,
  AGENT_TYPES,
  AGENT_STATE
};
