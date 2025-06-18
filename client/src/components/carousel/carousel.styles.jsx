// import styled from "styled-components";
import tw from "tailwind-styled-components";
import { MdArrowLeft, MdArrowRight } from "react-icons/md";
import Image from "next/image";

export const CarouselWrapper = tw.section`
  w-screen
  max-w-screen
  overflow-x-hidden
  h-screen
  relative
  top-[-67.6vh]
  md:top-[-69.9vh]
  lg:top-[-51vh]
`;

export const CarouselContainer = tw.section`
  size-full
  relative 
  inset-0
  bg-transparent
`;

export const CarouselList = tw.div`
  w-full 
  h-full
  flex 
  gap-4
`;

export const CarouselItem = tw.span`
  absolute
  z-10
  w-[180px] 
  h-[250px] 
  top-[55%]
  lg:top-[65%]
  left-[70%] 
  translate-x-[-70%]
  transition-all 
  duration-700
  ease-in-out
  shadow-2xl 
  shadow-black 
  rounded-md
  bg-cover
  overflow-hidden
`;

export const SlideImage = tw(Image)`
  object-cover 
  size-full 
`;

export const SlideOverlay = tw.div`
  absolute
  bg-linear-to-r 
  from-black from-15%
  to-transparent
  inset-0
  opacity-50
`;

export const SlideContent = tw.div`
  content 
  h-full
  absolute 
  top-50
  md:top-60
  lg:top-0
  z-50
  flex 
  flex-col 
  gap-4 
  px-8 
  lg:justify-center 
  items-start
`;

export const ArrowButtonsContainer = tw.div`
  absolute
  bottom-12
  lg:bottom-32
  z-50

  flex
  justify-center
  items-center
  gap-4
  w-full
  h-16
`;

export const PrevBtn = tw(MdArrowLeft)`
  size-16
  text-5xl
  text-[maroon]
  rounded-full
  p-2
  cursor-pointer
  bg-white
  hover:bg-[maroon]
  hover:text-white
  active:bg-[maroon]/50
  transition-colors 
  duration-300
  ease-in-out
`;
export const NextBtn = tw(MdArrowRight)`
  size-16
  text-5xl
  text-[maroon]
  rounded-full
  p-2
  cursor-pointer
  bg-white
  hover:bg-[maroon]
  hover:text-white
  active:bg-[maroon]/50
  transition-colors 
  duration-300
  ease-in-out
`;
