import Link from "next/link";
import { MdArrowBackIos } from "react-icons/md";
import { FaHeart } from "react-icons/fa";
import { useEffect, useState } from "react";

import styles from "./favourite_page/styles.module.scss";

const FavouritePage = () => {
  const [testo, setTesto] = useState("");

  useEffect(() => {
    console.log(JSON.parse(localStorage.getItem("favoriteTracks")));
    const x = localStorage.getItem("favoriteTracks");
    setTesto(x);
  }, []);
  console.log(testo);

  return (
    <>
      <Link className={styles.Back} href={"/"}>
        <MdArrowBackIos /> FAVOURITE
      </Link>
      <div className={styles.FavouritePage}>
        {testo.map((item) => (
          <div className={styles.Content}>
            <FaHeart className={styles.Heart} />
            <h2>{item.titleTrack}</h2>
            <h3>{item.artistName}</h3>
            <audio src={item.trackPreview} controls />
          </div>
        ))}
      </div>
    </>
  );
};

export default FavouritePage;
