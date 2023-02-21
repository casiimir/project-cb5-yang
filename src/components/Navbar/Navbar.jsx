import Link from "next/link";
import { HiOutlineHome, HiOutlineHeart } from "react-icons/hi";
import { BsMusicNoteList, BsCollectionPlay, BsSearch } from "react-icons/bs";

import styles from "./styles.module.scss";

const Navbar = () => {
  return (
    <div className={styles.Navbar}>
      <ul>
        <li>
          <Link href={`/#`}>
            <HiOutlineHome className={styles.Icon} />
          </Link>
        </li>
        <li>
          <Link href={`/favourite_page`}>
            <HiOutlineHeart className={styles.Icon}/>
          </Link>
        </li>
        <li>
          <Link href={`/shuffle_page`}>
            <BsMusicNoteList className={styles.Icon}/>
          </Link>
        </li>
        <li>
          <Link href={`/categorie`}>
            <BsCollectionPlay className={styles.Icon}/>
          </Link>
        </li>
        <li>
          <Link href={`/search_page?q=track`}>
            <BsSearch className={styles.Icon}/>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;