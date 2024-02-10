//imports
import styles from './about.module.css';

//components
import AboutText from './aboutText.js';
import AboutImg from './aboutImg.js';

export default function About() {
  return (
    <section aria-labelledby="about">
      <h2 id="about" className={styles.AboutMainHeading}>About Us</h2>
      <div className={styles.AboutFlexContainer}>
        <div className={styles.AboutContainerText}>
          <AboutText styles={styles} />
        </div>
        <div className={styles.AboutContainerImage}>
          <AboutImg styles={styles} />
        </div>
      </div>
    </section>
  )
}
