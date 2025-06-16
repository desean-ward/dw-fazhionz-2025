export const baseButton =
  'min-w-[200px] w-fit h-[50px] px-[35px] flex justify-center items-center ' +
  'uppercase text-white bg-[maroon] border-none rounded-lg ' +
  'tracking-[0.5px] leading-[50px] cursor-pointer ' +
  'transition-colors duration-300 ease-in-out relative z-50 pointer-events-auto ' ;

export const variants = {
  default: [
    'hover:bg-white hover:text-[maroon] hover:font-bold hover:border hover:border-[maroon] hover:border-2',
    'active:text-gray-500 active:border active:border-gray-500',
  ],
  google: [
    'bg-[#4285f4] text-white',
    'hover:bg-white hover:text-[#4285f4] hover:outline hover:outline-1 hover:outline-[#4285f4]',
  ],
  inverted: [
    'bg-white text-black border border-black',
    'hover:bg-black hover:text-white hover:border-none',
  ],
};
