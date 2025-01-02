import React, {useEffect, useState} from "react";
import styles from "./styles.module.scss"
import {motion} from "framer-motion"
import {slideUp, opacity} from "./anim"

const words = ["skibidi", "gyatt", "rizz", "ohio", "fanum tax", "goon", "edging", "sigma"]

const Preloader: React.FC = () => {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        if (index == words.length -1) return;
        setTimeout(() => {
            setIndex(index+1)
        }, index == 0 ? 1000 : 150);
    }, [index]);

    return (
        <motion.div variants={slideUp} initial="initial" exit="exit" className={styles.introduction}>
            <motion.p variants={opacity} initial="initial" animate="enter">{words[index]}</motion.p>
        </motion.div>
    )
}

export default Preloader;