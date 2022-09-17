import styles from "../styles/Layout.module.css";
import Link from "next/link";

function RightBar() {
    return (
        <section className={styles.RightBar}>
            <div>
                <Link href="/contact" passHref>
                    <button className={styles.contactBtn}>Contact Me</button>
                </Link>
            </div>
            <div>
                <h1>{"<"}<span>FullStack</span>{"/>"}</h1>
            </div>
        </section>
    )
}

export default RightBar