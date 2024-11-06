import React, { useState } from 'react';

const CreateUser  = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [address, setAddress] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Aqui você pode adicionar a lógica para criar o usuário
        console.log('Usuário criado:', { name, email, address });
    };

    return (
        <div className="container">
            <h2>Criar Usuário</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Nome:</label>
                    <input 
                        type="text" 
                        value={name} 
                        onChange={(e) => setName(e.target.value)} 
                        required 
                    />
                </div>
                <div>
                    <label>Email:</label>
                    <input 
                        type="email" 
                        value={email} 
                        onChange={(e) => setEmail(e.target.value)} 
                        required 
                    />
                </div>
                <div>
                    <label>Endereço:</label>
                    <input 
                        type="text" 
                        value={address} 
                        onChange={(e) => setAddress(e.target.value)} 
                        required 
                    />
                </div>
                <button type="submit">Criar Usuário</button>
            </form>
        </div>
    );
};

export default CreateUser ;