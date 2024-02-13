'use client'

import styles from './hero-section.module.css'
import { ParallaxBanner } from 'react-scroll-parallax'

export default function HeroSection() {

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
        speed: -1,
        style: layerStyle,
        children: <div className={styles.hsWhiteDiv}></div>
    }

    const textDivContainer = {
        speed: -10,
        style: layerStyle,
        children: (
            <div className={styles.hsMainTextContainer}>
                <div className={styles.hsTextContainer}>
                    <div>
                        <h1 className={styles.hsHeroHeading}>Hair Lounge</h1>
                        <h3 className={styles.hsHeroSubHeading}>Unisex Salon</h3>
                        <p className={styles.hsTextLocation}>London | Dagenham</p>
                    </div>
                    <div>
                        <button className={styles.hsButton}>Book Now</button>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <section>
            <ParallaxBanner
                className={styles.hsParallaxBanner}
                layers={[ heroImg, whiteDiv, textDivContainer]}
            >
            </ParallaxBanner>
        </section>
    );
};