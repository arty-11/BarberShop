'use client'

import Link from "next/link"
import { usePathname } from "next/navigation"
import { v4 as uuidv4 } from 'uuid'


export default function Navlink({ navLinks, styles }) {
    const pathname = usePathname();

    return (
    <menu className={styles.navUlFlexContainer}>
        {navLinks.map(navLink => {
            const NavLinkisActive = pathname.startsWith(navLink.path);
            let id = uuidv4();
                return (
                    <li key={id} className={styles.navLiFlexItems}>
                        <Link href={navLink.path} className={NavLinkisActive ? [styles.navLinks, styles.navLinkisActive].join(" ") : styles.navLinks}>
                            {navLink.name}
                        </Link>
                    </li>
                )
            })
            }
    </menu>
    )    
}