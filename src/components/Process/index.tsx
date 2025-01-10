'use client'
import React, {useLayoutEffect, useRef} from "react";
import styles from './styles.module.scss'
import gsap from 'gsap'
import Image from "next/image"

import Image1 from '../../../public/images/image3_bw.png'
import Image2 from '../../../public/images/image3_col.png'
import {ScrollTrigger} from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);


const Process: React.FC = () => {
    const beforeRef = useRef(null);
    const afterRef = useRef(null);
    const bodyRef = useRef(null);




    useLayoutEffect(() => {
        const context = gsap.context(() => {
            gsap.to(afterRef.current, {
                clipPath: 'inset(0% 0% 0% 0%)',
                scrollTrigger: {
                    trigger: beforeRef.current,
                    start: 'top top',
                    end: 'bottom +=35%',
                    scrub: 1,
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