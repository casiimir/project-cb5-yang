import { MdArrowBackIos } from "react-icons/md";
import { BsLinkedin, BsGithub } from "react-icons/bs";
import Image from 'next/image';
import Link from "next/link";

import styles from "./about_page/styles.module.scss";


const About = ({data}) => {
  return (
    <>
    <Link className={styles.Back} href={"/"}>
      <MdArrowBackIos /> SVILUPPATA DA
    </Link>
    <div className={styles.About}>
        {data.map((item) => (
          <div className={styles.Content} key={item.id}>
            <Image
            src={item.image}
            width={150}
            height={150}
            alt={item.name}  
            />
            <div className={styles.infoDev}>
              <h2>{item.name}</h2>
              <a href={item.linkedin}>
                <BsLinkedin />
                <span>{item.linkedin.substring(28, item.linkedin.length-1)}</span>
              </a>
              <a href={item.github}>
                <BsGithub />
                <span>{item.github.substring(0, 18)}</span>
              </a>
            </div>
          </div>
        ))}
      </div>
    </>

  );
};

export default About;

export async function getServerSideProps() {
  const res = await fetch("http://localhost:3000/api/about");

  const data = await res.json();

  return {
    props: {
      data,
    },
  };
}
