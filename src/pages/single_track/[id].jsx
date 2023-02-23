import Link from "next/link";
import Image from "next/image";
import { MdArrowBackIos } from "react-icons/md";
import { FaRegHeart, FaHeart } from "react-icons/fa";
import { useState } from "react";

import styles from "./styles.module.scss";

export default function SingleTrack({ trackData }) {
  const [icon, setIcon] = useState(false);

  let seconds = trackData.duration;

  let minutes = 0;
  while (seconds > 59) {
    seconds = seconds - 60;
    minutes++;
  }

  if (seconds < 10) {
    seconds = "0" + seconds;
  }

  let updateDate = trackData.album.release_date.substring(0, 10);
  updateDate = updateDate?.split("-").reverse().join("-");

  const onHandleFavorite = () => {
    const favoriteTrack = {
      titleTrack: trackData.title,
      artistName: trackData.artist.name,
      artistImage: trackData.album.cover_medium,
      trackPreview: trackData.preview,
    };

    const favoriteTrackJSON = localStorage.getItem("favoriteTrack");
    const favoriteTracks = favoriteTrackJSON
      ? JSON.parse(favoriteTrackJSON)
      : [];

    favoriteTracks.push(favoriteTrack);

    const updatedFavoriteTrackJSON = JSON.stringify(favoriteTracks);

    localStorage.setItem("favoriteTrack", updatedFavoriteTrackJSON);

    setIcon(true);
  };

  return (
    <>
    
      <div className={styles.main}>
        <Link className={styles.Back} href={`/top_track`}>
          <MdArrowBackIos />
          Tracks
        </Link>
        <div className={styles.track}>
          <div className={styles.containerImage}>
            <Image
              src={trackData?.album?.cover_medium}
              alt={trackData?.album.title}
              width={250}
              height={250}
            />
          </div>
          <div className={styles.containerSong}>
            <div className={styles.sub_containerSong}>
              <h2>{trackData?.title}</h2>
              <p>{trackData?.artist.name}</p>
              <button>
                {icon === false ? (
                  <FaRegHeart
                    onClick={onHandleFavorite}
                    className={styles.Like}
                  />
                ) : (
                  <FaHeart className={styles.Like_pieno} />
                )}
              </button>
            </div>
            
          </div>


          <audio src={trackData?.preview} controls />
        </div>
        <div className={styles.infoTrack}>
          <div className={styles.sub_infoTrack}>
            <Link
            href={`/single_artist/${trackData?.artist?.id}`}
            as={`/single_artist/${trackData?.artist?.id}`} >
              <Image
                src={trackData?.artist?.picture_medium}
                alt={trackData?.artist.name}
                width={250}
                height={250}
              />
            </Link>
          </div>
          <div className={styles.artistInfo}>
          <p className={styles.artistName}>{trackData?.artist.name}</p>
            <p>Title: {trackData?.title}</p>
            <div className={styles.sub_artistInfo}>
              <p>Duration {minutes}:{seconds}</p>
              <p>Release date: {trackData?.album?.release_date}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export async function getStaticPaths() {
  const res = await fetch("https://api.deezer.com/chart/0/tracks");
  const data = await res.json();

  const paths = data.data.map((track) => ({
    params: { id: track.id.toString() },
  }));

  return { paths, fallback: false };
}
export async function getStaticProps({ params }) {
  const res = await fetch(`https://api.deezer.com/track/${params.id}`);
  const trackData = await res.json();

  return { props: { trackData } };
}
