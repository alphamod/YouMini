import React, { Component } from 'react';


export class VideoDetail extends Component {


    render() {
        if (this.props.video === null) {
            return (
                <div className="text-center h4 mt-5 mx-0 px-0">Search For Videos To Display Here...</div>
            )
        } else if (this.props.video != null) {
            const { video } = this.props;
            const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;
            console.log(video);
            const publishDate = new Date(video.snippet.publishedAt);
            const URL_REGEX = /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/;
            const description = txt =>
                txt
                    .split(" ")
                    .map(part =>
                        URL_REGEX.test(part) ? <a href={part}>{part} </a> : part + " "
                    );

            return (
                <div className="mt-2 w-100">
                    <div className="container-fluid">
                        <div className="row ml-4">
                            <div className="col-xl-12">
                                <div className="embed-responsive embed-responsive-16by9">
                                    <iframe className="embed-responsive-item h-100 w-100" width="100%" height="100%" title="video player" src={videoSrc} allowFullScreen />
                                </div>
                            </div>
                            <div className='col-xl-12 mt-4'>
                                <h4>{video.snippet.title}</h4>
                                <h6>{publishDate.toLocaleDateString('en-US', {
                                    day: 'numeric',
                                    month: 'short',
                                    year: 'numeric'
                                })}</h6>
                                <hr />
                                <h6 className="text-dark pb-2"><span className="h6">Published By: </span><strong className="pl-2">{video.snippet.channelTitle}</strong></h6>
                                <h6>Description: </h6>
                                <div className=" py-2 px-4">{description(video.snippet.description)}</div>
                                <hr className=""/>
                            </div>
                        </div>
                    </div>
                </div>
            )
        }
    }
}

export default VideoDetail
