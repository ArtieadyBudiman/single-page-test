import React from 'react';
import image from './../..assets/img-1.jpg';

const Content = () => {
  return (
    <>
      <div className="contentBox">
        <img src={image} alt="image" />
        <div className="overlay">
          <div className="description">
            <h4>How to improve your skill</h4>
            <div className="detail">
              <span className="name">Waseem Ashad</span>
              <span className="engagement">12345 Views</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Content;
