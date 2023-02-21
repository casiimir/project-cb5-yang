import Image from "next/image";
import Link from "next/link";
import { MdArrowBackIos } from "react-icons/md";
import styles from "./top_artist/styles.module.scss";

const Top_Artist = ({ data }) => {
  return (
    <>
      <div className={styles.TopArtist}>
        <Link className={styles.Back} href={"/"}>
          <MdArrowBackIos /> TOP ARTISTS
        </Link>
        <div className={styles.Content}>
          {data?.data.map((artist) => (
            <div className={styles.container_Content} key={artist.id}>
              <Link 
              href={`/single_artist/${artist.id}`}
              as={`/single_artist/${artist.id}`} 
              >
                <Image
                  src={artist.picture_medium}
                  width={200}
                  height={200}
                  alt={artist.name}
                />
              </Link>
              <div className={styles.infoArtist}>
                <Link
                href={`/single_artist/${artist.id}`}
                as={`/single_artist/${artist.id}`} >
                  <h2>{artist.name}</h2>
                </Link>
                <h3>Position: {artist.position}°</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Top_Artist;

export async function getServerSideProps() {
  const res = await fetch("https://api.deezer.com/chart/0/artists");

  const data = await res.json();

  return {
    props: {
      data,
    },
  };
}
