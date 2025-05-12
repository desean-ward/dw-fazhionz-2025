import tw from "tailwind-styled-components";
import { css } from "styled-components";
import { motion } from "framer-motion";

export const BannerWrapper = tw.section`
    h-screen 
    w-screen 
    relative 
    z-50
`;

export const BannerContainer = tw.div`
    h-[200px] 
    md:h-[325px] 
    lg:h-[450px]
    w-full
    text-white 
    text-sm 
    md:text-xl
    font-black
    flex
    justify-between
    overflow-hidden
    will-change-transform
`;

export const LeftPanel = tw.div`
    left-0
    w-[50%]
    bg-[maroon]
    flex 
    flex-col 
    justify-center 
    items-start
    banner-left-clip-path
    origin-center
`;

export const LeftContent = tw.div`
    w-[125px] 
    md:w-[225px] 
    lg:w-[300px] 
	h-[125px] 
    md:h-[225px] 
    lg:h-[300px]
    flex 
    flex-col 
    justify-center 
    shadow-black 
    shadow-2xl
    rounded-full
    md:px-1		
    ml-[30%]  
    xl:ml-[60%]
    bg-linear-to-r from-black from-10% to-gray-400
`;

export const RightPanel = tw.div`
    right-0
    w-[50%]
    bg-[black]
    flex 
    flex-col 
    justify-center 
    items-center
    pr-4 
    md:pr-8
    banner-right-clip-path
    origin-center
`;

export const RightContent = tw.div`
    w-[125px] 
    md:w-[225px] 
    lg:w-[300px] 
	h-[125px] 
    md:h-[225px] 
    lg:h-[300px]
	flex 
    flex-col 
    justify-center 		
    shadow-white/50 
    shadow-2xl
	rounded-full
	px-2 
    md:px-1		
    ml-[30%]  
    xl:ml-[60%]
    bg-linear-to-r from-[maroon] from-10% to-gray-400
`;

export const SlideIn = css`
  .hidden {
    opacity: 0;
    filter: blur(5px);
    left: 100%;
    transition: all 3s;
  }

  .show {
    opacity: 1;
    filter: blur(0);
    left: 0;
    transition: all 3s;
  }
`;
