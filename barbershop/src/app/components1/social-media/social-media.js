//imports
import styles from './social-media.module.css'

//components
import Img from './img'
import Text from './text'

export default function SocialMedia() {

  const imgs = {
    img1: '/Barber-imgs/picture-2.jpg',
    img2: '/Barber-imgs/picture-3.jpg',
    img3: '/Barber-imgs/picture-4.jpg',
    img4: '/Barber-imgs/picture-5.jpg'
  }

  const socialMediaInfo = {
    instagram: {
      accountName: "@gb_hairloungelondon",
      link: "https://www.instagram.com/gb_hairloungelondon/?hl=en-gb"
    },
    tikTok: {
      accountName: "@gb_hairloungelondon",
      link: "https://www.tiktok.com/@gb_hairloungelondon"
    }
  }

  return (
    <section aria-labelledby='social-media' className={styles.section}>
      <div className={styles.textGalleryFlexContainer}>
        <Text socialMediaInfo={socialMediaInfo} styles={styles} />
          <div className={styles.galleryGridContainer}>
            <div>
              <Img src={imgs.img1} styles={styles} />
            </div>
            <div className={styles.roundedBorder}>
              <Img src={imgs.img2} styles={styles} />
            </div>
            <div className={styles.roundedBorder}>
              <Img src={imgs.img3} styles={styles} />
            </div>
            <div>
              <Img src={imgs.img4} styles={styles} />
            </div>
          </div>
      </div>
      <div className={styles.videoFlexContainer}>
        <div></div>
      </div>
    </section>
  )
}