import styles from "../styles/About.module.css"
import {useState, useEffect} from "react"
import Transition from "../common/Transition";
import { setTimeout } from "timers"

export default function Card({title, amount, content, subject}: any) {
    let [amountBegin, setAmountBegin] = useState(0)

    
    useEffect(() => {
        const increaseAmount = (): void => {
            if (amountBegin <= amount) {
                setAmountBegin(amountBegin++)
            } else {
                return
            }
            setTimeout(increaseAmount, 150)
        }
        setTimeout(increaseAmount, 1050)
        setTimeout((increaseAmount), 1050)
    }, [])


    return (
        <Transition transition={0.15}>
        <div className={styles.card}>
            <h2 className={styles.cardTitle}>{title}</h2>
            <h1 className={styles.cardContent}>{amount == undefined ? "" : amountBegin}{content}</h1>
            <p className={styles.cardSubject}>{subject}</p>
        </div>
        </Transition>
    )
}
