import React from 'react';

const ChannelList = (props) => {
  return (
    <>
      {props.data.data.map((data, index) => {
        return (
          <div className="channelItem pt-2" key={index}>
            <img src={data.image} alt="image" />
            <div className="overlay">
              <div className="description">
                <p className="mb-1 px-1 text-white text-truncate">
                  {data.text}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default ChannelList;
