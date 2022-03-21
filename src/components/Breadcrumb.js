import React from 'react';
import { Breadcrumb } from 'react-bootstrap';

const BreadcrumbNav = () => {
  return (
    <div className="breadCrumb d-flex justify-content-center">
      <div className="breadWrapper col-11">
        <div className="breadcrumb mb-0">
          <Breadcrumb.Item href="#">Video</Breadcrumb.Item>
          <Breadcrumb.Item href="#">People</Breadcrumb.Item>
          <Breadcrumb.Item href="#">Documents</Breadcrumb.Item>
          <Breadcrumb.Item href="#">Events</Breadcrumb.Item>
          <Breadcrumb.Item href="#">Communities</Breadcrumb.Item>
          <Breadcrumb.Item href="#">Favourites</Breadcrumb.Item>
          <Breadcrumb.Item href="#">Channels</Breadcrumb.Item>
        </div>
      </div>
    </div>
  );
};

export default BreadcrumbNav;
