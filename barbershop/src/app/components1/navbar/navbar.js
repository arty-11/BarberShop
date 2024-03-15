'use client'

//imports
import styles from "./navbar.module.css"
import { useEffect, useRef, useState } from "react"

//components
import Navlink from "./navlink"

export default function Navbar() {

    const [hamburgerIsActive, setHamburgerIsActive] = useState(null)
    const [changeHeadingColour, setChangeHeadingColour] = useState(false)
    const hamburger = useRef()

    const navLinks = [
        { name: "About", path: "/#about" },
        { name: "Services", path: "/#services" },
        { name: "Contact", path: "/contact" },
        { name: "Book", path: "/book" }
    ];

    const handleScroll = () => {      // If scroll position Y is greater than 196, change heading colour
        let scrollY = window.scrollY;
        if (scrollY <= 196) {
            setChangeHeadingColour(false)
        } else {
            setChangeHeadingColour(true)
        }
    }

    const handleClick = () => {       // Open and close hamburger
        setHamburgerIsActive(!hamburgerIsActive)
    }
    
    const handleResize = () => {       // So that the hamburger wouldn't be open when you resize the screen width to be less than 640
        if (screen.width >= 640) {
            setHamburgerIsActive(false)
        } 
    }

    const handleOutsideClick = e => {       // If the clicked element is not the hamburger icon close the hamburger
        if (!hamburger.current?.contains(e.target)) {
            setHamburgerIsActive(false)
        }  
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    })

    useEffect(() => {
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize)
    })

    useEffect(() => {
        document.documentElement.addEventListener("click", handleOutsideClick)
        return () => document.documentElement.removeEventListener("click", handleOutsideClick)
    })

    return (
        <header className={changeHeadingColour ? [styles.headerColour, styles.header].join(" ") : [styles.headerTransparent, styles.header].join(" ")}>
            <nav aria-label="primary">
                    <Navlink navLinks={navLinks} styles={styles} hamburgerIsActive={hamburgerIsActive} />
            </nav>
            <div className={hamburgerIsActive ? [styles.hamburger, styles.hamburgerActive].join(" ") : styles.hamburger} onClick={handleClick} ref={hamburger}>
                <span className={styles.bar}></span>
                <span className={styles.bar}></span>
                <span className={styles.bar}></span>
            </div>
        </header>
     );
}