import React from 'react'

const VideoItem = ({ video, onVideoSelect }) => {
    const publishedDate = new Date(video.snippet.publishedAt);
    const published = function (publishedDate) {
        const today = new Date();
        const years = today.getFullYear() - publishedDate.getFullYear();
        // console.log("year", years)
        if (years === 0) {
            const months = today.getMonth() - publishedDate.getMonth();
            // console.log("months", months);
            if (months === 0) {
                let days = today.getDate() - publishedDate.getDate();
                // console.log("days", days);
                if (days > 1) {
                    return `${days} Days Ago`;
                } else if (days === 1) {
                    return `${days} Day Ago`;
                } else {
                    return "Today"
                }
            } else if (months > 1) {
                return `${months} Months Ago`;
            } else {
                return `${months} Month Ago`;
            }
        } else if (years > 1) {
            return `${years} Years Ago`;
        } else {
            return `${years} Year Ago`;

        }
    }
    // console.log(published(publishedDate));
    const onSelectVideo = e => {
        e.preventDefault();
        onVideoSelect(video);
    }
    return (
        <div className="my-2 card btn btn-link text-decoration-none text-left" onClick={onSelectVideo}>
            <div className="row no-gutters">
                <div className="col-md-5">
                    <img className="mr-2 card-img" src={video.snippet.thumbnails.medium.url} />
                </div>
                <div className="col-md-7">
                    <h6 className="text-overflow ml-2">{video.snippet.title}</h6>
                    <p className="card-text text-secondary ml-2 mb-0 mt-3"><strong> {video.snippet.channelTitle}</strong></p>
                    <p className="card-text text-secondary ml-2"><strong><small>{published(publishedDate)}</small></strong></p>

                </div>
            </div>
        </div>
    )
}

export default VideoItem
