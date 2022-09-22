import NavLink from "./NavLink"
import styles from '../styles/Layout.module.css'
import {useRouter} from "next/router"
import {useEffect, useState} from "react"
import {paths} from "../assets/routes"

function Navbar() {
    const router = useRouter()
    const [routes, setRoutes] = useState(paths)

    useEffect(() => {
        function updateCurrent() {
            setRoutes(prevState => {
                return prevState.map((item) => {
                    return router.pathname === item.route ? {...item, color: "#49FC8E"} : {...item, color: "#33B063"};
                })
            })
        }
        updateCurrent()
    }, [router])

    return (
        <nav className={`${styles.NavBar} fadeInFromBottom`}>
            {routes.map((route) => {
                return (
                    <NavLink key={route.id} {...route}/>
                )
            })}
        </nav>
    )
}

export default Navbar