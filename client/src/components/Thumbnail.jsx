/* eslint-disable no-unused-vars */
import React from 'react';

const Thumbnail = props => (
  <div style={{
    width: '1000px',
    margin: '6px',
    flex: '1'
  }}>
    <img src={props.image.small} style={{
      width: '100%',
      height: '100%',
      cursor: 'pointer',
    }} onClick={props.clickHandlerOnModalDisplay} index={props.index} />
  </div>
);

export default Thumbnail;
