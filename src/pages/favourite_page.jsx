import Link from "next/link";
import { MdArrowBackIos } from "react-icons/md";
import { FaHeart } from "react-icons/fa";
import { useEffect, useState } from "react";

import styles from "./favourite_page/styles.module.scss";

const FavouritePage = () => {
  const [testo, setTesto] = useState("");

  useEffect(() => {
    console.log(JSON.parse(localStorage.getItem("favorite")));
    const x = JSON.parse(localStorage.getItem("favorite"));
    x.map((item) => setTesto(item.titleTrack));
  }, []);

  return (
    <>
      <Link className={styles.Back} href={"/"}>
        <MdArrowBackIos /> FAVOURITE
      </Link>
      <div className={styles.FavouritePage}>
        <div className={styles.Content}>
          <FaHeart className={styles.Heart} />
          <h2>{testo}</h2>
          <h3>Artist name</h3>
          <audio src="" controls />
        </div>
      </div>
    </>
  );
};

export default FavouritePage;
