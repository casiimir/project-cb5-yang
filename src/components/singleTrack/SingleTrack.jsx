import { useState } from "react";
import { BsPlayCircle, BsPauseCircleFill } from "react-icons/bs";

const SingleTrack = ({ data, className }) => {

  const [currentTrack, setCurrentTrack] = useState(false);
  const [playingTrackIndex, setPlayingTrackIndex] = useState(null);

  const playTrack = (trackUrl, index) => {
    if (currentTrack) {
      currentTrack.pause();
      if (playingTrackIndex === index) {
        setPlayingTrackIndex(null);
        return;
      }
    }
    const audio = new Audio(trackUrl);
    audio.play();
    setCurrentTrack(audio);
    setPlayingTrackIndex(index);
  }

  return data?.map((item, index) => (
    <div className={className} key={index}>
      <span>
        <h2>{item.title}</h2>
        <p>{item.artist.name}</p>
      </span>
      <button>
        {playingTrackIndex === index ? 
        <BsPauseCircleFill onClick={() => playTrack(item.preview, index)}/> : 
        <BsPlayCircle onClick={() => playTrack(item.preview, index)}/>}
      </button>
    </div>
  ));
};

export default SingleTrack;
