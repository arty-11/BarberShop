import Image from "next/image"

export default function Img({ src, styles}) {
  return (
    <Image
        src={src}
        fill={true}
        quality={100}
        sizes='(max-width:800px) 30vw, 40vw'
        className={styles.img}
        alt="Hair Lounge Video"
        />
  )
}
