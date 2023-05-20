import {motion} from "framer-motion";
import React from "react";

const animationConfiguration = {
    initial: {
        opacity: 0,
    },
    animate: {
        opacity: 1,
    },
    exit: {
        opacity: 0
    }
}

const Transition: React.FC<{children: any, router?:any, transition?: any}> = ({children, transition = 0.3}: any): React.ReactElement => {
    return (
        <motion.div variants={animationConfiguration} initial="initial" animate="animate" exit="exit" transition={{duration: transition}}>
            {children}
        </motion.div>
    )
}

export default Transition;