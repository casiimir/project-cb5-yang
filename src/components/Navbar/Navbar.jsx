import Link from "next/link";
import { HiOutlineHome, HiOutlineHeart } from "react-icons/hi";
import { BsMusicNoteList, BsCollectionPlay, BsSearch } from "react-icons/bs";

import styles from "./styles.module.scss";
import { useContext } from "react";
import { applicationContext } from "@/store/state";

const Navbar = () => {
  const { state, dispatch } = useContext(applicationContext);

  console.log(state);
  return (
    <div className={styles.Navbar}>
      <ul>
        <li>
          <Link href={`/#`}>
            <HiOutlineHome
              className={state === "/#" ? `${styles.active}` : `${styles.icon}`}
            />
          </Link>
        </li>
        <li>
          <Link href={`/favourite_page`}>
            <HiOutlineHeart
              className={
                state === "/favourite_page"
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
                state === "/shuffle_page"
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
                state === "/categorie" ? `${styles.active}` : `${styles.icon}`
              }
            />
          </Link>
        </li>
        <li>
          <Link href={`/search_page?q=track`}>
            <BsSearch
              className={
                state === "/search_page?q=track"
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
