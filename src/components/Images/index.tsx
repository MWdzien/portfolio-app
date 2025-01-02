import styles from './styles.module.scss'
import React, {useLayoutEffect, useRef} from "react";
import Image from "next/image"
import gsap from "gsap"
import {ScrollTrigger} from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

import Image1 from "../../../public/images/main3.png"
import Image2 from "../../../public/images/second.png"
import Image3 from "../../../public/images/3.png"
import Image4 from "../../../public/images/4.png"
import Image5 from "../../../public/images/5.png"

const parallaxScrollVals = ["-100", "-150", "-200", "-250", "-300", "-25"]

const Images: React.FC = () => {
    const images = [Image1, Image2, Image3, Image4, Image5];
    const containerRef = useRef(null);
    const imagesRef = useRef<(HTMLDivElement | null)[]>([]);


    useLayoutEffect(() => {
        const context = gsap.context(()=> {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top bottom",
                    end: "10000 bottom",
                    scrub: true,
                    //markers: true
                }
            });

            imagesRef.current.forEach((image, i) => {
                tl.to(image, {
                    y: parallaxScrollVals[i],
                }, 0)
            })
        })
        return () => context.revert();
    }, []);

    return (
        <div ref={containerRef} className={styles.container}>
            {
                images.map((image, i) => {
                    return <div ref={el => {imagesRef.current[i] = el}} className={styles.imageContainer}>
                        <Image
                            src={image}
                            alt="work"
                        />
                    </div>
                })
            }
        </div>
    )
}


export default Images
