import React, { Component } from 'react';
import './style.css';
import VideoScrollList from './video-scroll-list'

class App extends Component {
  constructor() {
    super();
    this.state = {
      showVideo: false,
      videos: [],
      activeVideo:{},
    }

  }

  showVideo = () => {
    this.setState({
      showVideo: true,
      videos:this.props.videos,
      activeVideo: this.props.videos[0]
    })
  }

  closeVideo = () => {
    this.setState({
      showVideo: false,
    })
  }

  selectVideo = param => {
    this.setState({
      activeVideo: param,
      activeVideo:{
        id:param.id,
        src:param.src,
        imgSrc: param.imgSrc,
      }
    })
  }

  render() {
    return (
      <div className="wrapper">
        {!this.state.showVideo
          ? (<div>
                <button className="show-video" onClick={() => this.showVideo()}>
                   video
                </button>
              </div>)

          : (<div className="container">
                <div className="close-btn" onClick={() => this.closeVideo()}>
                   &times;
                </div>
               
                <div className="video-container">
                  <iframe width="100%" height="100%" src={this.state.activeVideo.src}
                   frameBorder="0" allowFullScreen >
                  </iframe>
                </div>

                <div className="video-scroll-list-bottom">
                  <VideoScrollList 
                    videos={this.state.videos} 
                    activeVideo={this.state.activeVideo}
                    selectVideo={this.selectVideo}/>
                </div>
            </div>
            )}
      </div>
    );
  }
}

export default App

