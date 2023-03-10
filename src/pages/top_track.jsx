import Link from "next/link";
import Image from "next/image";

import { BsPlayCircle } from "react-icons/bs";
import { MdArrowBackIos } from "react-icons/md";

import styles from "./top_track/styles.module.scss";

const Top_Track = ({ data }) => {
  return (
    <div className={styles.TopTrack}>
      <Link className={styles.Back} href={"/#"}>
        <MdArrowBackIos /> TOP TRACKS
      </Link>
      <div className={styles.Content}>
        {data?.data.map((track) => (
          <div className={styles.container_Content} key={track.id}>
            <div className={styles.track}>
              <Link
              href={`/single_track/${track.id}`}
              as={`/single_track/${track.id}`}>
                <Image
                  src={track.album.cover_medium}
                  width={250}
                  height={250}
                  alt="album cover"
                />
              </Link>
              <div className={styles.infoTrack}>
                <h2>
                  {track.title}
                </h2>
                <h3>{track.artist.name}</h3>
              </div>
            </div>
            <Link
              href={`/single_track/${track.id}`}
              as={`/single_track/${track.id}`}
            >
              <BsPlayCircle className={styles.PlayCircle} />
            </Link>
          </div>
        ))}
      </div>
    </div>
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
