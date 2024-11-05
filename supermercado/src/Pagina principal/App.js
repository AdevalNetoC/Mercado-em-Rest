import React, { useState } from 'react';
import './App.css';
import ListaProdutos from './ListaProdutos';

function App() {
  return (
    <div className="App">
      <header>
        <h1>Supermercado Bakana</h1>
        <nav>
          <ul>
            <li><a href="#">Início</a></li>
            <li><a href="#">Produtos</a></li>
            <li><a href="usuarios.html">Usuários</a></li>
            <li><a href="../Login e recuperar senha/login.html">Sair</a></li>
          </ul>
        </nav>
      </header>
      <main>
        <ListaProdutos />
      </main>
      <footer>
        <p>&copy; 2024 Supermercado Bakana. Todos os direitos reservados.</p>
      </footer>
    </div>
  );
}

export default App;
