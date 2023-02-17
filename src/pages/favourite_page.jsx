import Link from "next/link";
import { MdArrowBackIos } from "react-icons/md";
import { FaHeart } from "react-icons/fa";

import styles from "./favourite_page/styles.module.scss"

const FavouritePage = () => {
  return (
    <>
    <Link className={styles.Back} href={"/"}>
        <MdArrowBackIos /> FAVOURITE
    </Link>
    <div className={styles.FavouritePage}>
        <FaHeart />
        <div className={styles.Content}>
            <h2>Track name</h2>
            <h3>Arist name</h3>
        </div>
        <audio src="" controls />
    </div>
    </>

  )
}

export default FavouritePage

