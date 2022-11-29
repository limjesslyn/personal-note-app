import React from 'react';
import { Link } from 'react-router-dom';
import LoginInput from '../components/content/LoginInput';
import PropTypes from 'prop-types';

function LoginPage({ loginSuccess }) {
  const locale = localStorage.getItem('locale');

  return (
    <section className="login-page">
      <h2>
        {' '}
        {locale === 'en'
          ? 'Please login to use the app'
          : 'Silakan login untuk menggunakan aplikasi'}
      </h2>
      <LoginInput loginSuccess={loginSuccess} />
      <p>
        {locale === 'en' ? "Don't have an account?" : 'Tidak punya akun?'}
        <Link to="/register" id="logRegText">
          {locale === 'en' ? 'Register here' : 'Registrasi disini'}
        </Link>
      </p>
    </section>
  );
}

LoginPage.propTypes = {
  loginSuccess: PropTypes.func.isRequired,
};

export default LoginPage;
