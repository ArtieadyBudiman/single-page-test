import React from 'react';
import { Row, Col } from 'react-bootstrap';

const ActivityList = () => {
  return (
    <div className="activityList pt-2 pb-2">
      <Row>
        <Col className="col-5">
          <div className="imageContent">
            <img
              src="https://raw.githubusercontent.com/ArtieadyBudiman/single-page-test/master/src/assets/img-3.jpg"
              alt="image"
            />
          </div>
        </Col>
        <Col className="col-7">
          <div className="contentDesc">
            <div>
              <div className="d-flex">
                <p className="fw-bold me-3 mb-0">John Stalnior</p>
                <p className="mb-0">Commented</p>
              </div>
              <p className="text-truncate">
                well I am looking it how it capture the Audio
              </p>
            </div>
            <div className="bottomIcon d-flex">
              <span class="material-icons me-3">chat</span>
              <p className="mb-0">2 Minutes ago</p>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default ActivityList;
