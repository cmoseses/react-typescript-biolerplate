import { connect } from "react-redux";

import Summary from "../../components/Summary";
import mergeProps from "../../utils";

import {
  getBuildingAgentsCount,
  getIdleAgentsCount
} from "../../ducks/selector";

const mapStateToProps = (state: any) => ({
  buildingAgentsCount: getBuildingAgentsCount(state),
  idleAgentsCount: getIdleAgentsCount(state)
});

export default connect(mapStateToProps, undefined, mergeProps)(Summary);
