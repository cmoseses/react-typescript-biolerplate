import * as React from "react";
import * as ReactDOM from "react-dom";
import { List } from "immutable";
import {
  Button,
  Overlay,
  FormControl,
  FormGroup,
  ControlLabel,
  Popover,
  ButtonToolbar,
  Row,
  Col
} from "react-bootstrap";

import { IImmutableAgent, AGENT_TYPE, AGENT_STATE } from "../../types/index";

import "./style";
import { addSpecifyResources, removeSpecifyResource } from "../../ducks/agent";

interface Props {
  agent?: IImmutableAgent;
  addSpecifyResources?: (agentName: string, resources: string) => void;
  removeSpecifyResource?: (agentName: string, resource: string) => void;
}
interface State {
  showOverlay: boolean;
  resources: string;
}

export default class AgentCard extends React.PureComponent<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      showOverlay: false,
      resources: ""
    };
  }
  target: any;
  handleShowOverlay = (event: any) => {
    event.preventDefault();
    this.setState({
      showOverlay: !this.state.showOverlay
    });
  };
  handleHideOverlay = () => {
    this.setState({ showOverlay: false, resources: "" });
  };
  handleInputChange = (event: React.FormEvent<FormControl>) => {
    this.setState({ resources: (event.target as HTMLInputElement).value });
  };
  handleAddResources = (agentName: string, resources: string) => {
    this.handleHideOverlay();
    this.props.addSpecifyResources(agentName, resources);
  };
  render() {
    const { agent } = this.props;
    const { showOverlay, resources } = this.state;
    const state = agent.get("state").toLocaleLowerCase();
    return (
      <Row className={`agent-card ${state}`}>
        <Col md={1} xsHidden smHidden>
          <div className="gray-hole" />
        </Col>
        <Col md={11} xs={12} sm={12}>
          <Row>
            <Col md={12}>
              <strong className="name-label">{agent.get("name")}</strong>
              <span>
                <span className="divider">{agent.get("state")}</span>
                <span className="divider">{agent.get("ip")}</span>
                <span className="divider">{agent.get("path")}</span>
              </span>
            </Col>
          </Row>
          <Row>
            <Col xs={10} sm={10} md={11}>
              <div className="add-specify-resources">
                <a
                  onClick={this.handleShowOverlay}
                  ref={a => {
                    this.target = a;
                  }}
                >
                  <span className="glyphicon glyphicon-plus" /> Specify
                  Resources
                </a>
                <Overlay
                  rootClose
                  onHide={this.handleHideOverlay}
                  show={showOverlay}
                  target={() => ReactDOM.findDOMNode(this.target)}
                  placement="bottom"
                  container={this}
                >
                  <Popover id={agent.get("name")} bsStyle={state}>
                    <ControlLabel>
                      (separate multiple resources name with commas)
                    </ControlLabel>
                    <FormControl
                      type="text"
                      value={resources}
                      placeholder="Enter text"
                      onChange={this.handleInputChange}
                    />
                    <Button
                      bsClass={"custom-button"}
                      onClick={() =>
                        this.handleAddResources(agent.get("name"), resources)}
                    >
                      Add resources
                    </Button>
                    <Button
                      bsClass={"custom-button"}
                      onClick={this.handleHideOverlay}
                    >
                      Close
                    </Button>
                  </Popover>
                </Overlay>
              </div>
              <span>
                <span className="resources-label divider">Resources:</span>
              </span>
              <span className="resources-content">
                {agent.get("resources").map(resource => (
                  <span className={"resource"} key={resource}>
                    {resource}
                    <span
                      className="glyphicon glyphicon-remove-circle"
                      onClick={() =>
                        this.props.removeSpecifyResource(
                          agent.get("name"),
                          resource
                        )}
                    />
                  </span>
                ))}
              </span>
            </Col>
            <Col xs={2} sm={2} md={1}>
              {agent.get("state") === AGENT_STATE.IDLE && (
                <a>
                  <span className="glyphicon glyphicon-ban-circle" /> Deny
                </a>
              )}
            </Col>
          </Row>
        </Col>
      </Row>
    );
  }
}
