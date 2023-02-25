import Link from "next/link";
import { MdArrowBackIos } from "react-icons/md";
import Image from "next/image";

import styles from "./styles.module.scss";

const SingleArtist = ({ artistAlbum, artistData }) => {
  return (
    <div className={styles.SingleArtist}>
      <Link className={styles.Back} href={`/top_artist`}>
        <MdArrowBackIos />
        ARTIST
      </Link>
      <div className={styles.containerSingleArtist}>
        <div className={styles.mainArtist}>
          <Image
            src={artistData?.picture_big}
            width={500}
            height={500}
            alt={artistData?.name}
          />
          <div className={styles.infoMainArtist}>
            <h2>{artistData?.name}</h2>
            <h3>N° Albums: {artistData?.nb_album}</h3>
            <h4>Follower: {artistData?.nb_fan}</h4>
          </div>
        </div>
        <div className={styles.container_Content}>
          <span>Latest releases</span>
          <div className={styles.Content}>
            {artistAlbum?.data.slice(0, 10).map((artist) => (
              <div className={styles.infoMainAlbum} key={artist?.id}>
                <Link
                  href={`/single_album/${artist.id}`}
                  as={`/single_album/${artist.id}`}
                >
                  <Image
                    width={200}
                    height={200}
                    src={artist?.cover_medium}
                    alt={artist?.title}
                  />
                  <div className={styles.infoAlbum}>
                    <h2>{artist?.title}</h2>
                    <h3>
                      Release:{" "}
                      {artist?.release_date.split("-").reverse().join("-")}
                    </h3>
                    <h4>Follower: {artist?.fans}</h4>
                    <h5>{artist?.explicit_lyrics ? "Explicit Lyrics" : ""}</h5>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleArtist;

export async function getStaticPaths() {
  const res = await fetch("https://api.deezer.com/chart/0/tracks");
  const data = await res.json();

  const paths = data.data.map((artist) => ({
    params: { id: artist.id.toString() },
  }));

  return { paths, fallback: true };
}

export async function getStaticProps({ params }) {
  const resAlbum = await fetch(
    `https://api.deezer.com/artist/${params.id}/albums`
  );
  const resArtist = await fetch(`https://api.deezer.com/artist/${params.id}`);

  const artistAlbum = await resAlbum.json();
  const artistData = await resArtist.json();

  return {
    props: {
      artistData,
      artistAlbum,
    },
  };
}
