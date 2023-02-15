import Image from "next/image"
import styles from "./top_artist/styles.module.scss"

const Top_Artist = ({data}) => {
  return (
    <div className={styles.TopArtist}>
      {data?.data
      .map((artist) => (
        <div className={styles.container_Content}>
          <Image 
          src={artist.picture_medium}
          width={200}
          height={200}
          alt={artist.name}
          />
          <div className={styles.infoArtist}>
            <h2>{artist.name}</h2>
            <h3>{artist.position}</h3>
            <h4>{artist.type}</h4>
          </div>
        </div>
          ))}
    </div>
  )
}

export default Top_Artist

export async function getServerSideProps() {
  const res = await fetch('https://api.deezer.com/chart/0/artists');

  const data = await res.json();

  return { 
    props: 
    { 
      data
    } 
  };
}
