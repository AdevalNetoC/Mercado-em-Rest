import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Profile from './Profile'; 
import ListaProdutos from './ListaProdutos';
import CreateUser  from './CreateUser';
import UserList from './UserList';
import './style.css';
import Login from './Login';
import Recovery from './Recovery';

const App = () => {
    const handleLogout = () => {
        // Aqui você pode adicionar a lógica para limpar os dados do usuário
        localStorage.removeItem("token-info"); // Exemplo de remoção de token
    };

    return (
        <Router>
            <header>
                <div className="App">
                    <h1>Supermercado Bakana</h1>
                    <nav>
                        <ul>
                            <li><Link to="/profile">Perfil</Link></li>
                            <li><Link to="/create-user">Criar Usuário</Link></li>
                            <li><Link to="/user-list">Lista de Usuários</Link></li>
                            <li><Link to="/produtos">Lista de Produtos</Link></li>
                            <li>
                                <Link to="/login" onClick={handleLogout}>Sair</Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            </header>

            <main>
                <Routes>
                    <Route path="/produtos" element={<ListaProdutos />} />
                    <Route path="/profile" element={<Profile />} />
                    <Route path="/create-user" element={<CreateUser  />} />
                    <Route path="/user-list" element={<UserList />} />
                    <Route path="/" element={<h2>Produtos Disponíveis</h2>} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/recovery" element={<Recovery />} />
                </Routes>
            </main>

            <footer>
                <p>&copy; 2024 Supermercado Bakana. Todos os direitos reservados.</p>
            </footer>
        </Router>
    );
};

export default App;