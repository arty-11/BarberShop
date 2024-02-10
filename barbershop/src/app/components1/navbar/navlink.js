import Link from "next/link";
import { usePathname } from "next/navigation";


export default function navlink({ navLinks, styles }) {
    const pathname = usePathname();

    return (
    <menu className={styles.NavUlFlexContainer}>
        {navLinks.map(navLink => {
            const NavLinkisActive = pathname.startsWith(navLink.path);
                return (
                    <li key={navLink.id} className={styles.NavLiFlexItems}>
                        <Link href={navLink.path} className={NavLinkisActive ? [styles.NavLinks, styles.NavLinkisActive].join(" ") : styles.NavLinks}>
                            {navLink.name}
                        </Link>
                    </li>
                )
            })
            }
    </menu>
    )    
}