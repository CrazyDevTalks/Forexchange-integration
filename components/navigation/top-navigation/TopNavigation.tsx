import Logo from '../logo/Logo';
import {
  MoonIcon,
  SunIcon,
  Bars3Icon,
  XMarkIcon,
} from '@heroicons/react/24/outline';

import {} from '@heroicons/react/24/solid';

import {
  MainContainer,
  InsideContainer,
  RelativeContainer,
  AbsoluteContainer,
  StyledButton,
  IconHolder,
  HeaderSpan,
  ButtonContainer,
} from './Styles';
type Props = {};

function TopNavigation({
  darkMode,
  handleToggleThemeClick,
}: {
  handleToggleThemeClick: Function;
  darkMode: boolean | null;
}) {
  return (
    <MainContainer>
      <InsideContainer>
        <Logo darkMode={darkMode} />
        <ButtonContainer>
          <RelativeContainer>
            <AbsoluteContainer></AbsoluteContainer>
            <StyledButton
              onClick={(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) =>
                handleToggleThemeClick(e)
              }
            >
              {darkMode ? (
                <>
                  <IconHolder>
                    <MoonIcon />
                  </IconHolder>

                  <HeaderSpan>Light Mode</HeaderSpan>
                </>
              ) : (
                <>
                  <IconHolder>
                    <SunIcon />
                  </IconHolder>

                  <HeaderSpan>Dark Mode</HeaderSpan>
                </>
              )}
            </StyledButton>
          </RelativeContainer>
        </ButtonContainer>
      </InsideContainer>
    </MainContainer>
  );
}

export default TopNavigation;
