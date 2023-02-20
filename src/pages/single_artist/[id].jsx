import Link from "next/link";
import { MdArrowBackIos } from "react-icons/md";
import Image from "next/image";

import styles from "./styles.module.scss";

const SingleArtist = ({ artistData }) => {

  return (
    <div className={styles.SingleArtist}>
        <Link className={styles.Back} href={`/top_track`}>
            <MdArrowBackIos />
            Artists
        </Link>
        <div className={styles.containerSingleArtist}>
            <div className={styles.Content}>
                <span>Latest releases</span>
                {
                    artistData?.data
                    .slice(0,10)
                    .map(artist => (
                        <div className={styles.infoArtist} key={artist.id}>
                            <Image 
                            width={200}
                            height={200}
                            src={artist.cover_medium}
                            alt={artist.title}
                            />
                            <div className={styles.infoArtist}>
                                <h2>Title: {artist.title}</h2>
                                <h3>Release date: {artist.release_date.split("-").reverse().join("-")}</h3>
                                <h4>Follower: {artist.fans}</h4>
                                <h5>{artist.explicit_lyrics ? "Explicit Lyrics" : ""}</h5>
                            </div>
                        </div>
                    ))  
                }
            </div>
        </div>
    </div>
  )
}

export default SingleArtist

export async function getStaticPaths() {
    const res = await fetch("https://api.deezer.com/chart/0/tracks");
    const data = await res.json();
  
    const paths = data.data.map((artist) => ({
      params: { id: artist.id.toString() },
    }));
  
    return { paths, fallback: true };
  }

  export async function getStaticProps({ params }) {
    const res = await fetch(`https://api.deezer.com/artist/${params.id}/albums?index=10`);
    const artistData = await res.json();
  
    return { props: { artistData } };
  }
  
