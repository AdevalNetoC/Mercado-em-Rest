import React, { useState } from 'react';

const CreateUser  = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [address, setAddress] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Simulando uma chamada de API para criar um usuário
        const userData = {
            name,
            email,
            address,
        };

        try {
            // Aqui você deve substituir pelo seu endpoint real
            const response = await fetch('https://api.exemplo.com/usuarios', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(userData),
            });

            if (!response.ok) {
                throw new Error('Erro ao criar usuário');
            }

            const data = await response.json();
            setMessage(`Usuário ${data.name} criado com sucesso!`);
            // Limpar os campos após a criação
            setName('');
            setEmail('');
            setAddress('');
        } catch (error) {
            setMessage(`Erro: ${error.message}`);
        }
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
            {message && <p>{message}</p>}
        </div>
    );
};

export default CreateUser ;