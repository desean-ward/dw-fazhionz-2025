import Image from "next/image";
import tw from "tailwind-styled-components";

export const OurCollectionWrapper = tw.section`
    section-wrapper
    -top-[51vh]
    z-10
`;

export const RevealPanelsContainer = tw.div`
    absolute
    size-full
    flex
`

export const RevealPanelLeft = tw.div`
    w-1/2
    h-full
    bg-white
`
export const RevealPanelRight = tw.div`
    w-1/2
    h-full
    bg-white
`
export const OurCollectionContainer = tw.div`
    size-full
    flex 
    flex-col 
    items-center
    justify-start
    gap-8
`;

export const CategoriesContainer = tw.div`
    relative
    size-full
    max-w-[1400px]
    flex 
    flex-wrap
    justify-center
    items-center 
    gap-4
    overflow-hidden
`;

export const CategoryItem = tw.div`
    relative
    h-[240px]
    min-w-[240px]
    lg:min-w-[30%]
    flex 
    flex-auto 
    justify-center 
    items-center  
    border 
    border-black 
    bg-white 
    text-black
    rounded-[10px] 
    overflow-hidden
    group/item
`;

export const CategoryImage = tw(Image)`
    absolute
    object-cover
    hover:scale-150
    duration-12000
`

export const ItemContent = tw.div`
    bg-white
    opacity-50
    border 
    px-4 
    py-2
    rounded-md
    text-center
    cursor-pointer
    group/content
`
