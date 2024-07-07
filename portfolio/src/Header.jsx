import styles from "./Header.module.scss";
import {motion} from "framer-motion";
import { useState } from "react";
import { useEffect } from "react";

const Header = () => {
    const [helloVisible, setHelloVisible] = useState(true);

    const eVariants = {
        initial: {x: -15, y: 48},
        animate: {x: 0, y: 48, scale: 2},
        transition: {duration: 3, scale: {duration: .5, delay: 1}}
    } 

    const nameVariants = {
        initial: {opacity: 0},
        animate: {opacity: 1, transition: {delay: 2, duration: 1}}
    }

    useEffect(() => {
        setTimeout(() => {
            setHelloVisible(false);
        }, 1500)
    }, []);

    return <div className={styles.main}>
        {helloVisible && <motion.h1 className={`${styles.hello} ${styles.mover}`}>hEllo</motion.h1>}
        {!helloVisible && <motion.p initial={{x: -100, y: -150, opacity: 0}} animate={{x: -100, y: -150, opacity: 1}} transition={{delay: 2}}>hello, I'm</motion.p>}
        {!helloVisible && <motion.h1 
        variants={eVariants}
        initial="initial"
        animate="animate"
        transition={{x: {duration: .3}, scale: {duration: .5, delay: 1}}}
        className={`${styles.hello} ${styles.e}`}>
            <motion.span
            variants={nameVariants}
            >ne</motion.span>
            e
            <motion.span
            variants={nameVariants}
            >raj</motion.span>
            <motion.span
            variants={nameVariants}
            ><br/>dimili <span>software engineer</span></motion.span>
        </motion.h1>}
        {}
    </div>
}

export default Header;