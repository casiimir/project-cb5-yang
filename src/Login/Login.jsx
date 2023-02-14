import Image from "next/image"
import styles from "./styles.module.scss"

const Login = () => {
  return (
    <div className={styles.Login}>
        <Image src={"/"}/>
        <form className={styles.loginForm}>
            <input type="text" />
            <input type="password" />
            <input type="submit" value="Login" />
        </form>
    </div>
  )
}

export default Login