import tw from 'tailwind-styled-components';

export const FlipCardsWrapper = tw.section`
  relative
  size-screen
  py-16
  -top-[550px]
`;

export const FlipCardsSection1Container = tw.section`
  section-wrapper
  hero
  h-[100svh]  
  flex
  justify-center
  bg-white
  border
  border-black/50
  `

export const HeroCards = tw.div`
  hero-cards
  absolute
  top-1/2
  left-1/2
  transform
  -translate-x-1/2
  -translate-y-1/2
  w-[35%]
  flex
  justify-center
  gap-4
`;

export const HeroCard = tw.div`
  hero-card
  flex-1 
  relative
  aspect-[5/7]
  p-[0.75rem]
  flex
  flex-col
  justify-between
`

export const HeroCardTitle = tw.div`
  card-title
  w-full 
  flex 
  justify-between
`

export const FlipCardsSection2Container = tw.section`
  about 
  section-wrapper
  h-[100svh] 
  justify-center 
  flex
  bg-black 
  text-white
  `
export const FlipCardsSection3Container = tw.section`
  section-wrapper
  services
  h-[100svh]  
  flex
  justify-center
  bg-white
  `
export const ServicesHeader = tw.div`
  services-header
  font-fatface
  relative 
  w-full
  text-center
  transform
  //translate-y-[400%]
  will-change-transform
`

export const CardsSection = tw.section`
  cards
  fixed 
  top-0
  left-0
  w-[100vw]
  h-[100svh] 
  flex 
  justify-center
  //-z-10
`

export const CardsContainer = tw.div`
  cards-container
  relative 
  w-[75%]
  h-full 
  flex
  justify-center
  items-center 
  gap-16
  border-2
`

export const Card = tw.div`
  card
  flex-1 
  relative
  aspect-[5/7]
  perspective-1000
  rounded-[1rem]
`

export const CardWrapper = tw.div`
  card-wrapper
  absolute 
  top-1/2 
  left-1/2 
  transform
  translate-[-50%, -50%]
  w-full
  h-full 
  animate-floating
`
export const CardTitle = tw.div`
  card-title
  w-full 
  flex 
  justify-between
`

export const FlipCardInner = tw.div`
  flip-card-inner
  w-full 
  h-full 
  transform-style-preserve-3d
`

export const FlipCardFront = tw.div`
  flip-card-front
  p-[1rem]
  flex
  flex-col
  justify-between
  items-center
`

export const FlipCardBack = tw.div`
  flip-card-back
  p-[1rem]
  flex
  flex-col
  justify-between
  gap-8 
  bg-white
  rotate-y-180
`

