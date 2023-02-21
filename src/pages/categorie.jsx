import Link from "next/link";
import Image from "next/image";
import { useContext, useEffect } from "react";
import { useRouter } from "next/router";
import { applicationContext } from "@/store/state";

import { MdArrowBackIos } from "react-icons/md";
import { BsPlayCircle } from "react-icons/bs";
import styles from "./categories_page/styles.module.scss";

export default function GenreList({ data }) {
  const { dispatch } = useContext(applicationContext);

  const router = useRouter(applicationContext);

  useEffect(() => {
    if (router.asPath === "/categorie") {
      dispatch({ type: "active", payload: router.asPath });
    }
  }, [router.asPath]);

  return (
    <>
      <Link className={styles.Back} href={"/#"}>
        <MdArrowBackIos /> CATEGORIES
      </Link>
      <div className={styles.Categories}>
        <ul className={styles.wrapper}>
          {data.data.slice(1, data.length).map((genre) => (
            <div className={styles.Content} key={genre.id}>
              <Image
                className={styles.Picture}
                src={genre.picture_medium}
                width={250}
                height={250}
                alt={genre.name}
              />
              <h2>{genre.name}</h2>
              <BsPlayCircle className={styles.Play} />
            </div>
          ))}
        </ul>
      </div>
    </>
  );
}

export async function getServerSideProps() {
  const res = await fetch("https://api.deezer.com/genre/");
  const data = await res.json();

  return {
    props: {
      data,
    },
  };
}
