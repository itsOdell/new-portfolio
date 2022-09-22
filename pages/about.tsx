import Head from "next/head"
import styles from "../styles/About.module.css"
import Card from "../components/Card"
import {about} from "../assets/about"
import Transition from "../common/Transition"

export default function About() {
    return (
        <Transition>
        <div className={styles.container}>
            <Head>
                <title>Abduladil Sunnat | About</title>
            </Head>
            <header className={styles.header}><h1>A brief background</h1></header>
            <article className={styles.aboutCardContainer}>
                {about.map((aboutMeInfo) => {
                    return (
                        <Card key={aboutMeInfo.title} {...aboutMeInfo}/>
                    )
                })}
            </article>
        </div>
        </Transition>
    )
}