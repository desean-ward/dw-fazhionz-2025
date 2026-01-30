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
  w-full
  max-w-6xl
  flex
  gap-16
  border
`;

export const HeroCard = tw.div`
  card
  flex-1 
  relative
  aspect-ration-[5/7]
  p-[0.75rem]
  border
  rounded-[0.5rem]
  flex
  flex-col
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