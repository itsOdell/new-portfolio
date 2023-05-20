import RightBar from "./RightBar";
import LeftBar from "./LeftBar";
import Navbar from "./NavBar";
import styles from "../styles/Layout.module.css"
import Head from "next/head"
import meta from "../data/meta"
import links from "../data/link"

function Layout({children}: any) {
    return (
        <>
            <div className={styles.bg}>
                <Head>
                    <meta charSet="UTF-8" />
                    <meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover" />
                    {Object.keys(meta).map((name: string) => {
                        // @ts-ignore
                        return <meta key={name} name={name} content={meta[name]}/>
                    })}
                    {Object.keys(links).map((name: string) => {
                        // @ts-ignore
                        return <link key={name} rel={name} href={links[name]}/>
                    })}
                </Head>
                <div className={styles.wrapper}>
                    <LeftBar />
                    <main className={styles.main}>{children}</main>
                    <Navbar />
                    <RightBar />
                </div>
             </div>
        </>
    )
}

export default Layout