import React from 'react'
import VideoItem from './VideoItem'

const VideoList = ({ videos, onVideoSelect }) => {
    console.log(videos);
    const videoList = videos.map((video) => <VideoItem onVideoSelect={onVideoSelect} key={video.id.videoId} video={video} />);
    return (
        <div className={(videos.length!==0)?"border-left border-secondary px-3":"h-0"} style={{"overflow-x": "hidden", "overflow-y":"scroll", "height":"50rem"}}>
            {videoList}
        </div>
    )
}

export default VideoList
