import Image from 'next/image';
import styles from './about.module.css';

export default function About() {
  return (
    <section aria-labelledby="about">
      <h2 id="about" className={styles.AboutMainHeading}>About Us</h2>
      <div className={styles.AboutFlexContainer}>
        <div className={styles.AboutContainerText}>
          <h3 className={[styles.AboutHeading, styles.MarginLeft].join(" ")}>
            Why Hair Lounge?
          </h3>
          <br />
          <p
            className={[styles.MarginLeft, styles.ParaMarginTop, styles.ParaMarginRight].join(" ")}>
            Well, what makes Hair Lounge unique from other barber shops is our staff expertise &#40;each barber has 12+ years&#41;, haircuts &#40;we offer quality and a wide range of trims&#41; and &apos;barber banter&apos;.
          </p>
          <br />
          <p
            className={[styles.MarginLeft, styles.ParaMarginTop, styles.ParaMarginRight].join(" ")}>
            A relaxing and chill ambiance. Regardless of gender, race, or any other factor, we strive to create enduring relationships with all our customers. At Hair Lounge we strive to boost confidence and bring out the best in every client. Getting a haircut is just one part of what we do.
          </p>
        </div>
        <div className={styles.AboutContainerImage}>
          <Image
            src='/Barber-imgs/picture-6.jpg'
            fill={true}
            quality={100}
            sizes='(max-width:800px) 30vw, 40vw'
            alt="Barber cutting hair"
            className={styles.AboutImage}
            priority
          />
        </div>
      </div>
    </section>
  )
}
