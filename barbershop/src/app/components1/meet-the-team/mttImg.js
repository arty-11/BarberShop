//imports
import Image from "next/image";

//components
import MttSocialMedia from "./mttSocialMedia.js";

export default function MttImg({ styles }) {
  return (
    <div className={styles.mttImgContainer}>
        <Image
        src='/Barber-imgs/picture-2.jpg'
        fill={true}
        quality={100}
        sizes='(max-width:800px) 30vw, 40vw'
        alt="Hair Lounge barber"
        className={styles.mttImg}
          />
        <MttSocialMedia styles={styles} />
    </div>
  )
}
