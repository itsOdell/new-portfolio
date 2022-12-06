import RightBar from "./RightBar";
import LeftBar from "./LeftBar";
import Navbar from "./NavBar";
import styles from "../styles/Layout.module.css"
import Head from "next/head"

function Layout({children}: any) {
    return (
        <>
            <div className={styles.bg}>
                <Head>
                    <meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover" />
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