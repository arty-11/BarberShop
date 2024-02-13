'use client'

//imports
import styles from "./meet-the-team.module.css"
import { useState } from "react"

//components
import MttImg from "./mttImg"
import MttName from "./mttName"
import MttSocialMedia from "./mttSocialMedia"

export default function MeetTheTeam() {

  const barberNames = ["GB", "Eazy", "Jan"];

  const [container1Hover, setContainer1Hover] = useState(false);
  const [container2Hover, setContainer2Hover] = useState(false);
  const [container3Hover, setContainer3Hover] = useState(false);

    return (
      <section aria-labelledby="meet-the-team" className={styles.sectionContainer}>
            <h2 id="meet-the-team" className={["headingStyle", styles.mainHeading].join(" ")}>The Hair Lounge Family</h2>
            <div className={styles.flexContainer}>
                <div className={styles.container}>
                  <div className={styles.imgContainer} onMouseOver={() => setContainer1Hover(true)} onMouseOut={() => setContainer1Hover(false)}>
                    <MttImg styles={styles} />
                    <MttName containerNameHover={container1Hover} styles={styles} barberName={barberNames[0]} />
                    <MttSocialMedia containerNameHover={container1Hover} styles={styles}   />
                    </div>
                </div>
                <div className={styles.container} onMouseOver={() => setContainer2Hover(true)} onMouseOut={() => setContainer2Hover(false)}
                  >
                  <div className={styles.imgContainer}>
                    <MttImg styles={styles} />
                    <MttName containerNameHover={container2Hover} styles={styles} barberName={barberNames[1]} />
                    <MttSocialMedia containerNameHover={container2Hover} styles={styles}  />
                  </div>
                </div>
                <div className={styles.container} onMouseOver={() => setContainer3Hover(true)} onMouseOut={() => setContainer3Hover(false)}
                  >
                  <div className={styles.imgContainer}>
                    <MttImg styles={styles} />
                    <MttName containerNameHover={container3Hover} styles={styles} barberName={barberNames[2]} />
                    <MttSocialMedia containerNameHover={container3Hover} styles={styles}   />
                  </div>
                </div>
            </div>
      </section>
  )
}