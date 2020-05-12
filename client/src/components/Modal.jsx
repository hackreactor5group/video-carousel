/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components';

const StyledModal = styled.div`
  position: fixed;
  /* z-index: 2; */
  padding-top: 50px;
  left: 0;
  top: 0;
  width: 50%;
  height: 50%;
  /* overflow: auto; */

`;

const StyledLogo = styled.div`
  position: relative
`;

const StyledLogoImage = styled.img`
  position: absolute;
  width: 10%;
  top:-62%;
`;

const StyledImageText = styled.p`
  position: absolute;
  left: 11%;
  font-weight: bold;
  font-size: 24px;
`;

const StyledCloseSpan = styled.span`
  color: black;
  position: absolute;
  font-size: 35px;
  font-weight: bold;
  left: 35em;


  &:hover,
  &:focus {
    color: #999;
    text-decoration: none;
    cursor: pointer;
  }
`;

const StyledModalContent = styled.div`
  /* background-color: rgba(0, 0, 0, .9); */
  /* display: flex; */
  margin: auto;
  padding: 0;
  width: 90%;
  height: 500px;
  max-width: 800px;
`;

const StyledNumberText = styled.div`
  color: black;
  font-size: 12px;
  padding: 8px 12px;
  position: absolute;
  top: 0;
  left: 6em;
`;

const StyledImageCarousel = styled.img`
  margin-bottom: 15px;
  object-fit: contain;
  height: 500px;
  width: 785px;
  margin-top: 5em;
`;

const StyledColumn = styled.div`
  display: inline-block;
  cursor: pointer;
`;

const StyledColumnImage = styled.img`
  margin-bottom: -4px;
  object-fit: cover;
  max-width: 100%;
  max-height: 50%;
  height: 65px;
  width: 120px;
  object-position: 0 80%;
  cursor: pointer;
`;



const Modal = props => (
  <div>
    <StyledModal id="myModal">
      <StyledLogo>
        <StyledLogoImage className='img' src="https://cdn.freelogovectors.net/wp-content/uploads/2016/12/amazon_logo.png" alt=""/>
        <StyledImageText className='img-text'>| videos</StyledImageText>
      </StyledLogo>
      <StyledCloseSpan onClick={props.closeModal}>&times;</StyledCloseSpan>

      <StyledModalContent className="modal-content">

        <div className="mySlides">
          <StyledNumberText className="numbertext">{props.currentIndex + 1} / {props.images.length}</StyledNumberText>
          <StyledImageCarousel className="carousel-image" src={props.images[props.currentIndex].full}/>
        </div>

        {props.images.map((image, i) => <StyledColumn className="column" key={i}>
          <img className="demo cursor" src={image.small} index={i} onClick={props.clickHandlerOnModalDisplay}/>
        </StyledColumn>)}

      </StyledModalContent>
    </StyledModal>
  </div>
);

export default Modal;
