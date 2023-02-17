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
        <div className={styles.Content}>
        <FaHeart className={styles.Heart} />
            <h2>Track name</h2>
            <h3>Arist name</h3>
            <audio src="" controls />
        </div>



        <div className={styles.Content}>
        <FaHeart className={styles.Heart} />
            <h2>Track name</h2>
            <h3>Arist name</h3>
            <audio src="" controls />
        </div>
        
    </div>
    </>

  )
}

export default FavouritePage

