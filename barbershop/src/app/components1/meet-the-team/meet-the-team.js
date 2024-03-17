'use client'

//imports
import styles from "./meet-the-team.module.css"
import { useState } from "react"

//components
import Container from "./container"

export default function MeetTheTeam() {

  const barberNames = ["Arty", "Andy", "John"];

  const [img1Hover, setImg1Hover] = useState(false);
  const [img2Hover, setImg2Hover] = useState(false);
  const [img3Hover, setImg3Hover] = useState(false);

    return (
      <section aria-labelledby="meet-the-team" className={styles.sectionContainer}>
            <h2 id="meet-the-team" className={["headingStyle", styles.mainHeading].join(" ")}>The Hair Lounge Family</h2>
            <div className={styles.flexContainer}>
                  <Container styles={styles} setImgNumHover={setImg1Hover} imgNumHover={img1Hover} barberName={barberNames[0]} />
                  <Container styles={styles} setImgNumHover={setImg2Hover} imgNumHover={img2Hover} barberName={barberNames[1]} />
                  <Container styles={styles} setImgNumHover={setImg3Hover} imgNumHover={img3Hover} barberName={barberNames[2]} />
            </div>
      </section>
  )
}