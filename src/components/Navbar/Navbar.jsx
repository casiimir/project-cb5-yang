import Link from "next/link";
import { HiOutlineHome, HiOutlineHeart } from "react-icons/hi";
import { BsMusicNoteList, BsCollectionPlay, BsSearch } from "react-icons/bs";

import styles from "./styles.module.scss";

const Navbar = () => {
  return (
    <div className={styles.Navbar}>
      <ul>
        <li>
          <Link href={`/#`} className={styles.MenuItem}>
            <HiOutlineHome />
            <div className={styles.MenuTitle}>Home</div>
          </Link>
        </li>
        <li>
          <Link href={`/favourite_page`} className={styles.MenuItem}>
            <HiOutlineHeart />
            <div className={styles.MenuTitle}>Preferiti</div>
          </Link>
        </li>
        <li>
          <Link href={`/shuffle_page`} className={styles.MenuItem}>
            <BsMusicNoteList />
            <div className={styles.MenuTitle}>Playlist</div>
          </Link>
        </li>
        <li>
          <Link href={`/categorie`} className={styles.MenuItem}>
            <BsCollectionPlay />
            <div className={styles.MenuTitle}>Categorie</div>
          </Link>
        </li>
        <li>
          <Link href={`/search_page?q=track`} className={styles.MenuItem}>
            <BsSearch />
            <div className={styles.MenuTitle}>Search</div>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
