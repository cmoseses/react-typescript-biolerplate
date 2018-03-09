import { connect } from "react-redux";

import { addSpecifyResources, removeSpecifyResource } from "../../ducks/agent";
import AgentCard from "../../components/AgentCard";
import mergeProps from "../../utils";

const mapDispatchToProps = {
  addSpecifyResources,
  removeSpecifyResource
};

export default connect(undefined, mapDispatchToProps, mergeProps)(AgentCard);
