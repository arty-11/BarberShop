//imports
import styles from "./where-to-find-us.module.css";

//components
import WtfuImg from "./wtfuImg";
import WtfuText from "./wtfuText";

export default function WhereToFindUs() {
  return (
    <section aria-labelledby="where-to-find-us">
      <h2 id="where-to-find-us" className="headingStyle">
      Where To Find Us
      </h2>
      <div className={styles.whereToFindUsFlexContainer}>
        <div className={styles.whereToFindUsTextContainer}>
          <WtfuText />
        </div>
        <div className={styles.whereToFindUsImgContainer}>
          <WtfuImg />
        </div>
      </div>
    </section>
  )
}