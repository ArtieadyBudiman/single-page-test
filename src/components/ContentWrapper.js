import React from 'react';
import { Row, Col } from 'react-bootstrap';
import BreadcrumbNav from './Breadcrumb';
import Content from './Content';
import Sugest from './Sugest';
import Activity from './Activity';
import Channel from './Channel';

const ContentWrapper = () => {
  return (
    <div className="content">
      <div className="breadcrumb-section">
        <BreadcrumbNav />
      </div>
      <div className="mainContent d-flex justify-content-center">
        <Row className="col-11">
          <Col className="rightSection col-8">
            {/* Video Section */}
            <Row className="video pt-5">
              <Col className="rightCaption col-6">
                <h4>Video</h4>
              </Col>
              <Col className="leftCaption col-6 pt-1">Browse All Video</Col>
            </Row>
            <Row className="contentGallery pt-2">
              <Content />
              <Content />
              <Content />
              <Content />
              <Content />
              <Sugest
                icon="file_upload"
                type="Upload"
                object="Your Own Video"
              />
            </Row>
            {/* People Section */}
            <Row className="people pt-5">
              <Col className="rightCaption col-6">
                <h4>People</h4>
              </Col>
              <Col className="leftCaption col-6 pt-1">View All</Col>
            </Row>
            <Row className="contentGallery pt-2">
              <Content />
              <Content />
              <Content />
              <Content />
              <Content />
              <Sugest icon="show_chart" type="Show" object="Your Work" />
            </Row>
            {/* Documents Section */}
            <Row className="documents pt-5">
              <Col className="rightCaption col-6">
                <h4>Documents</h4>
              </Col>
              <Col className="leftCaption col-6 pt-1">Browse All Documents</Col>
            </Row>
            <Row className="contentGallery pt-2">
              <Content />
              <Content />
              <Content />
              <Content />
              <Content />
              <Sugest icon="share" type="Share" object="Your Document" />
            </Row>
          </Col>
          <Col className="leftSection col-4">
            <Row>
              <Activity />
              <Channel />
            </Row>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default ContentWrapper;
