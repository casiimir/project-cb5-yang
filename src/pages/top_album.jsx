import Link from "next/link"
import Image from "next/image"
import styles from "./top_album/styles.module.scss"

const Top_Album = ({data}) => {
  return (
    <div className={styles.TopAlbum}>
        {data?.data
        .map((album) => (
            <div className={styles.container_Content}>
                <Image 
                src={album.cover_medium}
                width={200}
                height={200}
                alt={album.name}
                />
                <div className={styles.infoAlbum}>
                    <h2>{album.title}</h2>
                    <div className={styles.subInfoAlbum}>
                        <span>{album.artist.name}</span>
                        <span>Position: {album.position}</span>
                    </div>
                </div>
                <Link href={"/"}><span className={styles.seeAll}>See Details</span></Link>
            </div>
          ))}
    </div>
  )
}

export default Top_Album

export async function getServerSideProps() {
    const res = await fetch('https://api.deezer.com/chart/0/albums');
  
    const data = await res.json();
  
    return { 
      props: 
      { 
        data
      } 
    };
  }
  