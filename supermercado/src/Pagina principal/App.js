import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './App.css';
import ListaProdutos from './ListaProdutos';
import UserList from './UserList'; // Certifique-se de que o nome do arquivo está correto

function App() {
  return (
    <Router>
      <div className="App">
        <header>
          <h1>Supermercado Bakana</h1>
          <nav>
            <ul>
              <li><Link to="/">Início</Link></li>
              <li><Link to="/produtos">Produtos</Link></li>
              <li><Link to="/usuarios">Usuários</Link></li>
              <li><Link to="/sair">Sair</Link></li>
            </ul>
          </nav>
        </header>
        <main>
          <Routes>
            <Route path="/" element={<ListaProdutos />} />
            <Route path="/produtos" element={<ListaProdutos />} />
            <Route path="/usuarios" element={<UserList />} /> {/* Corrigido para UserList */}
            {/* Adicione outras rotas conforme necessário */}
          </Routes>
        </main>
        <footer>
          <p>&copy; 2024 Supermercado Bakana. Todos os direitos reservados.</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;