'use client'
import styles from "./page.module.scss";
import React, {useEffect, useState} from "react";
import HomePage from "../components/HomePage"
import Process from "../components/Process"
import Preloader from "../components/Preloader"
import Header from "../components/Header"
import Images from "../components/Images"
import About from "../components/About"
import {AnimatePresence} from "framer-motion";
import Lenis from "@studio-freight/lenis";
import WorksNavigation from "@/components/WorksNavigation";
import Footer from "@/components/Footer";

export default function Home() {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const lenis = new Lenis()

        function raf(time: number) {
            lenis.raf(time)
            requestAnimationFrame(raf)
        }

        requestAnimationFrame(raf);

        (async () => {
            /*const LocomotiveScroll = (await import('locomotive-scroll')).default;
            const locomotiveScroll = new LocomotiveScroll();*/

            setTimeout(() => {
                setIsLoading(false);
                document.body.style.cursor = 'default';
                window.scrollTo(0, 0);
            }, 2000)
        })()
    }, [])

    return (
        <main className={styles.main}>
            <AnimatePresence mode="wait">
                {isLoading && <Preloader />}
            </AnimatePresence>
            <Header />
            <HomePage />
            <Images />
            <Process />
            <About />
            <Footer />
        </main>
    );
}