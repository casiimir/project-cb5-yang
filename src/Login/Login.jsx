import { applicationContext } from "@/store/state";
import { useState } from "react";
import Image from "next/image";
import { useContext } from "react";
import styles from "./styles.module.scss";

const Login = () => {
  const { dispatch, state } = useContext(applicationContext);

  const onHandleUsername = (e) => {
    setUsername(e.target.value);
  };

  const onHandlePassword = (e) => {
    setPassword(e.target.value);
  };
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [credential, setCredential] = useState();

  const onHandleSubmit = (e) => {
    e.preventDefault();
    setCredential({ username, password });
    console.log(state.login);
  };
  for (let i = 0; i < state.login.length; i++) {
    if (
      state.login[i].username === credential?.username &&
      state.login[i].password === credential?.password
    ) {
      dispatch({
        type: "LOGIN",
        payload: { username, password, logged: true },
      });
      console.log(state);
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
          <input type="submit" value="Login" className={styles.login}/>
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
