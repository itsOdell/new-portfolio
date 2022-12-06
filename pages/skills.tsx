import Head from "next/head";
import React, { useState } from "react";
import Skill from "../components/Skill"
import styles from "../styles/Skills.module.css"
import Transition from "../common/Transition"

export default function Skills({skills}: any) {
    let [activeTab, setActiveTab] = useState<string>("all");

    function changeTabColor() {
        let tabsLength = document.querySelectorAll("#tab").length
        for (let i = 0; i < tabsLength; i++) {
            document.querySelectorAll<HTMLDivElement>("#tab")[i].classList.remove(styles.activeTab)
        }
    }
    function changeTab(event: React.MouseEvent) {
        changeTabColor()
        let clickedElement = event.target as HTMLDivElement;
        clickedElement.classList.add(styles.activeTab)
        let tabName = clickedElement?.innerText?.toLowerCase();
        setActiveTab(tabName);
    }

    return (
        <Transition>
        <div className={styles.container}>
            <Head>
                <title>Abduladil Sunnat | Skills</title>
            </Head>
            <header className={styles.header}>
               <h1>My Skills</h1> 
            </header>
            <section className={styles.tabsContainer}>
                <div className={`${styles.tab} ${styles.activeTab}`} onClick={changeTab} id="tab">
                    All
                </div>
                <div className={styles.tab} onClick={changeTab} id="tab">
                    Frontend
                </div>
                <div className={styles.tab} onClick={changeTab} id="tab">
                    Backend
                </div>
            </section>
                <section className={styles.skillsContainer}>
                    {skills.map((skill: any, i:number) => {
                        if (skill?.tags.includes(activeTab)) {
                        return (
                            <Skill key={i} {...skill}/>
                        )
                        }
                    })}
                </section>
        </div>
        </Transition>
    )
}

export async function getStaticProps() {
    const data = await fetch("http://localhost:3000/api/skills");
    const skills = await data.json()
    return {
        props: {
            skills
        },
        revalidate: 259200
    }
}