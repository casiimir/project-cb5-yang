import Head from "next/head";
import { applicationContext, initialState } from "@/store/state";
import { useReducer } from "react";
import { loginReducer } from "@/store/loginReducer";
import Link from "next/link";
import Image from "next/image";
import { BsPlayCircle } from "react-icons/bs";
import Navbar from "../components/Navbar/Navbar";
import SearchPage from "./searchPage";


import Login from "@/Login/Login";
import styles from "@/styles/Home.module.scss";




export default function Home({dataArtist, dataTracks, dataAlbums}) {
  const [state, dispatch] = useReducer(loginReducer, initialState);

  for (let i = 0; i < state.login.length; i++) {
    if (state.login[i].logged === false) {
      return (
        <applicationContext.Provider value={{ state, dispatch }}>
          <Login />
          <SearchPage />
        </applicationContext.Provider>
      );
    }
  }

  return (
    <>
      <Head>
        <title>project-cb5-yang</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <applicationContext.Provider value={{ state, dispatch }}>
        <div className={styles.Homepage}>

          <section className={styles.topArtist}>
            <div className={styles.header}>
              <h2>Top Artists</h2>
              <Link href={"/top_artist"}><span>See all</span></Link>
            </div>
            <div className={styles.container_Content}>
              {dataArtist?.data
              .slice(0,5)
              .map((artist) => (
                <Link href={"/top_artist"}>
                  <Image 
                  src={artist.picture_medium}
                  width={200}
                  height={200}
                  alt={artist.name}
                  />
                </Link>
                ))}
            </div>
          </section>

          <section className={styles.topTracks}>
            <div className={styles.header}>
              <h2>Top Tracks</h2>
              <Link href={"/top_track"}><span>See all</span></Link>
            </div>
            <div className={styles.container_Content}>
            {dataTracks?.data
            .slice(0,5)
            .map((track) => (
              <div className={styles.content}>
                <Link href={"/top_track"}>
                  <Image 
                  src={track.artist.picture_medium}
                  width={200}
                  height={200}
                  alt={track.title}
                  />
                </Link>
                <Link href={"/top_track"} className={styles.btnPlay}><BsPlayCircle /></Link>
              </div>
                ))}

            </div>
          </section>

          <section className={styles.topAlbums}>
            <div className={styles.header}>
              <h2>Top Albums</h2>
              <span>See all</span>
            </div>
            <div className={styles.container_Content}>
            {dataAlbums?.data
            .slice(0,5)
            .map((artist) => (
                <Link href={"/"}>
                  <Image 
                  src={artist.cover_medium}
                  width={200}
                  height={200}
                  alt={artist.name}
                  />
                </Link>
                ))}
            </div>
            </section>

        </div>
        </applicationContext.Provider>
        < Navbar />
      </main>

    </>
  );
}

export async function getServerSideProps() {
  const resArtist = await fetch('https://api.deezer.com/chart/0/artists');
  const resTracks = await fetch('https://api.deezer.com/chart/0/tracks');
  const resAlbums = await fetch('https://api.deezer.com/chart/0/albums');

  const dataArtist = await resArtist.json();
  const dataTracks = await resTracks.json();
  const dataAlbums = await resAlbums.json();

  return { 
    props: 
    { 
      dataArtist,
      dataTracks,
      dataAlbums
    } 
  };
}
