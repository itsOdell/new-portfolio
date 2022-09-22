import Head from 'next/head'
import styles from '../styles/Home.module.css'

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
      </header>
    </div>
  )
}
