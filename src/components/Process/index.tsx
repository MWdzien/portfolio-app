'use client'
import React, {useLayoutEffect, useRef} from "react";
import styles from './styles.module.scss'
import gsap from 'gsap'
import {motion, useSpring} from 'framer-motion'
import Image from "next/image"

import Image1 from '../../../public/images/image3_bw.png'
import Image2 from '../../../public/images/image3_col.png'
import {ScrollTrigger} from "gsap/ScrollTrigger";
import {useScroll, useTransform} from "framer-motion";
import {linearGradient} from "framer-motion/m";
gsap.registerPlugin(ScrollTrigger);


const Process: React.FC = () => {
    const container = useRef(null);
    const beforeRef = useRef(null);
    const afterRef = useRef(null);
    const bodyRef = useRef(null);




    useLayoutEffect(() => {
        const context = gsap.context(() => {
            gsap.to(afterRef.current, {
                clipPath: 'inset(0% 0% 0% 0%)',
                scrollTrigger: {
                    start: '74% top',
                    end: 'bottom bottom',
                    scrub: 2,
                    markers: true
                }
            })
        })

        return () => context.revert();

    }, []);

    return (
        <div className={styles.container}>
            <div ref={bodyRef} className={styles.body}>
                <div ref={beforeRef} className={styles.before}>
                    <Image
                        src={Image1}
                        alt="process"
                        fill
                    />
                </div>

                <div ref={afterRef} className={styles.after}>
                    <Image
                        src={Image2}
                        alt="process"
                        fill
                    />
                </div>


            </div>

        </div>
    )
}

export default Process;