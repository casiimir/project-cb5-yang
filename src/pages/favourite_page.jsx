import Link from "next/link";
import { MdArrowBackIos } from "react-icons/md";
import { FaHeart } from "react-icons/fa";
import { useEffect, useState } from "react";

import styles from "./favourite_page/styles.module.scss";
import Image from "next/image";

const FavouritePage = () => {
  const [favoriteTracks, setFavoriteTracks] = useState([]);

  useEffect(() => {
    const favoriteTrackJSON = localStorage.getItem("favoriteTrack");
    const favoriteTracks = favoriteTrackJSON
      ? JSON.parse(favoriteTrackJSON)
      : [];

    setFavoriteTracks(favoriteTracks);
  }, []);

  const removeFavourite = (index) => {
    const favoriteTrackJSON = localStorage.getItem("favoriteTrack");
    const favoriteTracks = favoriteTrackJSON
      ? JSON.parse(favoriteTrackJSON)
      : [];

    favoriteTracks.splice(index, 1); // rimuovi l'elemento dall'array

    const updatedFavoriteTrackJSON = JSON.stringify(favoriteTracks);
    localStorage.setItem("favoriteTrack", updatedFavoriteTrackJSON);

    setFavoriteTracks(favoriteTracks); // aggiorna lo stato
  };

  return (
    <>
      <Link className={styles.Back} href={"/"}>
        <MdArrowBackIos /> FAVOURITE
      </Link>
      <div className={styles.FavouritePage}>
        {favoriteTracks.map((item) => (
          <>
            <div className={styles.Content}>
              <Image
                src={item.artistImage}
                width={50}
                height={50}
                alt={item.titleTrack}
              />
              <div className={styles.infoTrack}>
                <h2>{item.titleTrack}</h2>
                <h3>{item.artistName}</h3>
              </div>
              <FaHeart className={styles.Heart} onClick={removeFavourite} />
              <audio src={item.trackPreview} controls />
            </div>
          </>
        ))}
      </div>
    </>
  );
};

export default FavouritePage;
