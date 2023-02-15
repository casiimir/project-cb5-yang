import styles from "./homepage/styles.module.scss"

export async function getServerSideProps() {
  const res = await fetch('https://api.deezer.com/chart/0/artists');
  const data = await res.json();
  return { props: { data } };
}

function Homepage({ data }) {
  console.log(data);

  return (
    <div className={styles.Homepage}>
      <h1>Top Artists on Deezer</h1>
      <ul>
        {data?.data.map((artist) => (
          <li key={artist.id}>{artist.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default Homepage;