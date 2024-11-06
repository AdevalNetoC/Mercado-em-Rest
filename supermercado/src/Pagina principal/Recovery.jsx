// src/components/Recovery.js
import React from 'react';
import './Recovery.css';

const Recovery = () => {
    return (
        <div className="recovery-page">
            <div className="recovery-container">
                <h2>Recuperar Senha</h2>
                <p>Insira seu email para receber o código de verificação</p>
                <form action="senha-recuperada.html">
                    <input type="email" placeholder="Seu e-mail" required />
                    <button type="submit">Enviar</button>
                </form>
                <a href="/login" className="back-link">Voltar ao Login</a>
            </div>
        </div>
    );
};

export default Recovery;
