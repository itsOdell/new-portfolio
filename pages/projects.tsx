import Head from "next/head";
import React from "react"
import styles from "../styles/Projects.module.css"
import Transition from "../common/Transition"

const Projects: React.FC<{}> = (): React.ReactElement => {
    return (
        <Transition>
        <div className={styles.container}>
            <Head>
                <title>Abduladil Sunnat | Projects</title>
            </Head>
            <header className={styles.header}>
                <h1>Some of my projects</h1>
            </header>
        </div>
        </Transition>
    )
}

export default Projects;