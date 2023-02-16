import Link from "next/link";
import Image from "next/image";
import { MdArrowBackIos } from "react-icons/md";
import styles from "./top_album/styles.module.scss";

const Top_Album = ({ data }) => {
  return (
    <>
      <Link className={styles.Back} href={"/"}>
        <MdArrowBackIos /> ALL ALBUMS
      </Link>
      <div className={styles.TopAlbum}>
        {data?.data.map((album) => (
          <div className={styles.container_Content}>
            <Image
              src={album.cover_medium}
              width={200}
              height={200}
              alt={album.name}
            />
            <div className={styles.infoAlbum}>
              <h2>
                {album.title.length > 10
                  ? `${album.title.substring(0, 10)}...`
                  : album.title}
              </h2>
              <div className={styles.subInfoAlbum}>
                <h5>{album.artist.name}</h5>
                <span>Position: {album.position}</span>
              </div>
            </div>
            <Link
              className={styles.seeAll}
              href={`/single_album/${album.id}`}
              as={`/single_album/${album.id}`}
            >
              <span>See Details</span>
            </Link>
          </div>
        ))}
      </div>
    </>
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
