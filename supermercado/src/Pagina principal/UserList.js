import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './UserList.css'; // Import your CSS file for styling

const UserList = () => {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await axios.get('https://jsonplaceholder.typicode.com/users'); // Substitua pela sua URL da API
                setUsers(response.data);
            } catch (err) {
                setError(err.response ? err.response.data : 'Error fetching user data');
            } finally {
                setLoading(false);
            }
        };

        fetchUsers();
    }, []);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>{error}</div>;

    // Limitar a lista de usuários a apenas 2
    const limitedUsers = users.slice(0, 2);

    return (
        <div className="user-list">
            <h1>User List</h1>
            <ul>
                {limitedUsers.map(user => (
                    <li key={user.id}>
                        <h2>{user.name}</h2>
                        <p>Email: {user.email}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default UserList;