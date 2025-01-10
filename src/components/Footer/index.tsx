import styles from "./styles.module.scss"
import React, {useRef} from "react";
import {motion, useScroll, useTransform} from "framer-motion"

const Footer: React.FC = () => {
    const containerRef = useRef(null);
    const {scrollYProgress} = useScroll({
        target: containerRef,
        offset: ["start end", "end end"]
    });

    const y = useTransform(scrollYProgress, [0, 1], [-500, 0]);


    return (
        <motion.div style={{y}} ref={containerRef} className={styles.container}>
            <div className={styles.body}>
                <div className={styles.title}>
                    <h2>Contact me</h2>
                </div>
                <div className={styles.info}>
                    <p>bara.dmowska@gmail.com</p>
                    <p>+48 000 000 000</p>

                </div>
                <div className={styles.additional}>
                    <div>
                        <span>
                            <h3>version</h3>
                            <p>2024 bdmowska®</p>
                        </span>
                    </div>
                    <div>
                        <span>
                        <h3>socials</h3>
                        <p>instagram</p>
                    </span>
                        <p>facebook</p>
                        <p>pinterest</p>
                    </div>
                </div>
            </div>
        </motion.div>
    )
}

export default Footer;
