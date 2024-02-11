import Link from "next/link";
import { usePathname } from "next/navigation";


export default function navlink({ navLinks, styles }) {
    const pathname = usePathname();

    return (
    <menu className={styles.navUlFlexContainer}>
        {navLinks.map(navLink => {
            const NavLinkisActive = pathname.startsWith(navLink.path);
                return (
                    <li key={navLink.id} className={styles.navLiFlexItems}>
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