import { useState, useEffect } from "react";
import { BsPlayCircle, BsPauseCircleFill } from "react-icons/bs";
import Image from "next/image";
import { useRouter } from "next/router";

import styles from "./styles.module.scss";

const SingleTrack = ({ data }) => {

  const router = useRouter();

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

  useEffect(() => {
    const handleRouteChange = () => {
      if (currentTrack) {
        currentTrack.pause();
        setCurrentTrack(null);
        setPlayingTrackIndex(null);
      }
    };
  
    router.events.on("routeChangeStart", handleRouteChange);
  
    return () => {
      router.events.off("routeChangeStart", handleRouteChange);
    };
  }, [router, currentTrack, playingTrackIndex]);

  return data?.map((item, index) => (
    <div className={styles.Track} key={index}>
      <Image 
      src={item?.album?.cover_medium}
      width={250}
      height={250}
      alt={item?.title} />
      <div className={styles.infoTrack}>
        <h2>
          {item.title.length > 10
          ? `${item.title.substring(0, 10)}...`
          : item.title}
        </h2>
        <span>{item?.artist.name}</span>
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
