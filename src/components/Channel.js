import React from 'react';
import { Row, Col } from 'react-bootstrap';
import ChannelList from './ChannelList';

const Channel = (props) => {
  return (
    <div className="channel pt-5 pb-4">
      <Row className="channelHeader">
        <Col className="col-4">
          <h4>Channel</h4>
        </Col>
        <Col className="col-8 text-end">View All Channel</Col>
      </Row>
      <div className="channelList">
        <ChannelList data={props.data}/>
      </div>
    </div>
  );
};

export default Channel;
