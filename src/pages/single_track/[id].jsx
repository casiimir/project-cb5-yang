import Link from "next/link";
import Image from "next/image";
import { MdArrowBackIos } from "react-icons/md";
import { FaRegHeart, FaHeart } from "react-icons/fa";
import { useState } from "react";

import styles from "./styles.module.scss";

export default function SingleTrack({ trackData }) {
  const [icon, setIcon] = useState(false);

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
      <Link className={styles.Back} href={`/top_track`}>
        <MdArrowBackIos />
        Tracks
      </Link>
      <div className={styles.main}>
        <div className={styles.track}>
          <div className={styles.containerImage}>
            <Image
              src={trackData.album.cover_medium}
              alt="Picture of the author"
              width={250}
              height={250}
            />
          </div>
          <div className={styles.containerSong}>
            <div>
              <h2>{trackData.title}</h2>
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

          <p>{trackData.artist.name}</p>
          <audio src={trackData.preview} controls />
        </div>
        <div className={styles.infoTrack}>
          <div className={styles.bo}>
            <Image
              src={trackData.contributors[0].picture_medium}
              alt="Picture of the author"
              width={250}
              height={250}
            />
            <p>{trackData.artist.name}</p>
          </div>
          <div className={styles}>
            <p>{trackData.title}</p>
            <div className={styles}>
              <p>{trackData.duration}</p>
              <p>{trackData.album.release_date}</p>
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

  return { paths, fallback: true };
}
export async function getStaticProps({ params }) {
  const res = await fetch(`https://api.deezer.com/track/${params.id}`);
  const trackData = await res.json();

  return { props: { trackData } };
}
