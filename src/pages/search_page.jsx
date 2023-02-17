import SingleTrack from "@/components/singleTrack/SingleTrack";
import { useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { MdArrowBackIos } from "react-icons/md";

import styles from "../pages/search_page/styles.module.scss";

export default function SearchPage({ data }) {
  const router = useRouter();

  const [searchTitle, setSearchTitle] = useState("");

  const onHandleSubmit = (e) => {
    e.preventDefault();

    router.push(`/search_page?q=${searchTitle}`);
  };

  const onHandleChange = (e) => {
    e.preventDefault();
    setSearchTitle(e.target.value);
  };

  return (
    <>
      <Link className={styles.Back} href={"/"}>
        <MdArrowBackIos /> SEARCH
      </Link>
      <div className={styles.main}>
        <form onSubmit={onHandleSubmit}>
          <input
            className={styles.SearchSubmit}
            onChange={onHandleChange}
            type="text"
            placeholder="Track title"
            value={searchTitle}
            required
          />
          <input type="submit" value="search" onSubmit={onHandleSubmit} />
        </form>
        <SingleTrack data={data} className={styles.singleTrack} />
      </div>
    </>
  );
}

export async function getServerSideProps(context) {
  const res = await fetch(`https://api.deezer.com/search?q=${context.query.q}`);
  const data = await res.json();

  return {
    props: {
      data: data.data,
    },
  };
}
