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
    <div className={styles.ContainerBackForm}>
      <Link className={styles.Back} href={"/"}>
        <MdArrowBackIos /> SEARCH
      </Link>
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
        </div>
      <div className={styles.main}>
        <SingleTrack data={data} />
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
