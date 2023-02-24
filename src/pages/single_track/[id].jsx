import Link from "next/link";
import Image from "next/image";
import { MdArrowBackIos } from "react-icons/md";
import { FaRegHeart, FaHeart } from "react-icons/fa";
import { useContext, useEffect } from "react";
import { useRouter } from "next/router";

import styles from "./styles.module.scss";
import { applicationContext } from "@/store/state";

export default function SingleTrack({ trackData }) {
  const { state, dispatch } = useContext(applicationContext);
  const router = useRouter();

  useEffect(() => {
    const favoriteTracks = JSON.parse(localStorage.getItem("favoriteTrack"));
    favoriteTracks ? favoriteTracks : undefined;

    dispatch({ type: "favorite", payload: favoriteTracks });
  }, []);

  // cerco l'artista corrente e il relativo valore di favorite
  const currentArtist = state?.favorite.find(
    (item) => item.titleTrack === trackData.title
  );

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
    const favoriteTrackJSON = localStorage.getItem("favoriteTrack");
    const favoriteTrack = [
      {
        titleTrack: "",
        artistName: "",
        artistImage: "",
        trackPreview: "",
        id: router.query.id,
      },
    ];
    const favoriteTracks = favoriteTrackJSON
      ? JSON.parse(favoriteTrackJSON)
      : undefined;

    const updatedFavoriteTrackJSON = favoriteTracks;

    if (
      !favoriteTracks?.some((track) => track.titleTrack === trackData.title)
    ) {
      if (favoriteTracks === undefined) {
        const struttura = [
          {
            titleTrack: trackData.title,
            artistName: trackData.artist.name,
            artistImage: trackData.album.cover_medium,
            trackPreview: trackData.preview,
            favorite: true,
            id: router.query.id,
          },
        ];
        localStorage.setItem("favoriteTrack", JSON.stringify(struttura));
      } else {
        const struttura = [
          ...favoriteTracks,
          {
            titleTrack: trackData.title,
            artistName: trackData.artist.name,
            artistImage: trackData.album.cover_medium,
            trackPreview: trackData.preview,
            favorite: true,
          },
        ];
        localStorage.setItem("favoriteTrack", JSON.stringify(struttura));
        dispatch({ type: "favorite", payload: struttura });
      }
    }
  };

  const onHandleUnFavorite = () => {
    const favoriteTrackJSON = localStorage.getItem("favoriteTrack");
    dispatch({ type: "remove", payload: trackData.title });
  };
  useEffect(() => {
    localStorage.setItem("favoriteTrack", JSON.stringify(state.favorite));
  }, [state]);

  return (
    <div className={styles.main}>
      <Link className={styles.Back} href={`/top_track`}>
        <MdArrowBackIos />
        Tracks
      </Link>
      <div className={styles.containerMain}>
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
              <span>{trackData?.artist.name}</span>
              <button>
                {currentArtist?.favorite === true ? (
                  <FaHeart
                    onClick={onHandleUnFavorite}
                    className={styles.Like_pieno}
                  />
                ) : (
                  <FaRegHeart
                    onClick={onHandleFavorite}
                    className={styles.Like}
                  />
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
              as={`/single_artist/${trackData?.artist?.id}`}
            >
              <Image
                src={trackData?.artist?.picture_medium}
                alt={trackData?.artist.name}
                width={250}
                height={250}
              />
            </Link>
          </div>
          <div className={styles.artistInfo}>
            <h2>{trackData?.artist.name}</h2>
            <h3>Title: {trackData?.title}</h3>
            <span>
              Duration {minutes}:{seconds}
            </span>
            <span>Release date: {trackData?.album?.release_date}</span>
          </div>
        </div>
      </div>
    </div>
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
