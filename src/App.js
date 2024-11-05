import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>¡Bienvenido GymPal!</h1>
        <div className="login-container">
          <form className="login-form">
            <label className='label-field'>
              Correo Electrónico
              <input type="email" name="email" required className="input-field" />
            </label>
            <br />
            <label className='label-field'>
              Contraseña
              <input type="password" name="password" required className="input-field" />
            </label>
            <br />
            <button type="submit" className="submit-button">Iniciar Sesión</button>
          </form>
        </div>
      </header>
    </div>
  );
}

export default App;
