import React from 'react';
import { Row, Col } from 'react-bootstrap';
import BreadcrumbNav from './Breadcrumb';
import Content from './Content';

const ContentWrapper = () => {
  return (
    <div className="content">
      <div className="breadcrumb-section">
        <BreadcrumbNav />
      </div>
      <div className="mainContent d-flex justify-content-center">
        <Row className="col-11">
          <Col className="rightSection bg-primary col-8">
            <Row>
              <Col className="rightCaption bg-success col-6">Video</Col>
              <Col className="leftCaption bg-secondary col-6">
                Browse All Video
              </Col>
            </Row>
            <Row className="contentGallery">
              <Content />
              <Content />
              <Content />
              <Content />
              <Content />
              <Content />
            </Row>
          </Col>
          <Col className="leftSection bg-danger col-4">world</Col>
        </Row>
      </div>
    </div>
  );
};

export default ContentWrapper;
