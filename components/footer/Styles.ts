import tw from 'tailwind-styled-components';

export const MainContainer = tw.div`
  w-full
  border-t
  border-gray-600
  dark:bg-[#182635]
  bg-[#DEEBF6]
`;

export const InsideContainer = tw.div`
  p-5
  space-y-6
`;

export const SmallText = tw.p`
  text-xs
  text-gray-800
  dark:text-gray-300
  text-center
`;

export const IconContainer = tw.div`
  flex 
  items-center 
  justify-center
`;

export const IconHolder = tw.div`
  relative
  group
  pb-5
  text-gray-800
  dark:text-gray-300
`;

export const HeaderSpan = tw.span`
  absolute 
  group-hover:scale-100
  w-auto 
  p-2 
  m-2 
  min-w-max 
  bottom-3
  left-10
  md:bottom-4
  rounded-md
  shadow-md 
  text-gray-200 
  bg-gray-900 
  text-xs 
  font-bold 
  transition-all 
  duration-300 
  scale-0 
  origin-left
  dark:bg-[#23272F]
`;
