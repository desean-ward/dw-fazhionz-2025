"use client";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { introComplete } from "@/redux/features/hero/heroSlice";
import {
  CoverImage,
  CoverImageContainer,
  GridBackground,
  GridBackgroundContainer,
  HeroContainer,
  HeroContent,
  HeroImage,
  HeroImagesContainer,
  HeroWrapper,
  LogoTitle,
  Revealer,
  RevelearsContainer,
  SiteInfo,
  SiteInfoContainer,
  SiteLogo,
} from "./hero.styles";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import SplitType from "split-type";
import { Flip } from "gsap/all";

gsap.registerPlugin(Flip);

const Hero = () => {
  const dispatch = useDispatch();

  // Get the state of the intro animation
  const isIntroComplete = sessionStorage.getItem("heroIntroComplete");

  useGSAP(() => {
    if (typeof document === undefined) return;

    // Function to handle animation completion
    const markAnimationComplete = () => {
      // Save hero complete to session storage
      sessionStorage.setItem("heroIntroComplete", true);

      // Dispatch hero complete
      dispatch(introComplete());
    };

    if (!isIntroComplete) {
      // Slit the h2 into lines
      const splitH2 = new SplitType(".site-info h2", {
        types: "lines",
      });

      splitH2.lines.forEach((line) => {
        const text = line.textContent;
        const wrapper = document.createElement("div");
        wrapper.className = "line";
        const span = document.createElement("span");
        span.textContent = text;
        wrapper.appendChild(span);
        line.parentNode.replaceChildren(wrapper, line);
      });

      // Animation Timelines
      const mainTl = gsap.timeline({
        onComplete: markAnimationComplete,
      });
      const revealerTl = gsap.timeline();
      const scaleTl = gsap.timeline();

      // Reveals the opening hero content
      revealerTl
        .to(".r-1", {
          y: "-100vh",
          duration: 1.5,
        })
        .to(
          ".r-2",
          {
            y: "100vh",
            duration: 1.5,
          },
          "<"
        );

      // Upscales the initial hero image
      gsap.set(".img", {
        scale: 1.25,
      });

      // Initially hides the red cover image and the last revealer
      gsap.set(["#cover-image", "#r-3"], { visibility: "hidden" });

      // Scales the first image back to 1 prior to animation
      scaleTl.to(".img:first-child", {
        scale: 1,
        duration: 1.25,
        delay: 0.5,
        ease: "power4.inOut",
      });

      // Get all of the images, except the first
      const images = document.querySelectorAll(".img:not(:first-child");

      // Fade in each image consecutively
      images.forEach((img, index) => {
        scaleTl.to(img, {
          opacity: 1,
          scale: 1,
          duration: 0.65,
          ease: "power3.out",
        });
      }, ">-0.5");

      // The main timeline
      mainTl
        .add(revealerTl)
        .add(scaleTl, "-=1.25")
        .add(() => {
          document
            .querySelectorAll(".img:not(.main)")
            .forEach((img) => img.remove());

          const state = Flip.getState(".main");

          // Grab the image container and add the 'stacked-container' class
          const imagesContainer = document.querySelector(".images");
          imagesContainer.classList.add("stacked-container");

          // The 3 stacked images on the bottom left
          document.querySelectorAll(".main").forEach((img, i) => {
            img.classList.add("stacked");
            img.style.order = i;
            gsap.set(".img.stacked", {
              clearProps: "transform, top, left",
            });
          });

          return Flip.from(state, {
            duration: 1.5,
            absolute: true,
            stagger: {
              amount: -0.3,
            },
            ease: "power4.in",
          });
        })
        .to(".word h1, .nav-item p, .line p, .line span", {
          y: 0,
          duration: 1,
          stagger: 0.1,
          delay: 1.25,
        })
        .to(["#cover-image", "#r-3"], { visibility: "visible", delay: -1 })
        // Reveal for cover image
        .to(
          "#r-3",
          {
            y: "-100%",
            duration: 1,
          },
          "<"
        );
    } else {
      // Set home page content without intro animation
      gsap.set(".r-1, .r-2, #r-3", { y: "-100vh" });
      gsap.set(".img:first-child", { scale: 1, opacity: 1 });
      gsap.set(".img:not(:first-child)", { scale: 1, opacity: 1 });
      gsap.set(".word h1, .nav-item p, .line p, .line span", {
        y: 0,
        opacity: 1,
      });

      document.querySelector(".images").classList.add("stacked-container");
      document.querySelectorAll(".main").forEach((img, i) => {
        img.classList.add("stacked");
        img.style.order = i;
      });
      gsap.set(".r-1, .r-2, #r-3", { y: "-100vh" });

      // Displays the 3 stacked images
      document
        .querySelectorAll(".img:not(.main)")
        .forEach((img) => img.remove());

      gsap.set(".word h1, .nav-item p, .line p, .line span", {
        y: 0,
        opacity: 1,
      });

      document.querySelector(".images").classList.add("stacked-container");
      document.querySelectorAll(".main").forEach((img, i) => {
        img.classList.add("stacked");
        img.style.order = i;
      });
    }
  }, [isIntroComplete, dispatch]);

  return (
    <HeroWrapper>
      <HeroContainer>
        {/* Revealers Container */}
        <RevelearsContainer>
          <Revealer className='top-0 r-1'></Revealer>
          <Revealer className='bottom-0 r-2'></Revealer>
        </RevelearsContainer>

        {/* Hero Images Container */}
        <HeroImagesContainer className='images'>
          <HeroImage
            className='img'
            src='/images/hero/hero-1.jpg'
            width={1080}
            height={900}
            alt='Hero Image 1'
          />
          <HeroImage
            className='img'
            src='/images/hero/hero-2.jpg'
            width={1080}
            height={900}
            alt='Hero Image 2'
          />
          <HeroImage
            className='img'
            src='/images/hero/hero-3.jpg'
            width={1080}
            height={900}
            alt='Hero Image 3'
          />
          <HeroImage
            className='img'
            src='/images/hero/hero-4.jpg'
            width={1080}
            height={900}
            alt='Hero Image 4'
          />
          <HeroImage
            className='img'
            src='/images/hero/hero-5.jpg'
            width={1080}
            height={900}
            alt='Hero Image 5'
          />
          <HeroImage
            className='img main'
            src='/images/hero/hero-6.jpg'
            width={1080}
            height={900}
            alt='Hero Image 6'
          />
          <HeroImage
            className='img main'
            src='/images/hero/hero-7.jpg'
            width={1080}
            height={900}
            alt='Hero Image 7'
          />
          <HeroImage
            className='img main'
            src='/images/hero/hero-8.jpg'
            width={1080}
            height={900}
            alt='Hero Image 8'
          />
        </HeroImagesContainer>

        {/* Hero Content */}
        <HeroContent>
          {/* Logo */}
          <SiteLogo id='site-logo'>
            <LogoTitle id='logo-title'>
              <div className='word font-fatface'>
                <h1>D.W.</h1>
              </div>{" "}
              <div className='word font-fatface'>
                <h1>Fazhionz!</h1>
              </div>
            </LogoTitle>

            <div className='line'>
              <p className='tagline'>
                Modern Apparel For Modern Mindz <sup>&copy;</sup>
              </p>
            </div>
          </SiteLogo>
        </HeroContent>

        {/* Cover Image */}
        <CoverImageContainer id='cover-image' className='right-2'>
          <Revealer id='r-3' />
          <CoverImage
            src='/images/hero/hero-cover.jpeg'
            width={1080}
            height={900}
            alt='Cover Image'
          />
        </CoverImageContainer>

        {/* Site Info Container */}
        <SiteInfoContainer>
          <SiteInfo className='site-info row'>
            <div className='col featured'>
              <div className='line'>
                <p className='font-medium uppercase featured'>
                  Featured Stylez
                </p>
              </div>
            </div>

            {/* Stacked Images */}
            <div></div>
          </SiteInfo>
          <SiteInfo className='site-info discover'>
            <div className='line'>
              <p className='copy text-balance'>
                Discover bold, modern fashion with D.W Fazhionz!. From statement
                pieces to timeless essentials, we bring elegance and confidence
                to every wardrobe. Redefine your look—because fashion is who you
                are.
              </p>
            </div>
          </SiteInfo>
        </SiteInfoContainer>
      </HeroContainer>
      <GridBackgroundContainer id='bg-grid-container'>
        <GridBackground
          id='bg-grid'
          src='/images/hero/grid-background.png'
          width={1080}
          height={900}
          alt='Grid Background'
        />
      </GridBackgroundContainer>
    </HeroWrapper>
  );
};

export default Hero;
