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
            <div className={styles.logoContainer}>
                <Image src="/logo.svg" height="40px" width="40px" alt="Sunnat Logo"/>
                <h1 className={styles.logoTitle}>Sunnat</h1>
            </div>
            </Link>

            <div className={styles.socials}>
                <div className={styles.social}>
                    <a href="https://github.com/itsOdell" target="_blank" rel="noreferrer">
                        <FontAwesomeIcon icon={faGithubAlt}/>
                    </a>
                </div>
                <div className={styles.social}>
                    <a href="https://www.linkedin.com/in/abduladil-sunnat-5262a81b1/" target="_blank" rel="noreferrer">
                        <FontAwesomeIcon icon={faLinkedinIn}/>
                    </a>
                </div>
            </div>
        </section>
    )
}

export default LeftBar