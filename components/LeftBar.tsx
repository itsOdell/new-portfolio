import Image from "next/image"
import Link from "next/link"
import styles from "../styles/Layout.module.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faGithubAlt} from "@fortawesome/free-brands-svg-icons/faGithubAlt"
import {faLinkedinIn} from "@fortawesome/free-brands-svg-icons/faLinkedinIn"

function LeftBar() {
    return (
        <section className={styles.LeftBar}>
            <Link href="/" passHref>
            <header className={styles.logoContainer}>
                <Image src="/logo.svg" height="40px" width="40px" alt="Sunnat Logo"/>
                <h1 className={styles.logoTitle}>Sunnat</h1>
            </header>
            </Link>

            <address className={styles.socials}>
                <a className={styles.social} href="http://github.com/itsOdell" target="_blank" rel="noreferrer">
                        <FontAwesomeIcon icon={faGithubAlt}/>
                </a>
                <a className={styles.social} href="https://www.linkedin.com/in/abduladil-sunnat-5262a81b1" target="_blank" rel="noreferrer">
                        <FontAwesomeIcon icon={faLinkedinIn}/>
                </a>
            </address>
        </section>
    )
}

export default LeftBar