import Image from "next/image"
import styles from "./styles.module.scss"

const QRcode = () => {
  return (
    <div className={styles.QRcode}>
        <Image
        src={"/qrcodetemplate.png"} 
        width={1280}
        height={768}
        alt={"QRCODE"}
        />
    </div>

  )
}

export default QRcode