'use client';

import styles from './hero-section.module.css';
import { ParallaxBanner } from 'react-scroll-parallax';

const layerStyle = {
    position: "absolute",
    top: "0"
}

export default function HeroSection() {
    return (
        <section>
            <ParallaxBanner
                className={styles.parallaxBanner}
                layers={[
                    { image: '/Barber-imgs/picture-1.jpg', speed: -80, scale: [0.6, 1.4], style: layerStyle },
                    {
                        speed: -20,
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
                        ),
                    },
                    // { speed: 1, children: <div className={styles.whiteDiv}></div> }
                ]}
            >
            </ParallaxBanner>
        </section>
    );
};

// { speed: -10, children: <div style={{backgroundColor: "white", height: "20vh", width: "100vw", position: "relative", top: "100vh", transform: "rotate(3deg)" , overflowX: "hidden"}}></div>}