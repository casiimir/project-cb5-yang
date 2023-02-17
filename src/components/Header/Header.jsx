import { useState, useEffect } from "react";
import Image from "next/image";
import styles from "./styles.module.scss";
import ModalMenu from "../ModalMenu";

const Header = () => {
  const [isModalEnabled, setModalEnabled] = useState(false);
  const [profileName, setprofileName] = useState("");

  const onHandleModal = () => {
    setModalEnabled((prev) => !prev);
  };

  useEffect(() => {
    setprofileName(JSON.stringify(localStorage.getItem("user")));
  }, []);

  return (
    <>
      {isModalEnabled && <ModalMenu onHandleModal={onHandleModal} />}
      <header className={styles.Header}>
        <Image src={"/deezerlogo.png"} alt="logo.png" width={20} height={20} />
        <div className={styles.User}>
          Ciao, <span>{profileName.slice(1, -1)}</span>
        </div>
        <Image
          src={"/logo.png"}
          alt="logo.png"
          width={40}
          height={40}
          onClick={onHandleModal}
        />
      </header>
    </>
  );
};

export default Header;
