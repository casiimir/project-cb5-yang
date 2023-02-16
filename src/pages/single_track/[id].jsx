import Link from "next/link";
import Image from "next/image";
import { MdArrowBackIos } from "react-icons/md";
import { FaRegHeart } from "react-icons/fa";
import styles from "./styles.module.scss";
import Header from "@/components/Header";
import Navbar from "@/components/Navbar";

export default function SingleTrack({ trackData }) {
  return (
    <>
    < Header />
    <Link className={styles.Back} href={`/top_track`}>
          <MdArrowBackIos />
          Tracks
        </Link>
    <div className={styles.main}>
      <div className={styles.containerImage}>
        <Image
          src={trackData.album.cover_medium}
          alt="Picture of the author"
          width={250}
          height={250}
        />
      </div>
      <div className={styles.containerSong}>
        <div>
        <h2>{trackData.title}</h2>
          <FaRegHeart className={styles.Like}/>
        </div>
       
        <p>{trackData.artist.name}</p>
      </div>
      <audio src={trackData.preview} controls />
    </div>
    < Navbar/>
    </>
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
