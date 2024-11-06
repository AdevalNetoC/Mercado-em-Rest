import React from 'react';

const Profile = () => {
    return (
        <div className="container">
            <h2>Página de Perfil</h2>
            <div className="profile-info">
                <p><strong>Nome:</strong> João da Silva</p>
                <p><strong>Email:</strong> joao.silva@example.com</p>
                <p><strong>Endereço:</strong> Rua das Flores, 123</p>
                <button>Editar Perfil</button>
            </div>
        </div>
    );
};

export default Profile;