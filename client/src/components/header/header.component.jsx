"use client";
import React, { useState, useEffect } from "react";
import {
  CartContainer,
  LogoContainer,
  HeaderContainer,
  NavLink,
  NavLinksContainer,
  NavLinksList,
  HeaderWrapper,
  RightContentContainer,
  SearchContainer,
  SearchInput,
  ScrollToTopContainer,
  HamburgerContainer,
  MobileMenuContainer,
} from "./header.styles";
import { navLinks } from "../../../data";
import Link from "next/link";
import { BsFillArrowUpSquareFill } from "react-icons/bs";
import { GiHamburgerMenu } from "react-icons/gi";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useSelector } from "react-redux";
import MobileMenu from "../mobile-menu/mobile-menu.component";
import { usePathname } from "next/navigation";

const Header = () => {
  // Scrolling state
  const [isScrolling, setIsScrolling] = useState(false);
  // Mobile menu state
  const [showMenu, setShowMenu] = useState(false);

  // Get the path to initially hide the header on the home page
  const path = usePathname();

  // Redux state to trigger session storage retrieval
  const animationComplete = useSelector((state) => state.heroIntro.value);

  // Session storage value for intro animation state
  const isIntroComplete = sessionStorage.getItem("heroIntroComplete");

  // Scroll to top function
  const scrollToTop = () => {
    if (typeof window === "undefined") return;

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // Handle scrolling
  useEffect(() => {
    // Check to see if window and document objects are defined
    if (typeof window === "undefined" || typeof document === "undefined")
      return;

    // Grab the header element
    const header = document.querySelector("#dw-header");
    const arrow = document.querySelector("#backToTop");

    // Return if header does not exist, return
    if (!header) return;

    // Handle background color on scrolling
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolling(true);
        header.style.backgroundColor = "black";
      } else {
        setIsScrolling(false);
        header.style.backgroundColor = "transparent";
      }
    };

    // Add event listener for scrolling
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Set the header to animate in if the hero animation is complete
  useEffect(() => {
    if (isIntroComplete) {
      gsap.timeline().to("#dw-header", {
        y: 0,
        opacity: 1,
        duration: 1,
      });
    }
  }, [isIntroComplete, animationComplete]);

  useEffect(() => {
    // Initially hide the header
    if (!isIntroComplete) {
      path === "/" && gsap.set("#dw-header", { y: -100, opacity: 0 });
    }
  }, [path, isIntroComplete]);

  // Back top arrow animation
  useGSAP(() => {
    if (typeof document === "undefined") return;

    const arrow = document.querySelector("#backToTop");
    if (!arrow) return;

    if (isScrolling) {
      gsap.fromTo(
        arrow,
        {
          opacity: 0,
          top: 0,
          duration: 0.5,
        },
        {
          opacity: 1,
          top: "92dvh",
          duration: 0.5,
        }
      );
    } else {
      gsap.to(arrow, {
        opacity: 0,
        top: 0,
        duration: 0.5,
      });
    }
  }, [isScrolling]);

  return (
    <HeaderWrapper id='dw-header'>
      <HeaderContainer>
        {/* Logo Container */}
        <LogoContainer id='dw-logo'>
          <Link href='/' alt='Home'>
            D.W. Fazhionz!
          </Link>
        </LogoContainer>

        {/* Search Container */}
        <SearchContainer id='dw-search'>
          <SearchInput type='text' placeholder='Search' />
        </SearchContainer>

        {/* Right Content Container */}
        <RightContentContainer id='dw-right-content'>
          {/* Nav Links Container */}
          <NavLinksContainer id='dw-nav-links'>
            <NavLinksList>
              {navLinks.map((link, idx) => (
                <NavLink key={idx}>
                  <Link href={link.path}>{link.name}</Link>
                </NavLink>
              ))}
            </NavLinksList>
          </NavLinksContainer>

          {/* Shopping Cart */}
          <CartContainer></CartContainer>

          {/* Scroll To Top Arrow */}
          <ScrollToTopContainer id='backToTop' onClick={scrollToTop}>
            <BsFillArrowUpSquareFill size={42} />
          </ScrollToTopContainer>

          {/* Mobile Menu */}
          <HamburgerContainer
            id='hamburger'
            onClick={() => {
              setShowMenu(!showMenu);
            }}
          >
            <GiHamburgerMenu
              size={42}
              className='hover:text-[maroon] hover:cursor-pointer'
            />
          </HamburgerContainer>

          {/* Mobile Menu */}
          <MobileMenuContainer>
            <MobileMenu show={showMenu} close={setShowMenu} />
          </MobileMenuContainer>
        </RightContentContainer>
      </HeaderContainer>
    </HeaderWrapper>
  );
};

export default Header;
