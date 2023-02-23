import Link from "next/link";
import Image from "next/image";

import { MdArrowBackIos } from "react-icons/md";
import { BsPlayCircle } from "react-icons/bs";

import styles from "./top_album/styles.module.scss";

const Top_Album = ({ data }) => {
  return (
      <div className={styles.TopAlbum}>
        <Link className={styles.Back} href={"/#"}>
        <MdArrowBackIos /> ALL ALBUMS
        </Link>
        <div className={styles.container_Content}>
        {data?.data.map((album) => (
          <div className={styles.infoContent} key={album.id}>
            <div className={styles.Content}>
            <Link
              href={`/single_album/${album.id}`}
              as={`/single_album/${album.id}`}>
              <Image
                src={album.cover_medium}
                width={200}
                height={200}
                alt={album.title}
              />
            </Link>
            <div className={styles.infoAlbum}>
              <h2>
                {album.title.length > 10
                  ? `${album.title.substring(0, 10)}...`
                  : album.title}
              </h2>
              <div className={styles.subInfoAlbum}>
                <h5>{album.artist.name}</h5>
                <span>Position: {album.position}°</span>
              </div>
            </div>
            </div>
            <Link
              className={styles.seeAll}
              href={`/single_album/${album.id}`}
              as={`/single_album/${album.id}`}
            >
              <BsPlayCircle className={styles.PlayCircle} />
            </Link>
          </div>
        ))}
        </div>
      </div>
  );
};

export default Top_Album;

export async function getServerSideProps() {
  const res = await fetch("https://api.deezer.com/chart/0/albums");

  const data = await res.json();

  return {
    props: {
      data,
    },
  };
}
