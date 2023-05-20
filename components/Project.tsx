import Image from "next/image";
import styles from "../styles/Projects.module.css"

const Project: React.FC<{image: string, title: string, source: string}> = 
({image, title, source}): React.ReactElement => {
  return (
    <article className={styles.project}>
        <div className={styles.imageContainer}>
            <Image src={image} width="350px" height="150px"/>
        </div>
        <div className={styles.summary}>
            <h1>{title}</h1>
        </div>
        <div className={styles.buttonContainer}>
            <a href={source} target="_blank" rel="noreferrer">
                <button className={styles.button}>Visit</button>
            </a>
        </div>
    </article>
  )
}

export default Project