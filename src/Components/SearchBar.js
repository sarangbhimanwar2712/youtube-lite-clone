import axios from "axios";
import "../App.css"
import React, { useState } from "react";


const SeachBar = ({setVideos})=>{

    let[search , setSearch] = useState("") ;
    

    function implementSearch(){

        axios.get("https://www.googleapis.com/youtube/v3/search" ,{
            params:{
                key: "AIzaSyDdMdPcUcJ7m5zAoamKM5aJLb4zyCzf0uE",
                part: "snippet" ,
                maxResults : 50,
                type : "video" ,
                q : search
            }
        })
        .then(response =>setVideos(response.data.items))
        .catch(err => console.log(err))

    }

    return(
        <div className="searchbar">
            <input type="text" placeholder="Search" 
                onChange={e=>setSearch(e.target.value)} 
            />
             <button onClick={implementSearch}>Search</button>
        </div>
    )
}

export default SeachBar ;