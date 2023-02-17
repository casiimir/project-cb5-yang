import Link from "next/link";
import Image from "next/image";
import { MdArrowBackIos } from "react-icons/md";

import styles from "./shuffle_page/styles.module.scss"

const ShufflePage = ({data}) => {
  return (
    <>
    <Link className={styles.Back} href={"/"}>
        <MdArrowBackIos /> SHUFFLE
    </Link>
    <div className={styles.Shuffle}>
    {data?.data.map((shuffle) => (
          <div className={styles.container_Content}>
            <Image
              src={shuffle.album.cover_medium}
              width={200}
              height={200}
              alt={shuffle.title}
            />
            <div className={styles.infoTrack}>
                <h2>{shuffle.title_short}</h2>
                <h3>{shuffle.artist.name}</h3>
                <h4>{shuffle.album.type}</h4>
                <audio className={styles.audioDesk} src={shuffle.preview} controls />
            </div>
            <audio src={shuffle.preview} controls />
          </div>
        ))}
    </div>
    </>
    )
}

export default ShufflePage

export async function getServerSideProps() {
    const res = await fetch("https://api.deezer.com/user/5277344544/flow");
  
    const data = await res.json();
  
    return {
      props: {
        data,
      },
    };
  }
  