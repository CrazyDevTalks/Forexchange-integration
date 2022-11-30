import Image from 'next/image';

interface DarkModeContextType {
  darkMode: boolean | null;
}

import LightLogo from '@/public/logos/light-logo.png';
import DarkLogo from '@/public/logos/dark-logo.png';

import { ImageContainer } from './Styles';

const Logo = ({ darkMode }: DarkModeContextType) => {
  return (
    <>
      {darkMode ? (
        <ImageContainer>
          <Image src={DarkLogo} alt="4X logo" priority={true} />
        </ImageContainer>
      ) : (
        <ImageContainer>
          <Image src={LightLogo} alt="4X logo" priority={true} />
        </ImageContainer>
      )}
    </>
  );
};

export default Logo;
