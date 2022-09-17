import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import Link from "next/link"
import styles from "../styles/Layout.module.css"

function NavLink({icon, color, route}: any) {
    return (
        <div style={{color: color}} className={styles.NavLink}>
            <Link href={route} passHref>
                <FontAwesomeIcon icon={icon}/>
            </Link>
        </div>
    )
}

export default NavLink