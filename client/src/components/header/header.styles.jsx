import tw from "tailwind-styled-components";

export const HeaderWrapper = tw.section`
    sticky
    z-50
    top-0
    w-screen 
    h-20 
    px-8
    sticky 
    top-0
    transition-colors 
    duration-1000
    bg-transparent
`;

export const HeaderContainer = tw.div`
    size-full 
    flex 
    justify-between 
    items-center
`;

export const LogoContainer = tw.div`
    font-fatface
    hover:text-[maroon] 
    flex-1
    hidden 
    sm:block
`;

export const SearchContainer = tw.div`
    p-2 
    w-1/4
    mx-auto
    flex-1
    hidden 
    sm:block
`;

export const SearchInput = tw.input`
    w-96
    h-10 
    w-full
    outline-none 
    bg-white 
    text-black 
    rounded-md 
    px-2
    
`;

export const RightContentContainer = tw.div`
    flex 
    justify-end
    gap-4
    flex-1
`;

export const NavLinksContainer = tw.div`
    hidden 
    lg:block

`;

export const NavLinksList = tw.ul`
    w-full
    flex
    space-x-8
`;

export const NavLink = tw.li`
    hover:text-[maroon]
    duration-300
    transition-colors
`;

export const CartContainer = tw.div`
    size-10 
    border-2 
`;

export const ScrollToTopContainer = tw.div`
    fixed 
    bottom-[1em]
    text-[maroon]
    hover:cursor-pointer
    hover:text-[maroon]/70
    size-12
`;

export const HamburgerContainer = tw.div`
    relative 
    z-50 
    right-[-1em]
    ml-[-1em]
    lg:hidden
`;

export const MobileMenuContainer = tw.section`
`
