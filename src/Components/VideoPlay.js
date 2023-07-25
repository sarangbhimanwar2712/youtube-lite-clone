import React from "react";


const VideoPlay = ({selectedVideos})=>{

    return(
        <div className="video-play">
            {
                selectedVideos &&(
                    <div>
                        <iframe width="560" height="315" src={`https://www.youtube.com/embed/${selectedVideos.id.videoId}`} ></iframe>
                        <h3>{selectedVideos.snippet.title}</h3>
                    </div>
                )

            }
        </div>
    )
}

export default VideoPlay ;