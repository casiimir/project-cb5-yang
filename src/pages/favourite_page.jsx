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

    favoriteTracks.splice(index, 1); 

    const updatedFavoriteTrackJSON = JSON.stringify(favoriteTracks);
    localStorage.setItem("favoriteTrack", updatedFavoriteTrackJSON);

    setFavoriteTracks(favoriteTracks); 
  };

  return (
      <div className={styles.FavouritePage}>
        <Link className={styles.Back} href={"/"}>
          <MdArrowBackIos /> FAVOURITE
        </Link>
        <div className={styles.containerFavouritePage}>
          {favoriteTracks.map((item) => (
              <div className={styles.Content} key={item.id}>
                <div className={styles.mainContent}>
                  <Image
                    src={item.artistImage}
                    width={50}
                    height={50}
                    alt={item.titleTrack}
                  />
                  <div className={styles.infoTrack}>
                    <h2>{item.titleTrack.toLowerCase()}</h2>
                    <h3>{item.artistName}</h3>
                  </div>
                  <FaHeart className={styles.Heart} onClick={removeFavourite} />
                </div>
                <audio src={item.trackPreview} controls />
              </div>
          ))}
        </div>
      </div>
  );
};

export default FavouritePage;
