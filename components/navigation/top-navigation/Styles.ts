import tw from 'tailwind-styled-components';

export const MainContainer = tw.nav`
  dark:bg-[#182635]
  bg-white
  w-full
`;

export const InsideContainer = tw.div`
  flex
  flex-row
  items-center
  py-1
  pr-2
  md:px-0
  top-0
  justify-between 
  max-w-7xl 
  mx-auto
`;

export const IconContainer = tw.div`
  flex
  flex-row
  flex-1
  w-full
  items-center
  text-lg
  space-x-3
  md:space-x-2
  lg:space-x-3
  justify-end
  md:pr-5
  dark:text-slate-300
  text-gray-800
`;

export const RelativeContainer = tw.div`
  relative
  group
`;

export const AbsoluteContainer = tw.div`
  hidden
  group-hover:flex
  blur-sm
  absolute
  rounded-full
  -inset-0.5
  dark:bg-blue-500
  bg-blue-600
  opacity-90
  group-hover:opacity-100
  transition
  group-hover:duration-300
  duration-500
`;

export const IconHolder = tw.div`
  text-blue-600
  dark:text-gray-300
  dark:hover:text-blue-400
  w-5
  h-5
  lg:w-6
  lg:h-6
`;

export const HeaderSpan = tw.span`
  absolute 
  group-hover:scale-100
  w-auto 
  p-2 
  m-2 
  min-w-max 
  top-12
  rounded-md
  shadow-md 
  text-slate-200 
  bg-gray-700 
  dark:bg-[#23272F]
  text-xs 
  font-bold 
  transition-all 
  duration-150 
  scale-0 
  origin-bottom
`;

export const StyledButton = tw.button`
  relative  
  group
  dark:bg-[#151F28]
dark:hover:border-blue-500
dark:hover:text-[#EADEB9]
bg-gray-100
  rounded-full
  p-2
  flex
  items-center
  justify-center
  border
  border-transparent
hover:border-blue-500
hover:text-stone-500
  transition-all
  duration-300
  ease-linear
  shadow-lg
`;

export const ButtonContainer = tw.div`
 items-center 
 space-x-2 
 mx-5 
 inline-flex
 `;
