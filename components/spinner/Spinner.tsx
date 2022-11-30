import Image from 'next/image';
import { ImageContainer } from './Styles';
import { useContext } from 'react';
import LightSpinner from '@/public/logos/light-logo.png';
import DarkSpinner from '@/public/logos/dark-logo.png';
import { DarkContext } from '@/context/dark-context';

const LoadingSpinner = () => {
  const { darkMode } = useContext(DarkContext);

  return (
    <>
      <div className="flex justify-center items-center  inset-0 fixed bg-white dark:bg-[#23272F]">
        <ImageContainer>
          {darkMode ? (
            <Image src={DarkSpinner} alt="spinner logo" priority={true} />
          ) : (
            <Image src={LightSpinner} alt="spinner logo" priority={true} />
          )}
        </ImageContainer>
      </div>
    </>
  );
};

export default LoadingSpinner;
