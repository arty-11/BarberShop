'use client';

//imports
import styles from "./navbar.module.css";
import { useEffect, useState } from "react";

//components
import Navlink from "./navlink.js";

//navlinks
const navLinks = [
    { name: "About", path: "/#about" },
    { name: "Services", path: "/#services" },
    { name: "Contact", path: "/contact" },
    { name: "Book", path: "/book" }
];

//component
export default function Navbar() {
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

    return (
        <header className={changeHeadingColour ? [styles.navHeaderColour, styles.navHeader].join(" ") : [styles.navHeaderTransparent, styles.navHeader].join(" ")}>
            <nav aria-label="primary">
                    <Navlink navLinks={navLinks} styles={styles}  />
            </nav>
        </header>
     );
}