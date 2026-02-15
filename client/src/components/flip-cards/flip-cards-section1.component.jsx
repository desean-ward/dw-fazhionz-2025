'use client';
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";
import { useEffect } from "react";

import  { FlipCardsSection1Container, HeroCards, HeroCard, HeroCardTitle }  from "./flip-cards.styles"

const FlipCardsSection1 = () => {
    useGSAP(() => {
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
                trigger: ".hero",
                start: "top 10%",
                end: "bottom top",
                scrub: 1,
                onUpdate: (self) => {
                    const progress = self.progress;
                    const heroCardsContainerOpacity = gsap.utils.interpolate(1, 0.5, smoothStep(progress));

                    

                    // Loop through each card and update its transform based on the scroll progress
                    ["#hero-card-1", "#hero-card-2", "#hero-card-3"].forEach((cardId, index) => {
                        // alert("Progress ", progress)
                        const delay = index * 0.9;
                        const cardProgress = gsap.utils.clamp(0, 1, (progress - delay * 0.08) / 0.8 - delay * 0.08);

                        // Scroll cards downward and scale them down as the user scrolls
                        const y = gsap.utils.interpolate("0%", "250%", smoothStep(cardProgress));
                        const scale = gsap.utils.interpolate(1, 0.75, smoothStep(cardProgress));

                        // Horizontal movement with a slight rotation for a dynamic effect
                        let x = "0%";
                        let rotation = 0;

                        if (index === 0) {
                            x = gsap.utils.interpolate("0%", "90%", smoothStep(cardProgress));
                            rotation = gsap.utils.interpolate(0, -15, smoothStep(cardProgress));
                        } else if (index === 2) {
                            x = gsap.utils.interpolate("0%", "-90%", smoothStep(cardProgress));
                            rotation = gsap.utils.interpolate(0, 15, smoothStep(cardProgress));
                        }

                        gsap.set(cardId, {
                            y: y,
                            x: x,
                            scale: scale,
                            rotation: rotation,
                        })

                        // Set the opacity of the entire container to create a fading effect as the user scrolls
                        gsap.set('.hero-cards', {
                        opacity: heroCardsContainerOpacity,
                        })
                    })

                }
            })
    }, [])

    return (
            <FlipCardsSection1Container className="hero">
                <HeroCards className="hero-cards">
                    {/* Hero Card 1 */}
                    <HeroCard id='hero-card-1'>
                        <HeroCardTitle>
                            <span>Plan</span>
                            <span>01</span>
                        </HeroCardTitle>
                        <HeroCardTitle>
                            <span>01</span>
                            <span>Plan</span>
                        </HeroCardTitle>
                    </HeroCard>

                    {/*Hero Card 2 */}
                    <HeroCard id='hero-card-2'>
                        <HeroCardTitle>
                            <span>Plan</span>
                            <span>02</span>
                        </HeroCardTitle>
                        <HeroCardTitle>
                            <span>02</span>
                            <span>Plan</span>
                        </HeroCardTitle>
                    </HeroCard>

                    {/*Hero Card 3 */}
                    <HeroCard id='hero-card-3'>
                        <HeroCardTitle>
                            <span>Plan</span>
                            <span>03</span>
                        </HeroCardTitle>
                        <HeroCardTitle>
                            <span>03</span>
                            <span>Plan</span>
                        </HeroCardTitle>
                    </HeroCard>
                </HeroCards>
            </FlipCardsSection1Container>
    )
}

export default FlipCardsSection1