'use client';

//imports
import Link from "next/link";
import styles from './navbar.module.css';
import { useEffect, useState } from "react";

//navlinks
const navLinks = [
    { id: "1", name: "About", path: "#about" },
    { id: "2", name: "Services", path: "#services" },
    { id: "3", name: "Contact", path: "/contact" },
    { id: "4", name: "Book", path: "/" }
];


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
        <header className={changeHeadingColour ? [styles.NavHeaderColour, styles.NavHeader].join(" ") : [styles.NavHeaderTransparent, styles.NavHeader].join(" ")}>
            <nav aria-label="primary">
                <menu className={styles.NavUlFlexContainer}>
                    {navLinks.map(navLink => (
                        <li key={navLink.id} className={styles.NavLiFlexItems}>
                            <Link href={navLink.path}>
                                {navLink.name}
                            </Link>
                        </li>
                    ))}
                </menu>
            </nav>
        </header>
     );
}
