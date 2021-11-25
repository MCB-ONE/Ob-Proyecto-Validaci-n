import React from 'react';
import '../styles/css/loginPage.scss';
import LoginForm from '../components/forms/LoginForm';

function LoginPage() {
  return (
    <>
      <div className="background-layer">
        <h1 className="logo">
          Check
          <span>Docs</span>
        </h1>
      </div>
      <div className="form-wrapper">
        <div className="form">
          <h2 className="title">
            Check
            <span>Docs</span>
          </h2>
          <p className="subtitle">Acceso al panel de administración</p>
          <LoginForm />
        </div>
      </div>
    </>
  );
}

export default LoginPage;
