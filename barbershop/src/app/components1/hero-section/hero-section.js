'use client';

import styles from './hero-section.module.css';
import { ParallaxBanner } from 'react-scroll-parallax';

export default function HeroSection() {

    const layerStyle = {
        position: "absolute",
        top: "0"
    }

    const backgroundImg = {
        speed: -80,
        style: layerStyle,
        scale: [0.6, 1.4],
        image: '/Barber-imgs/picture-1.jpg'
    }

    const whiteDiv = {
        speed: -1,
        style: layerStyle,
        children: <div className={styles.whiteDiv}></div>
    }

    const textDivContainer = {
        speed: -10,
        style: layerStyle,
        children: (
            <div className={styles.textDivContainer}>
                <div className={styles.textDiv}>
                    <div>
                        <h1 className={styles.textH1}>Hair Lounge</h1>
                        <h3 className={styles.textH3}>Unisex Salon</h3>
                        <p className={styles.textP}>London | Dagenham</p>
                    </div>
                    <div>
                        <button className={styles.textButton}>Book Now</button>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <section>
            <ParallaxBanner
                className={styles.parallaxBanner}
                layers={[ backgroundImg, whiteDiv, textDivContainer]}
            >
            </ParallaxBanner>
        </section>
    );
};