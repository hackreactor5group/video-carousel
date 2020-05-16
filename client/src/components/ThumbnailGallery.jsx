/* eslint-disable no-unused-vars */
/* eslint-disable max-len */
import React from 'react';
import Thumbnail from './Thumbnail.jsx';
import styled from 'styled-components';

const OuterDiv = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  height:260px;
  width:1100px;
  z-index: 1;
  margin: 0 auto;
  overflow: hidden;
  background-color: grey;
`;

const InnerDiv = styled.div`
  display: flex;
  width: 2200px;
  height: 100%
  margin: 0 auto;
  background-color: white;
  z-index: 2;
`;

const PrevLink = styled.a`
cursor: pointer;
position: absolute;
top: 16%;
left: -2%;
width: auto;
padding: 16px;
/* transform: translateX(); */
/* transition: transform 300ms cubic-bezier(0.455, 0.03, 0.515, 0.955); */
color: red;
font-weight: bold;
font-size: 40px;
transition: 0.6s ease;
border-radius: 0 3px 3px 0;
user-select: none;
-webkit-user-select: none;

&:hover {
  background-color: rgba(0, 0, 0, 0.8);
}
`;

const NextLink = styled.a`
cursor: pointer;
position: absolute;
top: 16%;
left: 90%;
width: auto;
padding: 16px;
/* margin-top: -50px; */
color: red;
font-weight: bold;
font-size: 40px;
transition: 0.6s ease;
border-radius: 0 3px 3px 0;
user-select: none;
-webkit-user-select: none;
right: 83px;
border-radius: 3px 0 0 3px;
right: 83px;
border-radius: 3px 0 0 3px;

&:hover {
  background-color: rgba(0, 0, 0, 0.8);
}
`;

class ThumbnailGallery extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      currentImageIndex: 0
    }

    this.nextSlide  = this.nextSlide.bind(this);
    this.prevSlide = this.prevSlide.bind(this);
  }

    prevSlide() {
    const lastIndex = this.props.images.length - 1;

    const resetIndex = this.state.currentImageIndex === 0;
    const index = resetIndex ? lastIndex : this.state.currentImageIndex - 1;

    this.setState({
      currentImageIndex: index
    })
  }

  nextSlide() {
    const lastIndex = this.props.images.length - 1;

    const resetIndex = this.state.currentImageIndex === lastIndex;
    const index = resetIndex ? 0 : this.state.currentImageIndex + 1;

    this.setState({
        currentImageIndex: index
    });
  }  
  
  render() {

    //get current image index
    const index = this.state.currentImageIndex;
    // create a new array with 10 videos from the source images
    let firstTenVideo = this.props.images.slice(index, index + 10);
    // check the length of the new array (it’s less than 10 when index is near the end of the array)
    if (firstTenVideo.length < 10) {
    // if the firstTenVideo's length is lower than 10 images than append missing images from the beginning of the original array 
      firstTenVideo = firstTenVideo.concat(this.props.images.slice(0, 10 - firstTenVideo.length))
    }


    const images = this.props.images;
    const clickHandlerOnModalDisplay = this.props.clickHandlerOnModalDisplay;
    const userName = this.props.name;
    return (
      <OuterDiv>
        <InnerDiv>
          <PrevLink onClick={this.prevSlide} >&#10094;</PrevLink>
            {firstTenVideo.map((image, i) => <Thumbnail image={image} userName={userName} clickHandlerOnModalDisplay={clickHandlerOnModalDisplay} key={i} index={i} /> )}
          <NextLink onClick={this.nextSlide} >&#10095;</NextLink>
        </InnerDiv>
        </OuterDiv>
        
    )
  }
}

export default ThumbnailGallery;
