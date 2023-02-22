import { useState } from "react";
import { BsPlayCircle, BsPauseCircleFill } from "react-icons/bs";
import Image from "next/image";
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
      <Image 
      src={item?.album?.cover_medium}
      width={250}
      height={250}
      alt={item?.title} />
      <div className={styles.infoTrack}>
        <h2>{item?.title}</h2>
        <p>{item?.artist.name}</p>
        <button>
        {playingTrackIndex === index ? 
        <BsPauseCircleFill className={styles.btnPause} onClick={() => playTrack(item?.preview, index)}/> : 
        <BsPlayCircle className={styles.btnPlay} onClick={() => playTrack(item?.preview, index)}/>}
      </button>
      </div>
      
    </div>
  ));
};

export default SingleTrack;
