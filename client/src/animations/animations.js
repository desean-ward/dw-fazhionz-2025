"use client";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// Animate the heading
export const AnimateHeading = (wrapperRef, headingRef) => {
  // Initially set the heading's opacity to 0
  gsap.set(headingRef.current, {
    opacity: 0,
  });

  // Animate the heading
  gsap.to(headingRef.current, {
    opacity: 1,
    duration: 2,
    scrollTrigger: {
      trigger: wrapperRef.current,
      start: "top 70%",
      end: "top top",
    },
  });
};

// Animate the reveal panels
export const AnimateReveal = (wrapperRef, panelLeftRef, panelRightRef) => {
  let tl = gsap.timeline({
    scrollTrigger: {
      trigger: wrapperRef.current,
      start: "top 30%",
      end: "top top",
    },
  });

  tl.to(panelLeftRef.current, { x: "-100vh", duration: 1 })
    .to(panelRightRef.current, { x: "100vh", duration: 1 }, "<")
    .to("#reveal-panels", { display: "none" });
};

