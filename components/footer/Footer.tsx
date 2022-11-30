import Link from 'next/link';
import { ArrowUpCircleIcon } from '@heroicons/react/24/outline';

import {
  MainContainer,
  InsideContainer,
  SmallText,
  IconContainer,
  IconHolder,
  HeaderSpan,
} from './Styles';

const Footer = () => {
  return (
    <MainContainer>
      <InsideContainer>
        <SmallText>© 2022 Chris Doll. All Rights Reserved.</SmallText>
      </InsideContainer>

      <IconContainer>
        <Link href="#header">
          <IconHolder>
            <ArrowUpCircleIcon className="h-8 w-8 md:h-10 md:w-10 rounded-full cursor-pointer" />
            <HeaderSpan>Back to top</HeaderSpan>
          </IconHolder>
        </Link>
      </IconContainer>
    </MainContainer>
  );
};

export default Footer;
