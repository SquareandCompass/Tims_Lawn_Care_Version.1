// File: src/components/Login.js
import React, { useState } from 'react';
import { api, setToken } from '../api/api'; // Ensure this path is correct based on your project structure

function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async (event) => {
        event.preventDefault();
        try {
            const response = await api.post('/login', { username, password });
            localStorage.setItem('token', response.data.token); // Store the token in localStorage
            setToken(response.data.token); // Update the token in the API module for future requests
            // Redirect or perform additional actions on successful login
        } catch (error) {
            console.error('Login failed:', error);
            // Handle errors (e.g., display error messages)
        }
    };

    return (
        <form onSubmit={handleLogin}>
            <label>
                Username:
                <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
            </label>
            <label>
                Password:
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            </label>
            <button type="submit">Log In</button>
        </form>
    );
}

export default Login;
