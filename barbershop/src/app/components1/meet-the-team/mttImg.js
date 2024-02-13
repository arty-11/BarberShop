import Image from "next/image"

export default function MttImg({ styles }) {
    return (
        <Image
            src='/Barber-imgs/picture-2.jpg'
            fill={true}
            quality={100}
            sizes='(max-width:800px) 30vw, 40vw'
            alt="Hair Lounge barber"
            className={styles.img}
        />
    )
}