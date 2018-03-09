import { combineReducers } from "redux-immutable";
import agents from "./agent";
import selectedAgentType from "./selectedAgentType";

const rootReducer = combineReducers({
  selectedAgentType,
  agents
});

export default rootReducer;
