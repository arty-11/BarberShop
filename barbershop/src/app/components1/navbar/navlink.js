'use client'

import Link from "next/link"
import { usePathname } from "next/navigation"
import { v4 as uuidv4 } from 'uuid'

export default function Navlink({ navLinks, styles }) {
    const pathname = usePathname();

    return (
    <menu className={styles.ulFlexContainer}>
        {navLinks.map(navLink => {
            const NavLinkisActive = pathname.startsWith(navLink.path);
            let id = uuidv4();
                return (
                    <li key={id} className={styles.liFlexItems}>
                        <Link href={navLink.path} className={NavLinkisActive ? [styles.links, styles.linkisActive].join(" ") : styles.links}>
                            {navLink.name}
                        </Link>
                    </li>
                )
            })
            }
    </menu>
    )    
}