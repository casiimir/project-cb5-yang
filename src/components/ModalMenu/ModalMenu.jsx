import Link from "next/link";
import Image from "next/image";
import styles from "./styles.module.scss";

const ModalMenu = ({ onHandleModal }) => {
  const onHandleLogout = () => {
    if (typeof window !== "undefined") {
      localStorage.clear();
      location.reload();
    }
  };
  return (
    <div className={styles.MenuOverlay}>
      <div className={styles.MenuATendina}>
        <div className={styles.CloseBtn} onClick={onHandleModal}>
          x
        </div>
        <ul className={styles.MenuLista}>
          <li>
            <Link href={`/#`} className={styles.MenuItem}>
              <div className={styles.MenuTitle}>Home</div>
            </Link>
          </li>
          <li>
            <Link href={`/preferiti`} className={styles.MenuItem}>
              <div className={styles.MenuTitle}>Preferiti</div>
            </Link>
          </li>
          <li>
            <Link href={`/playlist`} className={styles.MenuItem}>
              <div className={styles.MenuTitle}>Playlist</div>
            </Link>
          </li>
          <li>
            <Link href={`/categorie`} className={styles.MenuItem}>
              <div className={styles.MenuTitle}>Categorie</div>
            </Link>
          </li>
          <li>
            <Link href={`/search_page?q=track`} className={styles.MenuItem}>
              <div className={styles.MenuTitle}>Search</div>
            </Link>
          </li>
          <li>
            <Link href={`/about`} className={styles.MenuItem}>
              <div className={styles.MenuTitle}>About</div>
            </Link>
          </li>
        </ul>
        <button onClick={onHandleLogout} className={styles.MenuItem}>
          Logout
        </button>
        <Image src={"/deezerlogo.png"} alt="logo.png" width={20} height={20} />
      </div>
    </div>
  );
};

export default ModalMenu;
