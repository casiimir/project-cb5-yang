import SingleTrack from "@/components/singleTrack/SingleTrack";
import { useState } from "react";
import { useRouter } from "next/router";

import styles from "../styles/searchPage.module.scss";

export default function SearchPage({ data }) {
  const router = useRouter();

  const [searchTitle, setSearchTitle] = useState("");

  const onHandleSubmit = (e) => {
    e.preventDefault();

    router.push(`/searchPage?q=${searchTitle}`);
  };

  const onHandleChange = (e) => {
    e.preventDefault();
    setSearchTitle(e.target.value);
  };

  return (
    <div className={styles.main}>
      <form onSubmit={onHandleSubmit}>
        <input
          onChange={onHandleChange}
          type="text"
          placeholder="Search title"
          value={searchTitle}
          required
        />
        <input type="submit" value="Search" onSubmit={onHandleSubmit} />
      </form>
      <SingleTrack data={data} className={styles.singleTrack} />
    </div>
  );
}

export async function getServerSideProps(context) {
  // console.log(context);
  const res = await fetch(`https://api.deezer.com/search?q=${context.query.q}`);
  const data = await res.json();

  return {
    props: {
      data: data.data,
    },
  };
}
