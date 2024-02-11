import Image from 'next/image';

export default function AboutImg({ styles }) {
  return (
    <Image
        src='/Barber-imgs/picture-6.jpg'
        fill={true}
        quality={100}
        sizes='(max-width:800px) 30vw, 40vw'
        alt="Barber cutting hair"
        className={styles.aboutImage}
        priority
          />
  )
}
