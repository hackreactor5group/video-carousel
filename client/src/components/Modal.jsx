/* eslint-disable no-unused-vars */
import React from 'react';

const Modal = props => (
  <div>
    <div id="myModal" className="modal">
      <span onClick={props.closeModal} className="close cursor">&times;</span>

      <div className="modal-content">

        <div className="mySlides">
          <div className="numbertext">{props.currentIndex + 1} / {props.images.length}</div>
          <img className="carousel-image" src={props.images[props.currentIndex].full}/>
        </div>

        {props.images.map((image, i) => <div className="column" key={i}>
          <img className="demo cursor" src={image.small} index={i} onClick={props.clickHandler}/>
        </div>)}

      </div>
    </div>
  </div>
);

export default Modal;
