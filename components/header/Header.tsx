import { useState } from 'react';
import TopNavigation from '../navigation/top-navigation/TopNavigation';

interface DarkModeContextType {
  darkMode: boolean | null;
  handleToggleThemeClick: Function;
}

const Header = ({ handleToggleThemeClick, darkMode }: DarkModeContextType) => {
  return (
    <>
      <TopNavigation
        darkMode={darkMode}
        handleToggleThemeClick={handleToggleThemeClick}
      />
    </>
  );
};

export default Header;
