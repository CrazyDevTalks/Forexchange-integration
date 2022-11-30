import tw from 'tailwind-styled-components';

export const MainSection = tw.section`
  flex
  items-center
  justify-center
`;

export const HeaderContainer = tw.div`
 pt-8 
 text-center
  mb-8
  max-w-5xl
  text-slate-800
  dark:text-gray-100
`;

export const Title = tw.h1`
  mx-10
  text-2xl 
  sm:text-3xl
  md:text-4xl
  font-bold 
  font-montserrat
`;

export const Subtitle = tw.h2`
  mt-5
  mx-10
  text-xl
  font-roboto
`;
