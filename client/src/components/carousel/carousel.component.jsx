"use client";
import { useState, useEffect, useRef } from "react";

import {
  CarouselContainer,
  CarouselList,
  CarouselItem,
  SlideImage,
  CarouselWrapper,
  SlideContent,
  ArrowButtonsContainer,
  PrevBtn,
  NextBtn,
  SlideOverlay,
} from "./carousel.styles";
import CustomButton from "@/ui/custom-button/custom-button.ui";

import { carouselImgs } from "../../../data/index.js";
import { carouselData } from "../../../data/index.js";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState("");
  let timeAutoNext = 0;
  const carousel = document.querySelector("#carousel");
  const list = document.querySelector("#list");
  const sliderItemsDom = document.querySelectorAll(".carousel .list .item");

  // Variables to watch when carousel is in view
  const [isInView, setIsInView] = useState(false);
  const [initialView, setInitialVies ]= useState(true)
  const carouselRef = useRef(null);

  // Smooth out content animation when slide changes
  useGSAP(() => {
    const content = document.querySelector(".content");

    if (!content) return;

    gsap.fromTo(
      content,
      {
        opacity: 0,
      },
      {
        opacity: 1,
        duration: 0.5,
        delay: 0.3,
      }
    );
  }, [currentIndex]);

  // Set up observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsInView(entry.isIntersecting),
      { threshold: 0.5 }
    );

    if (carouselRef.current) {
      observer.observe(carouselRef.current);
    }

    return () => {
      if (carouselRef.current) observer.unobserve(carouselRef.current);
    };
  }, []);

  // Handles the transition of the carousel when the direction changes on arrow button click
  useEffect(() => {
    if (direction === "next") {
      const bgImage = document.querySelector("#carousel");
      setDirection("");

      bgImage.style.backgroundImage = `url(${
        currentIndex === 0
          ? carouselImgs[0].img
          : carouselImgs[currentIndex].img
      })`;

      // Hnadles the timout of transitions
      const timeOut = setTimeout(() => {
        setCurrentIndex((prevIndex) =>
          prevIndex === carouselImgs.length - 1 ? 0 : prevIndex + 1
        );

        // Move the first item to the end of the list
        list.appendChild(sliderItemsDom[0]);
        carousel.classList.add("next");
      }, 100);
    } else if (direction === "prev") {
      setDirection("");
      const timeOut = setTimeout(() => {
        setCurrentIndex((prevIndex) =>
          prevIndex === 0 ? carouselImgs.length - 1 : prevIndex - 1
        );
        list.prepend(sliderItemsDom[sliderItemsDom.length - 1]);
        carousel.classList.add("prev");
      }, 100);
    }
  }, [direction]);

  // Auto slide functionality
  useEffect(() => {
    // Wait until carousel is in view to start animation
    if (!isInView) return; 

    // If this is the initial load, the carousel wil rotate after 1 sec, otherwise 3.5 secs.
     if (initialView) timeAutoNext = 1000; else timeAutoNext = 3500;
     setInitialVies(false)

    // Auto slide accordingly
    const autoSlide = setInterval(() => {
      setDirection("next");
    }, timeAutoNext);
    
    

    return () => clearInterval(autoSlide);
  }, [isInView, currentIndex]);

  return (
    <CarouselWrapper className='carouselWrapper' ref={carouselRef}>
      <CarouselContainer
        id='carousel'
        className='carousel size-full bg-cover bg-center'
      >
        <CarouselList id='list' className='list'>
          {carouselImgs.map((img, index) => (
            <CarouselItem id='item' className='item' key={index}>
              {/* Slide Overlay */}
              {/* Slide Content */}
              {index === currentIndex && (
                <SlideContent className='content1'>
                  {/* Heading */}
                  <h2
                    id='heading'
                    className='text-4xl lg:text-7xl font-fatface'
                  >
                    {carouselData[index].heading}
                  </h2>

                  {/* Text */}
                  <p id='desc' className='text-2xl my-4'>
                    {carouselData[index].description}
                  </p>

                  {/* Shop Now Button */}
                  <CustomButton id='customBtn' variant='default'>
                    Shop Now
                  </CustomButton>
                </SlideContent>
              )}

              {/* Slide Overlay */}
              <SlideOverlay className={index === 0 ? "block" : "hidden"} />

              {/* Slide Image */}
              <SlideImage
                src={img.img}
                width={1900}
                height={1200}
                alt={`carousel-image-${index}`}
              />
            </CarouselItem>
          ))}
        </CarouselList>

        {/* Carousel Navigation */}
        <ArrowButtonsContainer>
          {/* Previous Button */}
          <PrevBtn
            id='prev'
            size={28}
            className='prev'
            onClick={() => setDirection("prev")}
          />

          {/* Next Button */}
          <NextBtn
            id='next'
            size={28}
            className='next'
            onClick={() => setDirection("next")}
          />
        </ArrowButtonsContainer>
      </CarouselContainer>
    </CarouselWrapper>
  );
};

export default Carousel;
