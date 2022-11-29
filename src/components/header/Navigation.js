import React from 'react';
import { Link } from 'react-router-dom';
import { FiHome, FiArchive, FiPlusCircle, FiLogOut } from 'react-icons/fi';
import { MdOutlineDarkMode, MdOutlineLightMode } from 'react-icons/md';
import { SiGoogletranslate } from 'react-icons/si';
import ThemeContext from '../../context/ThemeContext';
import LocaleContext from '../../context/LocaleContext';
import PropTypes from 'prop-types';

function Navigation({ logout }) {
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
        <li>
          <Link to="/">
            <FiHome />
          </Link>
        </li>
        <li>
          <Link to="/archived">
            <FiArchive />
          </Link>
        </li>
        <li>
          <Link to="/add">
            <FiPlusCircle />
          </Link>
        </li>
        <li>
          <button type="button" className="nav-button" onClick={logout}>
            <FiLogOut />
          </button>
        </li>
      </ul>
    </nav>
  );
}

Navigation.propTypes = {
  logout: PropTypes.func.isRequired,
};

export default Navigation;
