import React from 'react';
import { Row, Col } from 'react-bootstrap';
import ActivityList from './ActivityList';

const Activity = (props) => {
  return (
    <div className="activity pt-5 pb-4">
      <Row className="activityHeader">
        <Col className="col-4">
          <h4>Activity</h4>
        </Col>
        <Col className="col-8 text-end">View timeline / Filter activity</Col>
      </Row>
      <Row>
        <Col>
          <ActivityList data={props.data}/>
        </Col>
      </Row>
    </div>
  );
};

export default Activity;
