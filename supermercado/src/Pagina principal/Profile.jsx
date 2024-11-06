import React, { useState } from 'react';
import './Profile.css'; // Certifique-se de que está importando corretamente

const Profile = () => {
    // Estado para armazenar as informações do perfil
    const [profile, setProfile] = useState({
        name: 'João da Silva',
        email: 'joao.silva@example.com',
        address: 'Rua das Flores, 123'
    });

    // Estado para controlar se o formulário de edição está visível
    const [isEditing, setIsEditing] = useState(false);

    // Função para lidar com a mudança nos campos do formulário
    const handleChange = (e) => {
        const { name, value } = e.target;
        setProfile((prevProfile) => ({
            ...prevProfile,
            [name]: value
        }));
    };

    // Função para alternar o estado de edição
    const toggleEdit = () => {
        setIsEditing(!isEditing);
    };

    return (
        <div className="profile-container">
            <h2 className="profile-title">Página de Perfil</h2>
            <div className="profile-info">
                {isEditing ? (
                    <form className="profile-form">
                        <div>
                            <label>
                                Nome:
                                <input
                                    type="text"
                                    name="name"
                                    value={profile.name}
                                    onChange={handleChange}
                                />
                            </label>
                        </div>
                        <div>
                            <label>
                                Email:
                                <input
                                    type="email"
                                    name="email"
                                    value={profile.email}
                                    onChange={handleChange}
                                />
                            </label>
                        </div>
                        <div>
                            <label>
                                Endereço:
                                <input
                                    type="text"
                                    name="address"
                                    value={profile.address}
                                    onChange={handleChange}
                                />
                            </label>
                        </div>
                        <button type="button" className="profile-save-button" onClick={toggleEdit}>
                            Salvar
                        </button>
                    </form>
                ) : (
                    <>
                        <p><strong>Nome:</strong> {profile.name}</p>
                        <p><strong>Email:</strong> {profile.email}</p>
                        <p><strong>Endereço:</strong> {profile.address}</p>
                        <button className="profile-edit-button" onClick={toggleEdit}>Editar Perfil</button>
                    </>
                )}
            </div>
        </div>
    );
};

export default Profile;
