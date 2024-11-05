import React, { useState } from 'react';
import './App.css'; // Asegúrate de que los estilos sean correctos

const LoginPage = () => {
    const [nombreUsuario, setNombreUsuario] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const handleSubmit = async (event) => {
        event.preventDefault();
        setError('');

        try {
            const response = await fetch('http://localhost:8080/api/socios/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ nombreUsuario, password }),
            });

            if (!response.ok) {
                throw new Error('Error en la autenticación');
            }

            const data = await response.json();
            console.log('Inicio de sesión exitoso:', data);
            setIsLoggedIn(true); // Cambia el estado de inicio de sesión

            // Redirigir a la MainPage
            window.location.href = '/main'; // Redirige a la página principal
        } catch (error) {
            setError(error.message);
        }
    };

    return (
        <div className="login-container">
            <h1>Bienvenido a Gympal</h1>
            <form className="login-form" onSubmit={handleSubmit}>
                <label className='label-field'>
                    <span>Nombre de Usuario</span>
                    <input
                        type="text"
                        name="nombreUsuario"
                        required
                        className="input-field"
                        value={nombreUsuario}
                        onChange={(e) => setNombreUsuario(e.target.value)}
                    />
                </label>
                <label className='label-field'>
                    <span>Contraseña</span>
                    <input
                        type="password"
                        name="password"
                        required
                        className="input-field"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </label>
                <button type="submit" className="submit-button">Iniciar Sesión</button>
                {error && <p className="error-message">{error}</p>}
            </form>
        </div>
    );
};

export default LoginPage;
