import React from 'react';
import { Row, Col } from 'react-bootstrap';
import moment from 'moment';

const ActivityList = (props) => {
  return (
    <>
      {props.data.data.map((data, index) => {
        return (
          <div className="activityList pt-2 pb-2 mt-1 px-2" key={index}>
            <Row>
              <Col md={5} xs={12}>
                <div className="imageContent me-3">
                  <img src={data.image} alt="image" />
                </div>
              </Col>
              <Col md={7} xs={12}>
                <div className="contentDesc">
                  <div>
                    <div className="d-flex justify-content-between">
                      <p className="fw-bold me-2 mb-0 text-truncate">{`${data.owner.firstName} ${data.owner.lastName}`}</p>
                      <p className="mb-0">Commented</p>
                    </div>
                    <p className="text-truncate">
                      well I am looking it how it capture the Audio
                    </p>
                  </div>
                  <div className="bottomIcon d-flex">
                    <span className="material-icons me-3">chat</span>
                    <p className="mb-0">
                      {moment(data.publishDate).format('LL')}
                    </p>
                  </div>
                </div>
              </Col>
            </Row>
          </div>
        );
      })}
    </>
  );
};

export default ActivityList;
