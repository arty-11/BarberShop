//imports
import styles from './about.module.css'

//components
import Text from './text'
import Img from './img'

export default function About() {
  return (
    <section aria-labelledby="about" className={styles.sectionContainer}>
      <div className={styles.divRight}></div>
      <div className={styles.divLeft}></div>
      <h2 id="about" className={["headingStyle", styles.mainHeading].join(" ")}>About Us</h2>
      <div className={styles.flexContainer}>
        <div className={styles.containerText}>
          <Text styles={styles} />
        </div>
        <div className={styles.containerImg}>
          <Img styles={styles} />
        </div>
      </div>
    </section>
  )
}