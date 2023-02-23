import { MdArrowBackIos } from "react-icons/md";
import { BsLinkedin, BsGithub } from "react-icons/bs";
import Image from 'next/image';
import Link from "next/link";

import styles from "./about_page/styles.module.scss";
import { useEffect, useState } from "react";


const About = () => {

  const [data, setData] = useState([])

  useEffect(() =>{
    fetch("/api/about")
    .then(res => res.json())
    .then(data => setData(data))
  }, [])

  return (
    <div className={styles.About}>
    <Link className={styles.Back} href={"/"}>
      <MdArrowBackIos /> SVILUPPATA DA
    </Link>
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
                <BsLinkedin className={styles.Logo} />
                <span>{item.linkedin.substring(28, item.linkedin.length-1)}</span>
              </a>
              <a href={item.github}>
                <BsGithub className={styles.Logo}/>
                <span>{item.github.substring(0, 18)}</span>
              </a>
            </div>
          </div>
        ))}
      </div>
  );
};

export default About;


