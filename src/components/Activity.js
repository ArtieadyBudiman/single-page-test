import React from 'react';
import { Row, Col } from 'react-bootstrap';
import ActivityList from './ActivityList';

const Activity = () => {
  return (
    <div className="activity pt- pb-4">
      <Row className="activityHeader">
        <Col className="col-4">
          <h4>Activity</h4>
        </Col>
        <Col className="col-8 text-end">View timeline / Filter activity</Col>
      </Row>
      <Row>
        <Col>
          <ActivityList />
          <ActivityList />
          <ActivityList />
          <ActivityList />
          <ActivityList />
        </Col>
      </Row>
    </div>
  );
};

export default Activity;
