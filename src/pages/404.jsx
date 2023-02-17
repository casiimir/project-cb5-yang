import { RiNumber4 } from 'react-icons/ri';
import Image from 'next/image';

import styles from "./404/styles.module.scss";

const ErrorPage404 = () => {
  return (
    <>
    <div className={styles.Error}>
      <RiNumber4 />
       <Image
          src={"/logo.png"}
          alt="logo.png"
          width={300}
          height={300}
          className={styles.logo}
       />
      <RiNumber4 />
    </div>
    <h2>Page not found</h2>
    </>
  );
};

export default ErrorPage404;
