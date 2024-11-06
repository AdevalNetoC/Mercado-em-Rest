// src/components/Login.js
import React from 'react';
import './Login.css';
import logo from '../Imagens/Bakana logo.png';

const Login = () => {
    return (
        <div className="login-page">
            <div className="logo-image">
                <img src={logo} alt="logo" className="login-logo" />
            </div>
            <div className="login-container">
                <h2>Login</h2>
                <form action="../Mercado/mercado.html">
                    <input type="text" placeholder="ID" required />
                    <input type="email" placeholder="Email" required />
                    <input type="password" placeholder="Senha" required />
                    <button type="submit">Entrar</button>
                </form>
                <a href="/recovery" className="forgot-password-link">Esqueceu sua senha?</a>
            </div>
        </div>
    );
};

export default Login;