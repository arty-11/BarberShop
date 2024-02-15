'use client'

//imports
import styles from "./meet-the-team.module.css"
import { useState } from "react"

//components
import Container from "./container"

export default function MeetTheTeam() {

  const barberNames = ["GB", "Eazy", "Jan"];

  const [container1Hover, setContainer1Hover] = useState(false);
  const [container2Hover, setContainer2Hover] = useState(false);
  const [container3Hover, setContainer3Hover] = useState(false);

    return (
      <section aria-labelledby="meet-the-team" className={styles.sectionContainer}>
            <h2 id="meet-the-team" className={["headingStyle", styles.mainHeading].join(" ")}>The Hair Lounge Family</h2>
            <div className={styles.flexContainer}>
                  <Container styles={styles} setContainerNameHover={setContainer1Hover} containerNameHover={container1Hover} barberName={barberNames[0]} />
                  <Container styles={styles} setContainerNameHover={setContainer2Hover} containerNameHover={container2Hover} barberName={barberNames[1]} />
                  <Container styles={styles} setContainerNameHover={setContainer3Hover} containerNameHover={container3Hover} barberName={barberNames[2]} />
            </div>
      </section>
  )
}