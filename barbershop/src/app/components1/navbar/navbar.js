import Link from "next/link";
import styles from './navbar.module.css';

const navLinks = [
    { id: "1", name: "About", path: "#about" },
    { id: "2", name: "Services", path: "#services" },
    { id: "3", name: "Contact", path: "/contact" },
    { id: "4", name: "Book", path: "/" }
];

export default function Navbar() {
    return ( 
        <header>
            <nav aria-label="primary">
                <ul className={styles.NavULFlexContainer}>
                    {navLinks.map(navLink => (
                        <li key={navLink.id} className={styles.NavLiFlexItems}>
                            <Link href={navLink.path}>
                                {navLink.name}
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
     );
}
