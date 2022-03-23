import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Row, Col } from 'react-bootstrap';
import BreadcrumbNav from './Breadcrumb';
import Content from './Content';
import Sugest from './Sugest';
import Activity from './Activity';
import Channel from './Channel';
import Loading from './Loading';

const ContentWrapper = () => {
  const [data, setData] = useState({
    loading: true,
    data: false,
    error: false,
  });
  const id = '623a08803f69bbf06ea5d3e6';
  useEffect(() => {
    axios({
      method: 'get',
      url: ' https://dummyapi.io/data/v1/post?limit=10',
      headers: {
        'app-id': id,
      },
    })
      .then((response) => {
        setData({
          loading: false,
          data: response.data.data,
          error: false,
        });
      })
      .catch((error) => {
        setData({
          loading: false,
          data: false,
          error: error.message,
        });
      });
    // eslint-disable-next-line
  }, []);

  return (
    <div className="content pb-5">
      <div className="breadcrumb-section">
        <BreadcrumbNav />
      </div>
      <div className="mainContent d-flex justify-content-center">
        <Row className="col-11">
          {/* Right Content */}
          <Col className="rightSection" lg={8} xs={12}>
            {/* Video Section */}
            <Row className="video pt-5">
              <Col className="rightCaption col-6">
                <h4>Video</h4>
              </Col>
              <Col className="leftCaption col-6 pt-1">Browse All Video</Col>
            </Row>
            <Row className="contentGallery pt-2">
              {data.loading ? (
                <Loading />
              ) : (
                <>
                  <Content data={data} />
                </>
              )}
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
              {data.loading ? (
                <Loading />
              ) : (
                <>
                  <Content data={data} />
                </>
              )}
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
              {data.loading ? (
                <Loading />
              ) : (
                <>
                  <Content data={data} />
                </>
              )}
              <Sugest icon="share" type="Share" object="Your Document" />
            </Row>
          </Col>
          {/* Left Content */}
          <Col className="leftSection" lg={4} xs={12}>
            <Row>
              {data.loading ? (
                <Loading />
              ) : (
                <>
                  <Activity data={data} />
                </>
              )}
            </Row>
            <Row>
              {data.loading ? (
                <Loading />
              ) : (
                <>
                  <Channel data={data}/>
                </>
              )}
            </Row>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default ContentWrapper;
