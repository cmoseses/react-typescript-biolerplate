import { connect } from "react-redux";

import Agents from "../../components/Agents";
import { getSelectedAgentTypeAgents } from "../../ducks/selector";
import mergeProps from "../../utils";

const mapStateToProps = (state: any) => {
  return {
    agents: getSelectedAgentTypeAgents(state)
  };
};

export default connect(mapStateToProps, undefined, mergeProps)(Agents);
