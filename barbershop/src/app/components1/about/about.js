//imports
import styles from './about.module.css'

//components
import AboutText from './aboutText'
import AboutImg from './aboutImg'

export default function About() {
  return (
    <section aria-labelledby="about" className={styles.sectionContainer}>
      <div className={styles.divRight}></div>
      <div className={styles.divLeft}></div>
      <h2 id="about" className={["headingStyle", styles.mainHeading].join(" ")}>About Us</h2>
      <div className={styles.flexContainer}>
        <div className={styles.containerText}>
          <AboutText styles={styles} />
        </div>
        <div className={styles.containerImg}>
          <AboutImg styles={styles} />
        </div>
      </div>
    </section>
  )
}