import React from "react";


const VideoList = ({videos ,setSelectedVideos})=>{


    return(
        <div className="video-list">
            {
                videos && 
                    videos.map((video, index) => (
                         <div onClick={()=>setSelectedVideos(video)} key={index}>
                             <img src={video.snippet.thumbnails.medium.url} alt={video.snippet.description} />

                         </div>
                    )
                    )
            }

        </div>
    )
}

export default VideoList ;