'use client'
import React, {useEffect, useLayoutEffect, useRef, useState} from "react";
import {usePathname} from "next/navigation";
import styles from "./styles.module.scss"
import gsap from "gsap"
import {ScrollTrigger} from "gsap/ScrollTrigger";


const Header: React.FC = () => {
    const header = useRef(null);
    const [isActive, setIsActive] = useState(false);
    const pathname = usePathname();
    const workButton = useRef(null);
    const aboutButton = useRef(null);

    useEffect(()=> {
        if (isActive) setIsActive(false);
    }, [pathname])

    useLayoutEffect(() => {
        gsap.registerPlugin(ScrollTrigger)

        gsap.to(workButton, {
            scrollTrigger: {
                trigger: document.documentElement,
                start: 0,
                end: window.innerHeight,
                onLeave: () => {gsap.to(workButton.current, {scale: 1, duration: 0.25, ease: "power1.out"})},
                onEnterBack: () => {gsap.to(workButton.current, {scale: 0, duration: 0.25, ease: "power1.out"})}
            }
        })

        gsap.to(aboutButton, {
            scrollTrigger: {
                trigger: document.documentElement,
                start: 0,
                end: window.innerHeight,
                onLeave: () => {gsap.to(aboutButton.current, {scale: 1, duration: 0.25, ease: "power1.out"})},
                onEnterBack: () => {gsap.to(aboutButton.current, {scale: 0, duration: 0.25, ease: "power1.out"})}
            }
        })


    }, []);

    return (

        <div className={styles.header}>
            <div className={styles.nav}>
                <div ref={workButton} className={styles.button}>
                    <a>work</a>
                    <div className={styles.indicator}></div>
                </div>
                <div ref={aboutButton} className={styles.button}>
                    <a>about</a>
                    <div className={styles.indicator}></div>
                </div>
                <div className={styles.el}>
                    <a>contact</a>
                    <div className={styles.indicator}></div>
                </div>
            </div>
        </div>
    )
}

export default Header;