import React from 'react';

const Content = (props) => {
  // const loading = props.data.loading;
  // console.log(loading);
  // const data = props.data.data;
  console.log(props.data);
  return (
    <>
      {props.data.data.slice(0, 5).map((data, index) => {
        return (
          <div className="contentBox" key={index}>
            <img className="p-0" src={data.image} alt="image" />
            <div className="overlay">
              <div className="description d-flex flex-column mx-2 text-white w-100">
                <h5 className="text-truncate">{data.text}</h5>
                <div className="detail d-flex justify-content-between">
                  <span className="name">{`${data.owner.firstName} ${data.owner.lastName}`}</span>
                  <span className="engagement text-end me-3">{`${data.likes} Views`}</span>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default Content;
