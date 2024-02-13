//imports
import styles from './about.module.css'

//components
import AboutText from './aboutText'
import AboutImg from './aboutImg'

export default function About() {
  return (
    <section aria-labelledby="about" className={styles.aboutSectionContainer}>
      <div className={styles.aboutDivRight}></div>
      <div className={styles.aboutDivLeft}></div>
      <h2 id="about" className={["headingStyle", styles.aboutMainHeading].join(" ")}>About Us</h2>
      <div className={styles.aboutFlexContainer}>
        <div className={styles.aboutContainerText}>
          <AboutText styles={styles} />
        </div>
        <div className={styles.aboutContainerImage}>
          <AboutImg styles={styles} />
        </div>
      </div>
    </section>
  )
}
