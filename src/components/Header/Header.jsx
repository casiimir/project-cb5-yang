import { applicationContext } from "@/store/state";
import { useContext, useState } from "react";
import Image from "next/image";
import styles from "./styles.module.scss";
import ModalMenu from "../ModalMenu";

const Header = () => {
  const { state } = useContext(applicationContext);

  const [isModalEnabled, setModalEnabled] = useState(false);

  const onHandleModal = () => {
    setModalEnabled((prev) => !prev);
  };

  return (
    <>
      {isModalEnabled && <ModalMenu onHandleModal={onHandleModal} />}
      <header className={styles.Header}>
        <Image src={"/deezerlogo.png"} alt="logo.png" width={20} height={20} />
        <div className={styles.User}>
          Ciao, <span>{state?.login?.logged?.username}</span>
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
