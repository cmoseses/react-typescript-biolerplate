import { connect } from "react-redux";

import {
  ISelectedAgentType,
  updateSelectedAgentType
} from "../../ducks/selectedAgentType";
import AgentTypeSelector from "../../components/AgentTypeSelector";
import { getSelectedAgentType } from "../../ducks/selector";
import mergeProps from "../../utils";

const mapStateToProps = (state: any) => {
  return {
    selectedAgentType: getSelectedAgentType(state)
  };
};

const mapDispatchToProps = {
  updateSelectedAgentType
};

export default connect(mapStateToProps, mapDispatchToProps, mergeProps)(
  AgentTypeSelector
);
