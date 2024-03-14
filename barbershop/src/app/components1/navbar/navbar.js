'use client'

//imports
import styles from "./navbar.module.css"
import { useEffect, useState } from "react"

//components
import Navlink from "./navlink"

//component
export default function Navbar() {

    const [active, setActive] = useState(false)

//navlinks
    const navLinks = [
        { name: "About", path: "/#about" },
        { name: "Services", path: "/#services" },
        { name: "Contact", path: "/contact" },
        { name: "Book", path: "/book" }
    ];

    const [changeHeadingColour, setChangeHeadingColour] = useState(false);

    const toggleScroll = () => {
        let scrollY = window.scrollY;
        if (scrollY <= 196) {
            setChangeHeadingColour(false);
        } else {
            setChangeHeadingColour(true);
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', toggleScroll);
        return () => window.removeEventListener('scroll', toggleScroll);
    })

    const mobileMenu = () => {
        setActive(!active)
        console.log("hehy")
    }

    return (
        <header className={changeHeadingColour ? [styles.headerColour, styles.header].join(" ") : [styles.headerTransparent, styles.header].join(" ")}>
            <nav aria-label="primary">
                    <Navlink navLinks={navLinks} styles={styles} mobileMenu={mobileMenu} active={active}  />
            </nav>
            <div className={active ? [styles.hamburger, styles.hamburgerActive].join(" ") : styles.hamburger} onClick={mobileMenu}>
                <span className={styles.bar}></span>
                <span className={styles.bar}></span>
                <span className={styles.bar}></span>
            </div>
        </header>
     );
}