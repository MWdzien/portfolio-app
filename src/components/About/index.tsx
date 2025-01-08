import styles from "./styles.module.scss"
import React, {useRef} from "react";
import {motion, useInView} from "framer-motion"
import {slideUp, opacity} from "./anim"

const About: React.FC = () =>{
    const text = "blah blahblah zipzip zip zap zapzapzap meow moewwww moew moew? Meow moewww meoow yapyap yap yapyap yappp. blah blahblah zipzip zip zap zapzapzap meow moewwww moew moew. yap yapyap lahblah meow."
    const aboutRef = useRef(null);
    const isInView = useInView(aboutRef);

    return (
        <div ref={aboutRef} className={styles.container}>
            <div className={styles.body}>
                <h1>about me</h1>
                <p>
                    {
                        text.split(" ").map((word, index) => {
                            return <span key={index} className={styles.mask}><motion.span variants={slideUp} custom={index} animate={isInView ? "open" : "closed"} key={index}>{word}</motion.span></span>
                        })
                    }
                </p>
            </div>
        </div>
    )
}

export default About;