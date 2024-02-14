//imports
import styles from "./where-to-find-us.module.css"

//components
import Img from "./img"
import Text from "./text"

export default function WhereToFindUs() {
  return (
    <section aria-labelledby="where-to-find-us">
      <h2 id="where-to-find-us" className={["headingStyle", styles.heading].join(" ")}>
        Where To Find Us
      </h2>
      <div className={styles.mainFlexContainer}>
        <div className={styles.textFlexContainer}>
          <Text styles={styles} />
        </div>
        <div className={styles.imgContainer}>
          <Img styles={styles} />
        </div>
      </div>
    </section>
  )
}