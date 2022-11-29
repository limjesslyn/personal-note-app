import React, { useEffect, useState } from 'react';
import NoteHeader from './components/header/NoteHeader';
import HomePage from './pages/HomePage';
import { Routes, Route, useNavigate } from 'react-router-dom';
import AddPage from './pages/AddPage';
import NoteFooter from './components/footer/NoteFooter';
import ArchivedPage from './pages/ArchivedPage';
import DetailPage from './pages/DetailPage';
import NotFoundPage from './pages/NotFoundPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import NoteHeaderNoLogin from './components/header/NoteHeaderNoLogin';
import { getUserLogged, putAccessToken } from './utils/network-data';
import ThemeContext from './context/ThemeContext';
import LocaleContext from './context/LocaleContext';

function App() {
  const navigate = useNavigate();
  const [userLogged, setUserLogged] = useState(null);

  const [theme, setTheme] = React.useState('light');
  const toggleTheme = () => {
    setTheme((prevTheme) => {
      let newTheme = prevTheme === 'light' ? 'dark' : 'light';
      localStorage.setItem('theme', newTheme);
      return newTheme;
    });
  };
  const themeContextValue = React.useMemo(() => {
    return {
      theme,
      toggleTheme,
    };
  }, [theme]);

  const [locale, setLocale] = React.useState('en');
  const toggleLocale = () => {
    setLocale((prevLocale) => {
      let newLocale = prevLocale === 'en' ? 'id' : 'en';
      localStorage.setItem('locale', newLocale);
      return newLocale;
    });
  };
  const localeContextValue = React.useMemo(() => {
    return {
      locale,
      toggleLocale,
    };
  }, [locale]);

  async function onLoginSuccess({ accessToken }) {
    putAccessToken(accessToken);
    const { data } = await getUserLogged();
    setUserLogged(data);

    navigate('/');
  }

  function onLogout() {
    setUserLogged(null);
    putAccessToken('');

    navigate('/');
  }

  useEffect(() => {
    async function fetchLogged() {
      const { data } = await getUserLogged();
      setUserLogged(data);
    }
    fetchLogged();
  }, []);

  useEffect(() => {
    const storedTheme = localStorage.getItem('theme');
    document.documentElement.setAttribute('data-theme', storedTheme);
  }, [theme]);

  useEffect(() => {
    const storedLocale = localStorage.getItem('locale');
    document.documentElement.setAttribute('data-lang', storedLocale);
  }, [locale]);

  if (userLogged === null) {
    return (
      <>
        <ThemeContext.Provider value={themeContextValue}>
          <LocaleContext.Provider value={localeContextValue}>
            <div className="notes-app" data-theme={theme}>
              <NoteHeaderNoLogin />
              <main>
                <Routes>
                  <Route path="/*" element={<LoginPage loginSuccess={onLoginSuccess} />} />
                  <Route path="/register" element={<RegisterPage />} />
                </Routes>
              </main>
              <footer>
                <NoteFooter />
              </footer>
            </div>
          </LocaleContext.Provider>
        </ThemeContext.Provider>
      </>
    );
  }

  return (
    <>
      <ThemeContext.Provider value={themeContextValue}>
        <LocaleContext.Provider value={localeContextValue}>
          <div className="notes-app" data-theme={theme} data-lang={locale}>
            <NoteHeader logout={onLogout} />
            <main>
              <Routes>
                <Route path="/*" element={<NotFoundPage />} />
                <Route path="/" element={<HomePage />} />
                <Route path="/add" element={<AddPage />} />
                <Route path="/archived" element={<ArchivedPage />} />
                <Route path="/notes/:id" element={<DetailPage />} />
              </Routes>
            </main>
            <footer>
              <NoteFooter />
            </footer>
          </div>
        </LocaleContext.Provider>
      </ThemeContext.Provider>
    </>
  );
}

export default App;
