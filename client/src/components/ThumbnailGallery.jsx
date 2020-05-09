/* eslint-disable no-unused-vars */
/* eslint-disable max-len */
import React from 'react';
import Thumbnail from './Thumbnail.jsx';





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
    // create a new array with 5 videos from the source images
    let firstFiveVideo = this.props.images.slice(index, index + 10);
    // check the length of the new array (it’s less than 10 when index is near the end of the array)
    if (firstFiveVideo.length < 10) {
    // if the firstFiveVideo's length is lower than 10 images than append missing images from the beginning of the original array 
      firstFiveVideo = firstFiveVideo.concat(this.props.images.slice(0, 10 - firstFiveVideo.length))
    }


    const images = this.props.images;
    const clickHandlerOnModalDisplay = this.props.clickHandlerOnModalDisplay;
    console.log(clickHandlerOnModalDisplay, 'clicked on gallery')
    console.log(images, 'testttttt')
    return (
      <div style={{
        position: 'relative',
        display: 'flex', 
        'flex-direction': 'row', 
        height: '100px',
        width: '600px',
        'z-index': '1',
        margin: '0 auto',
        overflow: 'hidden',
        'background-color': 'green',
        outline: '1px solid green'
      }}>
                  <div style={{
                    display: 'flex',
                    width: '1200px',
                    margin: '0 auto',
                    'background-color': 'yellow',
                    'z-index': '2'
                  }}>
                  <a className="prev" onClick={this.prevSlide} >&#10094;</a>

                      {firstFiveVideo.map((image, i) => <Thumbnail image={image} clickHandlerOnModalDisplay={clickHandlerOnModalDisplay} key={i} index={i} /> )}
                  <a className="next" onClick={this.nextSlide} >&#10095;</a>
                    </div>
          </div>
        
    )
  }
}

// const ThumbnailGallery = props => (
//   <div className="initial_thumbnail">
//     <p>Videos</p>
//     <a className="prev" onClick={props.goToPrevSlide} >&#10094;</a>

//     <div style={{
//       height: '100px',
//       width: '1200px',
//       margin: '0 auto',
//       display: 'flex',
//       top: '450px',
//     }}>
//     {props.images.map((image, i) => <Thumbnail image={image} clickHandler={props.clickHandler} key={i} index={i} />)}
//     </div>
//     <a className="next" onClick={props.goToNextSlide} >&#10095;</a>
//   </div>
// );

export default ThumbnailGallery;
