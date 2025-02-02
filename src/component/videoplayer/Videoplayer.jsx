import React, { useRef } from 'react'
import './videoplayer.css'
import video_player from '../../assets/video-player.mp4'

const Videoplayer = ({playstate,setplaystate}) => {
  const player = useRef(null);

  const closeplayer =(e) =>{
    if(e.target === player.current)
      setplaystate(false);
  }
  return (
    <div className={`video-player ${playstate ? '':'hide'}`} ref={player} onClick={closeplayer}>
      <video src={video_player} autoPlay controls></video>
    </div>
  )
}

export default Videoplayer
