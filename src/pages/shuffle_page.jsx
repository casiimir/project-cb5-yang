import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { MdArrowBackIos } from "react-icons/md";
import { BsPlayCircle, BsPauseCircleFill } from "react-icons/bs";
import { useContext } from "react";
import { useRouter } from "next/router";

import styles from "./shuffle_page/styles.module.scss";
import { applicationContext } from "@/store/state";

const ShufflePage = ({ data }) => {
  const router = useRouter();
  const { state, dispatch } = useContext(applicationContext);
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
    audio.onended = () => {
      setPlayingTrackIndex(null);
    };
    audio?.play();
    setCurrentTrack(audio);
    setPlayingTrackIndex(index);
  };

  useEffect(() => {
    if (router.asPath === "/shuffle_page") {
      dispatch({ type: "active", payload: router.asPath });
    }
  }, []);

  console.log(state);
  return (
    <>
      <div className={styles.Shuffle}>
        <Link className={styles.Back} href={"/"}>
          <MdArrowBackIos /> SHUFFLE
        </Link>
        <div className={styles.Content}>
          {data?.data.map((shuffle, index) => (
            <div className={styles.container_Content} key={index}>
              <div className={styles.mainContent}>
                <Link
                href={`/single_artist/${shuffle?.artist?.id}`}
                as={`/single_artist/${shuffle?.artist?.id}`} >
                  <Image
                  src={shuffle?.album?.cover_medium}
                  width={200}
                  height={200}
                  alt={shuffle?.title}
                  />
                </Link>

                <div className={styles.infoTrack}>
                  <h2>{shuffle?.title_short}</h2>
                  <h3>{shuffle?.artist?.name}</h3>
                  <h4>{shuffle?.album?.type}</h4>
                </div>
              </div>
              <button>
                {playingTrackIndex === index ? (
                  <BsPauseCircleFill
                    className={styles.btnPause}
                    onClick={() => playTrack(shuffle.preview, index)}
                  />
                ) : (
                  <BsPlayCircle
                    className={styles.btnPlay}
                    onClick={() => playTrack(shuffle.preview, index)}
                  />
                )}
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ShufflePage;

export async function getServerSideProps() {
  const res = await fetch("https://api.deezer.com/user/5277344544/flow");

  const data = await res.json();

  return {
    props: {
      data,
    },
  };
}
