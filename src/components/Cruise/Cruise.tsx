import * as React from "react";
import { List } from "immutable";
import { Tabs, Tab, Grid, Row, Col } from "react-bootstrap";

import Agents from "../../containers/Agents";
import AgentTypeSelector from "../../containers/AgentTypeSelector";
import Panel from "../Panel";
import History from "../History";
import Summary from "../../containers/Summary";
import "./style";

interface Props {}

export default class Cruise extends React.PureComponent<Props, object> {
  render() {
    return (
      <div className="cruise">
        <header>
          <h2>Cruise</h2>
        </header>
        <Tabs defaultActiveKey={2} id="cruise" animation={false}>
          <Tab eventKey={1} title="HELP" tabClassName="pull-right">
            Tab 1 content
          </Tab>
          <Tab eventKey={2} title="AGENTS" tabClassName="pull-right">
            <AgentTypeSelector />
            <Grid fluid={true}>
              <Row>
                <Col xs={12} smHidden mdHidden lgHidden className="aside">
                  <Summary />
                  <History />
                </Col>
              </Row>
              <Row className="flex">
                <Col xs={12} sm={9} md={9}>
                  <Agents />
                </Col>
                <Col xsHidden sm={3} md={3} className="aside">
                  <Summary />
                  <History />
                </Col>
              </Row>
            </Grid>
          </Tab>
          <Tab eventKey={3} title="MY CRUISE" tabClassName="pull-right">
            Tab 3 content
          </Tab>
          <Tab eventKey={4} title="DASHBOARD" tabClassName="pull-right">
            Tab 4 content
          </Tab>
        </Tabs>
      </div>
    );
  }
}
