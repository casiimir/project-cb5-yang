import SingleTrack from "@/components/singleTrack/SingleTrack";
import { useContext, useState, useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { applicationContext } from "@/store/state";

import { MdArrowBackIos } from "react-icons/md";
import styles from "../pages/search_page/styles.module.scss";

export default function SearchPage({ data }) {
  const { dispatch } = useContext(applicationContext);

  const [searchTitle, setSearchTitle] = useState("");

  const router = useRouter();

  useEffect(() => {
    if (router.asPath === "/search_page?q=track") {
      dispatch({ type: "active", payload: router.asPath });
    }
  }, [router.asPath]);

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
    <div className={styles.Search}>
      <div className={styles.ContainerBackForm}>
        <Link className={styles.Back} href={"/#"}>
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
