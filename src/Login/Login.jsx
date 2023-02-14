import Image from "next/image"
import styles from "./styles.module.scss"

const Login = () => {
  return (
    <div className={styles.Login}>
        <div className={styles.containerLogin}>
            <Image 
            src={"/logo.png"}
            width={300}
            height={300}
            className={styles.logo}
            />
            <h1>YANG<span>IFY</span></h1>
            <form className={styles.loginForm}>
            <input type="text" placeholder="Username" required/>
                <input type="password" placeholder="Password" required/>
                <input className={styles.login} type="submit" value="LOGIN" />
            </form>
        </div>

        <Image 
        src={"/deezerlogo.png"}
        width={20}
        height={20}
        className={styles.logoDeezer}
        />
    </div>
  )
}

export default Login