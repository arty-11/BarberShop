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
                        speed: -15,
                        children: (
                            <div>
                                <h1>Hair Lounge</h1>
                                <h3>Unisex Salon</h3>
                                <p>London | Dagenham</p>
                            </div>
                        ),
                    },
                ]}
            >
                <div>
                    <h1>Hair Lounge</h1>
                    <h3>Unisex Salon</h3>
                    <h1>London | Dagenham</h1>
                </div>
            </ParallaxBanner>
        </div>
    );
};