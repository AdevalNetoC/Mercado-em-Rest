import React, { useState } from 'react';
import './CreateUser.css';

const CreateUser = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [address, setAddress] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Usuário criado:', { name, email, address });
    };

    return (
        <div className="create-user-container">
            <h2 className="create-user-title">Criar Usuário</h2>
            <form onSubmit={handleSubmit} className="create-user-form">
                <div className="create-user-field">
                    <label className="create-user-label">Nome:</label>
                    <input 
                        type="text" 
                        value={name} 
                        onChange={(e) => setName(e.target.value)} 
                        className="create-user-input"
                        required 
                    />
                </div>
                <div className="create-user-field">
                    <label className="create-user-label">Email:</label>
                    <input 
                        type="email" 
                        value={email} 
                        onChange={(e) => setEmail(e.target.value)} 
                        className="create-user-input"
                        required 
                    />
                </div>
                <div className="create-user-field">
                    <label className="create-user-label">Endereço:</label>
                    <input 
                        type="text" 
                        value={address} 
                        onChange={(e) => setAddress(e.target.value)} 
                        className="create-user-input"
                        required 
                    />
                </div>
                <button type="submit" className="create-user-button">Criar Usuário</button>
            </form>
        </div>
    );
};

export default CreateUser;
