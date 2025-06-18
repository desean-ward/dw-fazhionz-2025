"use client";
import { useRef } from "react";

import {
  CategoriesContainer,
  CategoryImage,
  CategoryItem,
  ItemContent,
  OurCollectionContainer,
  OurCollectionWrapper,
  RevealPanelLeft,
  RevealPanelRight,
  RevealPanelsContainer,
} from "./our-collection.styles";

import { categories } from "../../../data";
import Link from "next/link";

import { AnimateHeading, AnimateReveal } from "@/animations/animations";

import { useGSAP } from "@gsap/react";

const OurCollection = () => {
  const wrapperRef = useRef(null);
  const headingRef = useRef(null);
  const panelLeftRef = useRef(null);
  const panelRightRef = useRef(null);

  // Animations
  useGSAP(() => {
    AnimateHeading(wrapperRef, headingRef);
    AnimateReveal(wrapperRef, panelLeftRef, panelRightRef);
  }, [wrapperRef.current]);

  return (
    <OurCollectionWrapper id='collection-wrapper' ref={wrapperRef}>
      <OurCollectionContainer id='collection-container'>
        <h1
          className='section-heading text-[maroon] text-center'
          id='collection-heading'
          ref={headingRef}
        >
          Browse Our Collection
        </h1>

        {/* Categories Container */}
        <CategoriesContainer id='categories-container'>
          {/* Category Items */}
          {categories.map((category, idx) => (
            <CategoryItem id={`item${idx}`} key={idx}>
              <CategoryImage
                src={category.img}
                width='1000'
                height='1000'
                alt={category.name}
              />
              {/* Item Content */}
              <Link href={category.url}>
                <ItemContent className='group-hover/item:opacity-80 duration-300 transition-opacity'>
                  <h6 className='font-fatface group-hover/content:text-[maroon] duration-300 transition-colors cursor-pointer'>
                    {category.name}
                  </h6>

                  <p className='text-slate-500/90 text-md'>SHOP NOW</p>
                </ItemContent>
              </Link>
            </CategoryItem>
          ))}
          {/* Reveal Panels */}
          <RevealPanelsContainer id='reveal-panels'>
            <RevealPanelLeft id='panel-left' ref={panelLeftRef} />
            <RevealPanelRight id='panel-right' ref={panelRightRef} />
          </RevealPanelsContainer>
        </CategoriesContainer>
      </OurCollectionContainer>
    </OurCollectionWrapper>
  );
};

export default OurCollection;
