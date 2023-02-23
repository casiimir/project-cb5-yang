import Link from "next/link";
import { HiOutlineHome, HiOutlineHeart } from "react-icons/hi";
import { BsMusicNoteList, BsCollectionPlay, BsSearch } from "react-icons/bs";

import styles from "./styles.module.scss";
import { useContext } from "react";
import { applicationContext } from "@/store/state";

const Navbar = () => {
  const { state, dispatch } = useContext(applicationContext);

  return (
    <div className={styles.Navbar}>
      <ul>
        <li>
          <Link href={`/#`}>
            <HiOutlineHome
              className={
                state?.route[0] === "/#" ? `${styles.active}` : `${styles.icon}`
              }
            />
          </Link>
        </li>
        <li>
          <Link href={`/favourite_page`}>
            <HiOutlineHeart
              className={
                state?.route[0] === "/favourite_page"
                  ? `${styles.active}`
                  : `${styles.icon}`
              }
            />
          </Link>
        </li>
        <li>
          <Link href={`/shuffle_page`}>
            <BsMusicNoteList
              className={
                state?.route[0] === "/shuffle_page"
                  ? `${styles.active}`
                  : `${styles.icon}`
              }
            />
          </Link>
        </li>
        <li>
          <Link href={`/categorie`}>
            <BsCollectionPlay
              className={
                state?.route[0] === "/categorie"
                  ? `${styles.active}`
                  : `${styles.icon}`
              }
            />
          </Link>
        </li>
        <li>
          <Link href={`/search_page?q=track`}>
            <BsSearch
              className={
                state?.route[0] === "/search_page?q=track"
                  ? `${styles.active}`
                  : `${styles.icon}`
              }
            />
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
