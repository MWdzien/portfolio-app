'use client'
import {useLayoutEffect, useRef} from "react";
import styles from './styles.module.scss'
import gsap from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";
import mainImage from "../../../public/images/main.jpg"
import Image from "next/image"

gsap.registerPlugin(ScrollTrigger);

const firstName = "barbara";
const lastName = "dmowska";

const HomePage: React.FC = () => {
    const containerRef = useRef(null);
    const firstNameRef = useRef(null);
    const lastNameRef = useRef(null);
    const imageRef = useRef(null);


    useLayoutEffect(() => {
        const context = gsap.context(() => {

            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: imageRef.current,
                    start: "0.1% top",
                    end: "bottom bottom",
                    onEnter: () =>{
                        gsap.set(imageRef.current, {position: 'relative', top: '195%'})
                    },
                    onLeaveBack: () =>{
                        gsap.set(imageRef.current, {position: 'fixed', top: '0'})
                    },
                    //markers: true
                }
            })


            tl.to(firstNameRef.current, {
                x: () => -innerWidth * 3,
                scale: 10,
                ease: "power2.inOut",
                scrollTrigger: {
                    start: "top top",
                    end: `+=200%`,
                    scrub: 1,
                    //markers: true
                }
            }, 0);

            tl.to(lastNameRef.current, {
                x: () => innerWidth * 3,
                scale: 10,
                ease: "power2.inOut",
                scrollTrigger: {
                    start: "top top",
                    end: `+=200%`,
                    scrub: 1,
                    //markers: true
                }
            }, 0)

            tl.to(imageRef.current, {
                rotation: 0,
                clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
                ease: "power1.inOut",
                scrollTrigger: {
                    start: "top top",
                    end: "+=100%",
                    scrub: 1
                }
            }, 0)

        })

        return () => context.revert();
    }, [])

    return (
        <div ref={containerRef} className={styles.container}>
            <div className={styles.body}>
                <div className={styles.names}>
                    <div ref={firstNameRef} className={styles.name}>
                        {
                            firstName.split("").map((letter, index) => {
                                return <span key={index}>{letter}</span>
                            })
                        }
                    </div>
                    <div ref={lastNameRef} className={styles.name}>
                        {
                            lastName.split("").map((letter, index) => {
                                return <span key={index}>{letter}</span>
                            })
                        }
                    </div>

                </div>
                <div className={styles.content}>
                    <div ref={imageRef} className={styles.mainImage}>
                        <Image
                            src={mainImage}
                            alt="main"
                            fill
                        />
                    </div>

                </div>
            </div>

        </div>
    )
}

export default HomePage;