import React from 'react';
import { Link } from 'react-router-dom';
import RegisterInput from '../components/content/RegisterInput';

function RegisterPage() {
  const locale = localStorage.getItem('locale');

  return (
    <section className="register-page">
      <h2>{locale === 'en' ? 'Please fill the form to register' : 'Isi form untuk registrasi'}</h2>
      <RegisterInput />
      <p>
        {locale === 'en' ? 'Already have an account?' : 'Sudah punya akun?'}
        <Link to="/login" id="logRegText">
          {locale === 'en' ? 'Login here' : 'Login disini'}
        </Link>
      </p>
    </section>
  );
}

export default RegisterPage;
