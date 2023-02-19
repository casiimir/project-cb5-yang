import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { MdArrowBackIos } from "react-icons/md";
import { BsPlayCircle, BsPauseCircleFill } from "react-icons/bs";

import styles from "./shuffle_page/styles.module.scss"

const ShufflePage = ({data}) => {

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

  return (
    <>
   
    <div className={styles.Shuffle}>
    <Link className={styles.Back} href={"/"}>
        <MdArrowBackIos /> SHUFFLE
    </Link>
    <div className={styles.Content}>
    {data?.data.map((shuffle, index) => (
          <div className={styles.container_Content} key={index}>
            <Image
              src={shuffle.album.cover_medium}
              width={200}
              height={200}
              alt={shuffle.title}
            />
            <div className={styles.infoTrack}>
                <h2>{shuffle.title_short}</h2>
                <h3>{shuffle.artist.name}</h3>
                <h4>{shuffle.album.type}</h4>
            </div>
            <button>
                  {playingTrackIndex === index ? 
                    <BsPauseCircleFill className={styles.btnPause} onClick={() => playTrack(shuffle.preview, index)}/> : 
                    <BsPlayCircle className={styles.btnPlay} onClick={() => playTrack(shuffle.preview, index)}/>}
                </button>
          </div>
        ))}
         </div>
    </div>
    </>
  )
}

export default ShufflePage

export async function getServerSideProps() {
  const res = await fetch("https://api.deezer.com/user/5277344544/flow");

  const data = await res.json();

  return {
    props: {
      data,
    },
  };
}