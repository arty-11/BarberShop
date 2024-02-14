import styles from './social-media.module.css'
import Image from 'next/image'

export default function SocialMedia() {
  return (
    <section aria-labelledby='social-media' className={styles.section}>
      <div className={styles.textGalleryFlexContainer}>
        <div className={styles.textFlexContainer}>
          <div>
            <h2 id="social-media" className={styles.header}>We Are On Instagram And TikTok!</h2>
          </div>
          <div>
            <p>Instagram: @gb_hairloungelondon</p>
            <p>TikTok: @gb_hairloungelondon</p>
          </div>
        </div>
        <div className={styles.galleryGridContainer}>
          <div>
            <Image
        src='/Barber-imgs/picture-2.jpg'
        fill={true}
        quality={100}
        sizes='(max-width:800px) 30vw, 40vw'
        className={styles.img}
        alt="Hair Lounge Video"
        />
          </div>
          <div>
            <Image
        src='/Barber-imgs/picture-3.jpg'
        fill={true}
        quality={100}
        sizes='(max-width:800px) 30vw, 40vw'
        className={styles.img}
        alt="Hair Lounge Video"
        />
          </div>
          <div>
            <Image
        src='/Barber-imgs/picture-4.jpg'
        fill={true}
        quality={100}
        sizes='(max-width:800px) 30vw, 40vw'
        className={styles.img}
        alt="Hair Lounge Video"
        />
          </div>
          <div>
            <Image
        src='/Barber-imgs/picture-5.jpg'
        fill={true}
        quality={100}
        sizes='(max-width:800px) 30vw, 40vw'
        className={styles.img}
        alt="Hair Lounge Video"
          />
          </div>
        </div>
      </div>
      <div className={styles.videoFlexContainer}>
        <div></div>
      </div>
    </section>
  )
}