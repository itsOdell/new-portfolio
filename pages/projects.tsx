import Head from "next/head";
import React from "react"
import styles from "../styles/Projects.module.css"
import Project from "../components/Project"
import Transition from "../common/Transition"
import axios from "axios";
import {projects} from "../assets/projects"


const Projects: React.FC = ({projectData}: any): React.ReactElement => {
    return (
        <Transition>
        <div className={styles.container}>
            <Head>
                <title>Abduladil Sunnat | Projects</title>
            </Head>
            <header className={styles.header}>
                <h1>Some of my projects</h1>
            </header>
            <div className={styles.projectContainer}>
                    {projectData.map((project: any) => {
                       return ( 
                        <Project {...project} key={project.title}/>
                       )
                    })}
                </div>
        </div>
        </Transition>
    )
}

export default Projects;

export async function getStaticProps() {
    // const res = await axios.get("/api/projects");
    const data = projects;
    return {
        props: {
            projectData: data
        },
        revalidate: 259200
    }
}