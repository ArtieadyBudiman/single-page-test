import React from 'react';
// import image from './../assets/image.jpg';

const Content = () => {
  return (
    <>
      <div className="contentBox">
        <img
          className="p-0"
          src="https://raw.githubusercontent.com/ArtieadyBudiman/single-page-test/master/src/assets/img-5.jpg"
          alt="image"
        />
        <div className="overlay">
          <div className="description d-flex flex-column mx-2 text-white w-100">
            <h5>How to improve your skill</h5>
            <div className="detail d-flex justify-content-between">
              <span className="name">Waseem Ashad</span>
              <span className="engagement text-end">12345 Views</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Content;
