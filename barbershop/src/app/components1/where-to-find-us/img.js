import Image from "next/image"

export default function Img({ styles }) {
  return (
    <Image
        src='/Barber-imgs/picture-9.jpg'
        fill={true}
        quality={100}
        sizes='(max-width:800px) 30vw, 40vw'
        alt="Hair Lounge location"
        className={styles.img}
          />
      )
}