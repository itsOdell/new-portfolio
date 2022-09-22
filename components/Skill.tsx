import styles from "../styles/Skills.module.css";
import Image from "next/image";

export default function Skill({image, skill}: any) {
    return (
        <div className={styles.card}>
            <div className={styles.imageContainer}>
                <Image src={`/${image}`} layout="fill"/>
            </div>
            <div className={styles.skillTitleContainer}>
                <h1>{skill}</h1>
            </div>
        </div>
    )
}