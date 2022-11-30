import tw from 'tailwind-styled-components';

export const StyledContainer = tw.div`
  mt-10
  px-5
  flex
  items-center
  flex-col
  justify-center
`;
export const InsideContainer = tw.div`
  flex 
  flex-col
  items-center
  flex-1
  min-w-full
  p-8
  sm:px-10
  md:px-12
  sm:py-10
  md:py-12
  border
  border-transparent
  border-zinc-200
  rounded-md
  bg-white
  dark:bg-[#182635]
  dark:text-white
  hover:border-slate-500
  shadow-lg
  transition
  duration-150
  ease-in-out
  md:max-w-md
  md:mx-auto
`;
export const HeaderContainer = tw.div`
  mb-4
  text-2xl
  font-montserrat
  text-gray-700
  dark:text-gray-200
  uppercase
`;
export const StyledInput = tw.input`
  my-3
  block 
  w-full 
  px-3 
  py-2  
  border-slate-300 
  text-sm 
  shadow-sm 
  placeholder:text-slate-600
  dark:placeholder:text-white
  dark:bg-[#0E141B]
  dark:text-white
  border
  rounded-md
  text-slate-800
  bg-[#DEEBF6]
  focus:outline-none 
  focus:border-gray-500 
  focus:ring-1
  focus:rounded-md
  focus:ring-gray-500
  focus:bg-blue-50
  invalid:text-pink-600
  focus:invalid:border-pink-500 
  focus:invalid:ring-pink-500
`;
export const StyledButtonContainer = tw.div`
  flex
  flex-col
  justify-center
  items-center
  w-full
  mt-8
`;

export const StyledLabel = tw.label`
  font-roboto
  text-gray-800
  dark:text-white
  font-semibold
  leading-relaxed
  tracking-wide
`;

export const StyledButton = tw.button`
  flex
  flex-row
  items-center
  justify-center
  font-bold
  font-montserrat
  text-lg
  md:text-xl
  rounded-full
  py-2
  px-10
  bg-blue-600
  dark:bg-blue-500
  dark:hover:bg-transparent
  dark:hover:border-blue-500
  dark:hover:text-blue-500
  text-white
  transition
  duration-300
  ease-in-out
  hover:bg-white
  hover:text-blue-600
  border-2
  border-transparent
  hover:border-blue-600
  mb-5
  max-w-sm
`;

export const PrevButton = tw.button`
  flex
  flex-row
  items-center
  justify-center
  font-bold
  font-montserrat
  text-lg
  md:text-xl
  py-2
  px-10
  rounded-full
  bg-rose-600
  dark:bg-rose-500
  dark:hover:bg-transparent
  dark:hover:border-rose-500
  dark:hover:text-rose-500
  text-white
  transition
  duration-300
  ease-in-out
  hover:bg-white
  hover:text-rose-600
  border-2
  border-transparent
  hover:border-rose-600
  mb-5
  max-w-sm
`;

export const FormFooter = tw.div`
  flex 
  flex-row 
  items-center
  font-montserrat
  text-slate-800
  text-sm
  text-semibold
  mt-5
`;

export const SmallHeaderContainer = tw.div`
  font-montserrat
  md:text-sm
  text-left
  flex
  w-full
  flex-1
  flex-wrap
  leading-relaxed
  items-center
  mb-4
  text-xs
  mt-3
`;

export const HiddenContainer = tw.div`
  text-lg
  dark:text-white
  text-black
  flex 
  flex-col
  items-top
  font-montserrat
  text-semibold
`;

export const SmallText = tw.p`
  text-sm
  px-10
`;

export const LargeText = tw.p`
  text-lg
  md:text-xl
  font-bold
`;
