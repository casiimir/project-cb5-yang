import Spline from '@splinetool/react-spline';
import styles from "./styles.module.scss"

const QRcode = () => {
  return (
    <div className={styles.QRcode}>
        <Spline scene="https://prod.spline.design/LJJiRQTLuDq3lWSV/scene.splinecode" className={styles.Spline}/>
    </div>

  )
}

export default QRcode