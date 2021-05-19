import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import * as Data from "../Data/data";
import ReactPlayer from "react-player";
VideoLocation.propTypes = {
  tranferTimer : PropTypes.func,
}
VideoLocation.defaultProps = {
  tranferTimer : null,
}
function VideoLocation(props) {
  const secondTime = Data.secondTime;
  const len = secondTime.length;
  const subEnglish = Data.subEnglish;
  const time = Data.time;
  const [subTile, setsubTile] = useState('no data');
  const [subTimer, setsubTimer] = useState('');
  const {tranferTimer} = props;
 function handleTranscript(e) {
   let timer = Math.floor(e.playedSeconds); 
   tranferTimer(timer)
   for(let i = 0 ; i < len ; i++){
     if(timer == secondTime[i]){
      setsubTile(subEnglish[i]);
      setsubTimer(time[i]);
     }
   }
   
 }
  return (
    <div>
      <div id="main_video" />
      <ReactPlayer url= 'https://youtu.be/v0hN3UP0PQo' controls = {true} onProgress = {e => handleTranscript(e)}/>  
      <div className="transcript_video">
        <h3>{subTimer}:   {subTile}</h3>
      </div>
      <div className="video-control">
        <button>video trước</button>
        <button>video sau</button>
      </div>
    </div>
  )

}

export default VideoLocation;
