import React from 'react';
import { MdOutlineDarkMode, MdOutlineLightMode } from 'react-icons/md';
import { SiGoogletranslate } from 'react-icons/si';
import LocaleContext from '../../context/LocaleContext';
import ThemeContext from '../../context/ThemeContext';

function NavigationNoLogin() {
  let { theme, toggleTheme } = React.useContext(ThemeContext);
  theme = localStorage.getItem('theme') || 'light';

  let { toggleLocale } = React.useContext(LocaleContext);

  return (
    <nav className="navigation">
      <ul>
        <li>
          <button type="button" className="nav-button" onClick={toggleTheme}>
            {theme === 'light' ? <MdOutlineDarkMode /> : <MdOutlineLightMode />}
          </button>
        </li>
        <li>
          <button type="button" className="nav-button" onClick={toggleLocale}>
            <SiGoogletranslate />
          </button>
        </li>
      </ul>
    </nav>
  );
}

export default NavigationNoLogin;
