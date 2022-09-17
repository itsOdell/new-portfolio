import RightBar from "./RightBar";
import LeftBar from "./LeftBar";
import Navbar from "./NavBar";
import styles from "../styles/Layout.module.css"

function Layout({children}: any) {
    return (
        <>
            <div className={styles.bg}>
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