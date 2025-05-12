"use client";
import React from "react";
import {
  BannerWrapper,
  BannerContainer,
  LeftPanel,
  RightPanel,
  LeftContent,
  RightContent,
} from "./banner.styles";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const Banner = () => {
  useGSAP(() => {
    gsap.set("#left-panel", {
      scaleX: 0,
      transformOrigin: "center center",
    });

    gsap.set("#right-panel", {
      scaleX: 0,
      transformOrigin: "center center",
    });

    gsap.fromTo(
      "#left-panel",
      { scaleX: 0 },
      {
        scaleX: 1,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: "#left-panel",
          start: "top 50%",
          toggleActions: "play reverse play reverse",
          invalidateOnRefresh: true,
        },
      }
    );

    gsap.fromTo(
      "#right-panel",
      { scaleX: 0 },
      {
        scaleX: 1,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: "#right-panel",
          start: "top 50%",
          toggleActions: "play reverse play reverse",
          invalidateOnRefresh: true,
        },
      }
    );

    gsap.from("#left-panel-content", {
      y: 100,
      opacity: 0,
      duration: 1,
      delay: 1,
      ease: "power2.out",
      scrollTrigger: {
        trigger: "#left-panel-content",
        start: "top 85%",
        toggleActions: "play reverse play reverse",
        invalidateOnRefresh: true,
      },
    });

    gsap.from("#right-panel-content", {
      y: 100,
      opacity: 0,
      duration: 1,
      delay: 3,
      ease: "power2.out",
      scrollTrigger: {
        trigger: "#right-panel-content",
        start: "top 85%",
        toggleActions: "play reverse play reverse",
        invalidateOnRefresh: true,
      },
    });
  }, []);
  return (
    <BannerWrapper>
      <BannerContainer>
        {/* Left Panel */}
        <LeftPanel id='left-panel'>
          <div id='left-panel-content' className='text-center'>
            <LeftContent className='line-height-2'>
              <h2 className='text-5xl border-t-1 pt-2'>STYLEZ</h2>
              <p>FOR</p>
              <h2 className='text-5xl border-b-1 pb-4'>HER</h2>
            </LeftContent>
          </div>
        </LeftPanel>

        {/* Right Panel */}
        <RightPanel id='right-panel'>
          <div id='right-panel-content' className='text-center'>
            <RightContent className='line-height-2'>
              <h2 className='text-5xl border-t-1 pt-2'>STYLEZ</h2>
              <p>FOR</p>
              <h2 className='text-5xl border-b-1 pb-4'>HIM</h2>
            </RightContent>
          </div>
        </RightPanel>
      </BannerContainer>
    </BannerWrapper>
  );
};

export default Banner;
