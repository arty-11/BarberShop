import Image from "next/image"

export default function WtfuImg({ styles }) {
  return (
    <Image
        src='/Barber-imgs/picture-8.jpg'
        fill={true}
        quality={100}
        sizes='(max-width:800px) 30vw, 40vw'
        alt="Hair Lounge location"
        className={styles.img}
          />
      )
}