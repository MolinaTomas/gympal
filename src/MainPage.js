import React from 'react';
import './MainPage.css';
import userPic from './userPic.jpg';

const MainPage = () => {
    const nombreUsuario = "Usuario"; // TODO cambiar esto por el nombre de usuario loggeado

    return (
        <div className="main-page">
            <nav className="navbar">
                <div className="user-info">
                    <img src={userPic} alt="picUsuario" className="user-icon" />
                    <span className="user-name">{nombreUsuario}</span>
                </div>
            </nav>
            <div className="content">
                <div className="container">
                    <div className="column">
                        <h2>Mediciones</h2>
                    </div>
                    <div className="column">
                        <h2>Entrenamientos</h2>
                    </div>
                    <div className="column">
                        <h2>Objetivo</h2>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MainPage;
