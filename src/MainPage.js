import React from 'react';
import './MainPage.css';
import userPic from './userPic.jpg';

const MainPage = () => {
    const nombreUsuario = "Usuario"; // TODO cambiar esto por el nombre de usuario loggeado

    return (
        <div className="main-page">
            <nav className="navbar">
                <div className="user-info">
                    <img src={userPic} alt="Usuario" className="user-icon" />
                    <span className="user-name">{nombreUsuario}</span>
                </div>
            </nav>
            <div className="content">
                <h2>Contenido Principal</h2>
                <p>Hola</p>
            </div>
        </div>
    );
};

export default MainPage;
