//imports
import styles from "./meet-the-team.module.css";
import Image from "next/image";
import { useRef, useState } from "react";

//components
import MttFbIcon from "./mttFbIcon";
import MttIgIcon from "./mttIgIcon";
import MttTwitterIcon from "./mttTwitterIcon";

export default function MeetTheTeam() {

  const [container1Hover, setContainer1Hover] = useState(false);
  const [container2Hover, setContainer2Hover] = useState(false);
  const [container3Hover, setContainer3Hover] = useState(false);

  const img1 = useRef();
  const img2 = useRef();
  const img3 = useRef();

    return (
      <section aria-labelledby="meet-the-team" className={styles.mttSectionContainer}>
            <h2 id="meet-the-team" className={["headingStyle", styles.mttMainHeading].join(" ")}>The Hair Lounge Family</h2>
            <div className={styles.mttFlexContainer}>
                <div className={styles.mttContainer}>
                  <div className={styles.mttImgContainer} onMouseOver={() => setContainer1Hover(true)} onMouseOut={() => setContainer1Hover(false)}>
                      <Image
                        src='/Barber-imgs/picture-2.jpg'
                        fill={true}
                        quality={100}
                        sizes='(max-width:800px) 30vw, 40vw'
                        alt="Hair Lounge barber"
                        className={styles.mttImg}
                      />
                      <div className={ container1Hover ? [styles.mttSocialMediaFlexContainer, styles.mttFullWidth ].join(" ") : styles.mttSocialMediaFlexContainer} ref={img1}>
                      <MttFbIcon iconColour="white" />
                      <MttIgIcon iconColour="white" />
                      <MttTwitterIcon iconColour="white" />
                      </div>
                    </div>
                </div>
                <div className={styles.mttContainer} onMouseOver={() => setContainer2Hover(true)} onMouseOut={() => setContainer2Hover(false)}>
                  <div className={styles.mttImgContainer}>
                    <Image
                        src='/Barber-imgs/picture-2.jpg'
                        fill={true}
                        quality={100}
                        sizes='(max-width:800px) 30vw, 40vw' 
                        alt="Hair Lounge barber"
                        className={styles.mttImg}
                      />
                      <div className={ container2Hover ? [styles.mttSocialMediaFlexContainer, styles.mttFullWidth ].join(" ") : styles.mttSocialMediaFlexContainer} ref={img2}>
                      <MttFbIcon iconColour="white" />
                      <MttIgIcon iconColour="white" />
                      <MttTwitterIcon iconColour="white" />
                      </div>
                  </div>
                </div>
                <div className={styles.mttContainer} onMouseOver={() => setContainer3Hover(true)} onMouseOut={() => setContainer3Hover(false)}>
                  <div className={styles.mttImgContainer}>
                    <Image
                        src='/Barber-imgs/picture-2.jpg'
                        fill={true}
                        quality={100}
                        sizes='(max-width:800px) 30vw, 40vw'
                        alt="Hair Lounge barber"
                        className={styles.mttImg}
                      />
                      <div className={ container3Hover ? [styles.mttSocialMediaFlexContainer, styles.mttFullWidth ].join(" ") : styles.mttSocialMediaFlexContainer} ref={img3}>
                      <MttFbIcon iconColour="white" />
                      <MttIgIcon iconColour="white" />
                      <MttTwitterIcon iconColour="white" />
                      </div>
                  </div>
                </div>
            </div>
      </section>
  )
}