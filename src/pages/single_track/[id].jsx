import Link from "next/link";
import Image from "next/image";
import { MdArrowBackIos } from "react-icons/md";
import { FaRegHeart } from "react-icons/fa";
import styles from "./styles.module.scss";

export default function SingleTrack({ trackData }) {
  return (
    <div className={styles.main}>
      <div className={styles.href}>
        <Link className={styles.href} href={`/top_track`}>
          <MdArrowBackIos />
          Tracks
        </Link>
      </div>
      <div className={styles.containerImage}>
        <Image
          src={trackData.artist.picture_medium}
          alt="Picture of the author"
          width={250}
          height={250}
        />
      </div>
      <div className={styles.containerSong}>
        <h2>{trackData.title}</h2>
        <span>
          <FaRegHeart />
        </span>
        <p>{trackData.artist.name}</p>
      </div>
      <audio src={trackData.preview} controls />
    </div>
  );
}

export async function getStaticPaths() {
  const res = await fetch("https://api.deezer.com/chart/0/tracks");
  const data = await res.json();

  const paths = data.data.map((track) => ({
    params: { id: track.id.toString() },
  }));

  return { paths, fallback: true };
}
export async function getStaticProps({ params }) {
  const res = await fetch(`https://api.deezer.com/track/${params.id}`);
  const trackData = await res.json();

  return { props: { trackData } };
}
