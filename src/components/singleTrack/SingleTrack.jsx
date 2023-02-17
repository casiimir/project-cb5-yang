import { useState } from "react";
import { BsPlayCircle, BsPauseCircleFill } from "react-icons/bs";
import styles from "./styles.module.scss";

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
    <div className={styles.Track} key={index}>
      <span>
        <h2>{item.title}</h2>
        <p>{item.artist.name}</p>
      </span>
      <button>
        {playingTrackIndex === index ? 
        <BsPauseCircleFill className={styles.btnPause} onClick={() => playTrack(item.preview, index)}/> : 
        <BsPlayCircle className={styles.btnPlay} onClick={() => playTrack(item.preview, index)}/>}
      </button>
    </div>
  ));
};

export default SingleTrack;
