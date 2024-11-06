import React from 'react';
import './Profile.css';

const Profile = () => {
    return (
        <div className="profile-container">
            <h2 className="profile-title">Página de Perfil</h2>
            <div className="profile-info">
                <p><strong>Nome:</strong> João da Silva</p>
                <p><strong>Email:</strong> joao.silva@example.com</p>
                <p><strong>Endereço:</strong> Rua das Flores, 123</p>
                <button className="profile-edit-button">Editar Perfil</button>
            </div>
        </div>
    );
};

export default Profile;
