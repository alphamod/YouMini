import React, { Component } from 'react';
import './App.css';
import youtube from './api/youtube';
import { Navbar, VideoList, VideoDetail } from './components';
class App extends Component {

  constructor() {
    super();
    this.state = {
      videos: [],
      selectedVideo: null
    }
  }

  onVideoSelect = (video) => {
    this.setState({selectedVideo:video})
  }

  handleFormSubmit = async (searchTerm) => {
    const response = await youtube.get('search', { params: { q: searchTerm, part: "snippet", maxResults: 10, type: 'video' } });
    const videos = response.data.items;
    console.log(videos);
    // console.log('video', video)
    this.setState({
      videos,
      selectedVideo: videos[0] 
    })
  };

  render() {
    return (
      <>
        <Navbar handleFormSubmit={this.handleFormSubmit} />
        <div className='container-fluid'>
          <div className="row">
            <div className="col-md-8 col-lg-8 col-xl-8 px-0 mx-0">
              <VideoDetail video={this.state.selectedVideo} />
            </div>
            <div className="col-md-4 col-lg-4 col-xl-4 px-0 mx-0">
              <VideoList onVideoSelect={this.onVideoSelect} videos={this.state.videos}/>
            </div>
          </div>
        </div>
      </>

    )
  }
}

export default App;
