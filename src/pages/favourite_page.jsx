import Link from "next/link";
import { useContext, useEffect, useState } from "react";
import { useRouter } from "next/router";
import { applicationContext } from "@/store/state";

import { MdArrowBackIos } from "react-icons/md";
import { FaHeart } from "react-icons/fa";
import styles from "./favourite_page/styles.module.scss";
import Image from "next/image";

const FavouritePage = () => {
  const { dispatch, state } = useContext(applicationContext);
  const router = useRouter();

  useEffect(() => {
    if (router.asPath === "/favourite_page") {
      dispatch({ type: "active", payload: router.asPath });
    }
  }, [router.asPath]);

  useEffect(() => {
    const favoriteTracks = JSON.parse(localStorage.getItem("favoriteTrack"));
    favoriteTracks ? favoriteTracks : undefined;

    dispatch({ type: "favorite", payload: favoriteTracks });
  }, []);

  const removeFavourite = (item) => {
    dispatch({ type: "remove", payload: item });
  };
  useEffect(() => {
    localStorage.setItem("favoriteTrack", JSON.stringify(state.favorite));
  }, [state]);

  return (
    <div className={styles.FavouritePage}>
      <Link className={styles.Back} href={"/#"}>
        <MdArrowBackIos /> FAVOURITE
      </Link>
      <div className={styles.containerFavouritePage}>
        {state?.favorite?.map((item) => (
          <div className={styles.Content} key={item.id}>
            <div className={styles.mainContent}>
              <div className={styles.infoContent}>
                <Image
                  src={item.artistImage}
                  width={50}
                  height={50}
                  alt={item.titleTrack}
                />
                <div className={styles.infoTrack}>
                  <h2>
                    {item.titleTrack.length > 10
                      ? `${item.titleTrack.toLowerCase().substring(0, 10)}...`
                      : item.titleTrack}
                  </h2>
                  <h3>{item.artistName}</h3>
                </div>
              </div>
              <FaHeart
                className={styles.Heart}
                onClick={() => {
                  removeFavourite(item.titleTrack);
                }}
              />
            </div>
            <audio src={item.trackPreview} controls />
          </div>
        ))}
      </div>
    </div>
  );
};

export default FavouritePage;
