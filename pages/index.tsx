import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from "next/link"

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>{`Welcome, I${`'`}m Abduladil`}</title>
      </Head>
      <header className={`${styles.header} fadeInFromTop`}>
        <h3>Greetings, I{`'`}m</h3>
        <h1>Abduladil Sunnat</h1>
        <h2>And I am a <span>Full Stack</span><br /> developer</h2>
        <div className={styles.buttonContainer}>
          <Link href="http://localhost:3000/api/cv">
              <button className={styles.button}>Download CV</button>
          </Link>
              {/* <button className={styles.button}>Contact Me</button> */}
        </div>
      </header>
    </div>
  )
}
