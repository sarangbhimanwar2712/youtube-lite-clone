import React, { useState } from "react" ;
import "./App.css"
import SeachBar from "./Components/SearchBar";
import VideoPlay from "./Components/VideoPlay";
import VideoList from "./Components/VideoList";

const App = ()=>{
  let[videos , setVideos] = useState("") ;
  let [selectedVideos , setSelectedVideos] = useState("")

  console.log(selectedVideos)

  return(
    <div>
      <SeachBar setVideos={setVideos}/>
      <div className="videos">
         <VideoPlay  selectedVideos={selectedVideos}/>
         <VideoList videos={videos} setSelectedVideos={setSelectedVideos}/>
      </div>
    </div>
  )
}

export default App ;
