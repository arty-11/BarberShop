'use client'

import { useEffect, useState } from 'react'
import styles from './hero-section.module.css'
import { ParallaxBanner } from 'react-scroll-parallax'

export default function HeroSection() {

    const [speedSlow, setSpeedSlow] = useState(false)

    useEffect(() => {       // Reduce speed of parallax text container on smaller screens to prevent button flowing over to about section
        if (screen.width <= 1024) {
            setSpeedSlow(true)
        }
    })

    const layerStyle = {
        position: "absolute",
        top: "0"
    }

    const heroImg = {
        speed: -80,
        style: layerStyle,
        scale: [0.6, 1.4],
        image: '/Barber-imgs/picture-1.jpg'
    }

    const whiteDiv = {
        speed: 0,
        style: layerStyle,
        children: <div className={styles.whiteDiv}></div>
    }

    const textDivContainer = {
        speed: speedSlow ? -2 : -11,
        style: layerStyle,
        children: (
            <div className={styles.mainTextContainer}>
                <div className={styles.textContainer}>
                    <div>
                        <h1 className={styles.heroHeading}>Hair Lounge</h1>
                        <h3 className={styles.heroSubHeading}>Unisex Salon</h3>
                        <p className={styles.textLocation}>London | Dagenham</p>
                    </div>
                    <div>
                        <button className={styles.button}>Book Now</button>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <section>
            <ParallaxBanner
                className={styles.parallaxBanner}
                layers={[ heroImg, whiteDiv, textDivContainer]}
            >
            </ParallaxBanner>
        </section>
    );
};