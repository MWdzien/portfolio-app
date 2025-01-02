'use client'
import {useLayoutEffect, useRef} from "react";
import styles from './styles.module.scss'
import gsap from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";
import Button from "../../common/Button"

gsap.registerPlugin(ScrollTrigger);
import Process from '../Process'
import Images from '../Images'


const HomePage: React.FC = () => {
    const containerRef = useRef(null);
    const nameRef = useRef(null);
    const lastNameRef = useRef(null);
    const lettersRef = useRef<(HTMLSpanElement | null)[]>([]);


    useLayoutEffect(() => {
        const context = gsap.context(() => {
            const timeline = gsap.timeline({
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top top",
                    end: "bottom top",
                    scrub: true,
                }
            });
            timeline.to(nameRef.current, {y: "-100px"}, 0);
            timeline.to(lastNameRef.current, {y: "-50px"}, 0);

            const vals = ["-25px", "-40px", "-20px", "-50px", "-15px", "-35px", "-10px", "-20px", "-40px"];

            lettersRef.current.forEach((letter, i) => {
                gsap.set(letter, {position: "relative"})
                timeline.to(letter, {top: vals[i]}, 0);
            })
        })

        return () => context.revert();
    }, [])

    return (
        <div ref={containerRef} className={styles.container}>
            <div className={styles.names}>
                <h1 ref={nameRef}>barbara</h1>
                <h1 ref={lastNameRef}>dmowska</h1>
            </div>
            <div className={styles.buttons}>
                <button>{
                    "work".split("").map((letter, i) => <span
                        key={`l_${i}`}
                        ref={el => {lettersRef.current[i] = el}}>
                        {letter}
                    </span>)
                }</button>
                <button>{
                    "about".split("").map((letter, i) => <span
                        key={`l_${i}`}
                        ref={el => {lettersRef.current[i+"work".length] = el}}>
                        {letter}
                    </span>)
                }</button>
            </div>
        </div>
    )
}

export default HomePage;