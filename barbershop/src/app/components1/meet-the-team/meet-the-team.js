'use client'

//imports
import styles from "./meet-the-team.module.css"
import { useState } from "react"

//components
import Img from "./img"
import BarberName from "./barberName"
import SocialMedia from "./socialMedia"

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
                    <Img styles={styles} />
                    <BarberName containerNameHover={container1Hover} styles={styles} barberName={barberNames[0]} />
                    <SocialMedia containerNameHover={container1Hover} styles={styles}   />
                    </div>
                </div>
                <div className={styles.container} onMouseOver={() => setContainer2Hover(true)} onMouseOut={() => setContainer2Hover(false)}
                  >
                  <div className={styles.imgContainer}>
                    <Img styles={styles} />
                    <BarberName containerNameHover={container2Hover} styles={styles} barberName={barberNames[1]} />
                    <SocialMedia containerNameHover={container2Hover} styles={styles}  />
                  </div>
                </div>
                <div className={styles.container} onMouseOver={() => setContainer3Hover(true)} onMouseOut={() => setContainer3Hover(false)}
                  >
                  <div className={styles.imgContainer}>
                    <Img styles={styles} />
                    <BarberName containerNameHover={container3Hover} styles={styles} barberName={barberNames[2]} />
                    <SocialMedia containerNameHover={container3Hover} styles={styles}   />
                  </div>
                </div>
            </div>
      </section>
  )
}