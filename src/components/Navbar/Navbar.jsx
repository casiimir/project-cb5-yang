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
            <HiOutlineHome />
          </Link>
        </li>
        <li>
          <Link href={`/favourite_page`}>
            <HiOutlineHeart />
          </Link>
        </li>
        <li>
          <Link href={`/shuffle_page`}>
            <BsMusicNoteList />
          </Link>
        </li>
        <li>
          <Link href={`/categorie`}>
            <BsCollectionPlay />
          </Link>
        </li>
        <li>
          <Link href={`/search_page?q=track`}>
            <BsSearch />
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;