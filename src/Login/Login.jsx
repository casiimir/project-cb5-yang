import { applicationContext } from "@/store/state";
import { useState } from "react";
import Image from "next/image";
import { useContext } from "react";
import styles from "./styles.module.scss";
import credentials from "@/utils/credentials";

const Login = () => {
  const onHandleUsername = (e) => {
    setUsername(e.target.value);
  };

  const onHandlePassword = (e) => {
    setPassword(e.target.value);
  };
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [credential, setCredential] = useState();

  const onHandleSubmit = () => {
    setCredential({ username, password });
  };

  for (let i = 0; i < credentials.login.length; i++) {
    if (
      credentials.login[i].username === credential?.username &&
      credentials.login[i].password === credential?.password
    ) {
      if (typeof window !== "undefined") {
        localStorage.setItem("logged", true);
        localStorage.setItem("user", [credential.username]);
      }
    }
  }

  return (
    <div className={styles.Login}>
      <div className={styles.containerLogin}>
        <Image
          src={"/logo.png"}
          alt="logo.png"
          width={300}
          height={300}
          className={styles.logo}
        />
        <h1>
          YANG<span>IFY</span>
        </h1>
        <form className={styles.loginForm} onSubmit={onHandleSubmit}>
          <input
            type="text"
            placeholder="username"
            onChange={onHandleUsername}
            value={username}
            required
          />
          <input
            type="password"
            placeholder="password"
            onChange={onHandlePassword}
            value={password}
            required
          />
          <input type="submit" value="Login" className={styles.login} />
        </form>
      </div>

      <Image
        src={"/deezerlogo.png"}
        alt="logo.png"
        width={20}
        height={20}
        className={styles.logoDeezer}
      />
    </div>
  );
};

export default Login;
