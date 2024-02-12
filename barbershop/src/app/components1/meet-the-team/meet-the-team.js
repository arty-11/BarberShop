//imports
import styles from "./meet-the-team.module.css";

//components
import MttImg from "./mttImg.js";

export default function MeetTheTeam() {
    return (
      <section aria-labelledby="meet-the-team" className={styles.mttSectionContainer}>
            <h2 id="meet-the-team" className={["headingStyle", styles.mttMainHeading].join(" ")}>The Hair Lounge Family</h2>
            <div className={styles.mttFlexContainer}>
                <MttImg styles={styles} />
                <MttImg styles={styles} />
                <MttImg styles={styles} />
            </div>
      </section>
  )
}