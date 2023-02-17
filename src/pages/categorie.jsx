import Link from "next/link";
import { MdArrowBackIos } from "react-icons/md";
import { BsPlayCircle } from "react-icons/bs";

import styles from "./categories_page/styles.module.scss"

export default function GenreList({ data }){

    return(
        <>
      <Link className={styles.Back} href={"/"}>
        <MdArrowBackIos /> CATEGORIES
      </Link>
        <div className={styles.Categories}>
            <ul className={styles.wrapper}>
            {data.data
            .slice(1, data.length)
            .map((genre) => (
            <div className={styles.Content}>
                <h2>{genre.name}</h2>
                <BsPlayCircle  className={styles.Play} />
            </div>
            ))}
      </ul>
    </div>
    </>
    )
}

export async function getServerSideProps(){
    const res = await fetch ("https://api.deezer.com/genre/");
    const data = await res.json();

    return{
        props:{
            data,
        }
    }
}