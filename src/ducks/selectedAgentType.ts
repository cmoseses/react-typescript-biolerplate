import { Record, List, fromJS } from "immutable";
import { AGENT_TYPE, AGENT_STATE } from "../types/index";

// Actions
export const UPDATE_SELECTED_AGENT_TYPE = "UPDATE_SELECTED_AGENT_TYPE";
export type UPDATE_SELECTED_AGENT_TYPE = typeof UPDATE_SELECTED_AGENT_TYPE;

// InitState
const ISelectedAgentTypeRecord = Record({
  selectedAgentType: AGENT_TYPE.PHYSICAL
});

export class ISelectedAgentType extends ISelectedAgentTypeRecord {
  selectedAgentType: AGENT_TYPE;
}

const initState = new ISelectedAgentType();

// Action Creators
export function updateSelectedAgentType(selectedAgentType: AGENT_TYPE) {
  return { type: UPDATE_SELECTED_AGENT_TYPE, payload: { selectedAgentType } };
}

// Reducer
export default function reducer(
  state: ISelectedAgentType = initState,
  action: any
) {
  switch (action.type) {
    case UPDATE_SELECTED_AGENT_TYPE:
      return state.set("selectedAgentType", action.payload.selectedAgentType);
    default:
      return state;
  }
}
