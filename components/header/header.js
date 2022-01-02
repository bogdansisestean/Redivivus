import styles from "./header.module.css"
import Image from "next/image"
import Link from "next/link"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import logo from "../../public/images/logoRedivivus.png"

function Header() {
    return (
        <nav className={styles.position}>
            <input type="checkbox" id="check" />
            <label htmlFor="check" className="checkbtn">
                <FontAwesomeIcon icon={faBars} color="#d81e1e" />
            </label>
            <label className={"logo"}><Link href="/"><a><Image src={logo} className={styles.logoSpacing} alt={"logo redivivus"} height={57} width={85} /></a></Link></label>
            <ul>
                <li><Link className="active" href="#home">Home</Link></li>
                <li><Link href="#servicii">Servicii</Link></li>
                <li><Link href="#istoric">Istoric</Link></li>
                <li><Link href="#avantaje">Avantaje</Link></li>
                <li><Link href="#parteneri">Parteneri</Link></li>
                <li><Link href="#contact">Contact</Link></li>
            </ul>
        </nav>
    )
}

export default Header;