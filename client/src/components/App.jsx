/* eslint-disable no-console */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React from 'react';
import axios from 'axios';
import ThumbnailGallery from './ThumbnailGallery.jsx';
import Modal from './Modal.jsx';
import '../../dist/styles.css';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      images: [],
      name: '',
      currentIndex: 0,
      modal: false,
    };
  }

  componentDidMount = () => {
    const Id = window.location.pathname.split('/')[2];
    axios.get(`/api/videos/${35}/photos`)
      .then(response => (
        this.setState({
          images: response.data[0].videos,
          name: response.data[0].name,
        })
      ))
      .catch(error => console.log(error));
  }

  goToPrevSlide = () => {
    if (this.state.currentIndex !== 0) {
      this.setState({
        currentIndex: this.state.currentIndex - 5,
      });
    }
  }

  goToNextSlide = () => {
    if (this.state.currentIndex !== this.state.images.length - 1) {
      this.setState({
        currentIndex: this.state.currentIndex + 5,
      });
    }
  }

  clickHandlerOnModalDisplay = (e) => {
    if (e.target.getAttribute('index') !== this.state.currentIndex) {
      this.setState({
        currentIndex: Number(e.target.getAttribute('index')),
        modal: true,
      });
    }
  };

  closeModal = () => {
    this.setState({ modal: false });
  }

  render() {
    const renderModal = this.state.modal ? <Modal goToNextSlide={this.goToNextSlide}
      goToPrevSlide={this.goToPrevSlide}
      closeModal={this.closeModal}
      currentIndex={this.state.currentIndex}
      images={this.state.images}
      clickHandlerOnModalDisplay={this.clickHandlerOnModalDisplay} />
      : this.state.images ? <ThumbnailGallery images={this.state.images} name={this.state.name} clickHandlerOnModalDisplay={this.clickHandlerOnModalDisplay} /> : 'Loading Videos';

    return (
      <div>
          <p>VIDEOS</p>
        {renderModal}
      </div>
    );
  }
}

export default App;
