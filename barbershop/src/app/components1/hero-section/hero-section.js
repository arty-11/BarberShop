'use client';

import styles from './hero-section.module.css';
import { ParallaxBanner } from 'react-scroll-parallax';

export default function HeroSection() {
    return (
        <div>
            <ParallaxBanner
                className={styles.parallaxBanner}
                layers={[
                    { image: '/Barber-imgs/picture-1.jpg', speed: -80, scale: [0.6, 1.4]},
                    {
                        speed: -20,
                        children: (
                            <section className={styles.textDiv} aria-labelledby='hair-lounge-hero-section'>
                                <h1 className={styles.textH1} id='hair-lounge-hero-section'>Hair Lounge</h1>
                                <h3 className={styles.textH3}>Unisex Salon</h3>
                                <p className={styles.textP}>London | Dagenham</p>
                                <button className={styles.textButton}>Book Now</button>
                            </section>
                        ),
                    },
                ]}
            >
            </ParallaxBanner>
        </div>
    );
};