"use client";
import React, { useRef, useEffect, useState } from "react";

import { gsap } from "gsap";

import { MobileNavLink, Menu, Navigation, Wrapper } from "./mobile-menu.styles";

const MobileMenu = ({ show, close, currentUser }) => {
  const [hasItems, setHasItems] = useState(false);
  const wrapperRef = useRef(null);
  const navRef = useRef(null);
  const closeRef = useRef(null);
  const titleRef = useRef(null);

  const t1 = gsap.timeline({ defaults: { duration: 0.4, ease: "expo.inOut" } });

  useEffect(() => {
    if (show) openMenu();
  }, [show]);

  // Open mobile menu animation
  const openMenu = () => {
    try {
      if (t1.reversed()) {
        t1.play();
      } else {
        t1.to(wrapperRef.current, { visibility: "visible", zIndex: 200 })
          .to(".nav", { left: 0 })
          .to(".nav", { height: "100vh" }, "-=.1")
          .to(
            ".link",
            {
              opacity: 1,
              PointerEvents: "all",
              stagger: {
                each: 0.1,
              },
            },
            "-=.3"
          )
          .to(
            closeRef.current,
            { zIndex: 1, opacity: 1, PointerEvents: "all" },
            "-=.8"
          )
          .to(titleRef.current, { opacity: 1 }, "-=1");
      }
    } catch (err) {
      console.log("ERROR: " + err);
    }
  };

  // Close mobile menu animation
  const closeMenu = () => {
    t1.reverse();
    close();
  };
  return (
    <Wrapper ref={wrapperRef} className='wrapper'>
      <Navigation ref={navRef} className='nav'>
        <div ref={closeRef} className='close' onClick={closeMenu}></div>
        <h2 ref={titleRef} className='font-fatface'>
          D.W. Fazhionz
        </h2>
        <Menu className='menu'>
          <li className='item'>
            <MobileNavLink className='link' href='/' onClick={closeMenu}>
              Home
            </MobileNavLink>
          </li>
          <li className='item'>
            <MobileNavLink className='link' href='/shop' onClick={closeMenu}>
              Shop
            </MobileNavLink>
          </li>
          <li className='item'>
            <MobileNavLink
              className='link'
              href='/contact-us'
              onClick={closeMenu}
            >
              Contact Us
            </MobileNavLink>
          </li>
          <li className='item'>
            {currentUser ? (
              <MobileNavLink className='link' href='/auth' onClick={closeMenu}>
                Sign Out
              </MobileNavLink>
            ) : (
              <MobileNavLink className='link' href='/auth' onClick={closeMenu}>
                Sign In/Sign Up
              </MobileNavLink>
            )}
          </li>
        </Menu>

        <img className='nav' src='../../images/mobile-nav-bg.jpg' alt='' />
      </Navigation>
    </Wrapper>
  );
};

export default MobileMenu;
