'use client';
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";
import { useEffect } from "react";

import { FlipCardsSection3Container, ServicesHeader } from "./flip-cards.styles"

const FlipCardsSection3 = () => {
    useEffect((() => {
            gsap.registerPlugin(ScrollTrigger)

                        // Connect Lenis to ScrollTrigger
            const lenis = new Lenis();
            lenis.on("scroll", ScrollTrigger.update());

            // Ensure ScrollTrigger updates on every animation frame
            gsap.ticker.add((time) => {
                lenis.raf(time * 1000)
            })

            // Ennsures super smooth scrolling
            gsap.ticker.lagSmoothing(0);

            // Smoothes out the progress values we get from ScrollTrigger
            const smoothStep = (p) => p * p * (3 - 2 * p);

            ScrollTrigger.create({
                trigger: ".services",
                start: "top top",
                end: `+=${window.innerHeight * 4}px`,
                pin: ".services",
                pinSpacing: true,
            })

            ScrollTrigger.create({
                trigger: ".services",
                start: "top 100px",
                end: `+=${window.innerHeight * 4}px`,
                onLeave: (self) => {
                    const servicesSection = document.querySelector(".services");
                    const servicesRect = servicesSection.getBoundingClientRect();
                    const servicesTop = window.pageYOffset + servicesRect.top;

                    gsap.set('.cards', {
                        position: 'absolute',
                        top: servicesTop,
                        left: 0,
                        width: '100vw',
                        height: '100vh',
                    })
                }
            })

    }), [])


    return (
        <FlipCardsSection3Container>
            <ServicesHeader>
                <h1>Section 3 Content Updated</h1>
            </ServicesHeader>
            
        </FlipCardsSection3Container>
    )
}

export default FlipCardsSection3