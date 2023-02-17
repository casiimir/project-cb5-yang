import Link from "next/link";
import Image from "next/image";
import { BsPlayCircle } from "react-icons/bs";
import { MdArrowBackIos } from "react-icons/md";
import { useContext } from "react";
import { applicationContext } from "@/store/state";

import styles from "./top_track/styles.module.scss";

const Top_Track = ({ data }) => {
  const { dispatch } = useContext(applicationContext);
  console.log(dispatch);
  return (
    <>
      <Link className={styles.Back} href={"/"}>
        <MdArrowBackIos /> ALL TRACKS
      </Link>
      <div className={styles.TopTrack}>
        {data?.data.map((track) => (
          <div className={styles.container_Content}>
            <div className={styles.track}>
              <Image src={track.album.cover_medium} width={250} height={250} />
              <div className={styles.infoTrack}>
                <h2>{track.title}</h2>
                <h3>{track.artist.name}</h3>
              </div>
            </div>
            <Link
              href={`/single_track/${track.id}`}
              as={`/single_track/${track.id}`}
            >
              <BsPlayCircle />
            </Link>
          </div>
        ))}
      </div>
    </>
  );
};

export default Top_Track;

export async function getServerSideProps() {
  const res = await fetch("https://api.deezer.com/chart/0/tracks");

  const data = await res.json();

  return {
    props: {
      data,
    },
  };
}
