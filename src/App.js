import logo from './logo.svg';
import './App.css';
import LogoFreeCodeCamp from './imagenes/freecodecamp-logo.png'
import ListaDeTareas from './componentes/ListaDeTareas';

function App() {
  return (
    <div className="aplicacion-tareas">
      <div className='freecodecamp-logo-contenedor'>
        <img
          className='freecodecamp-logo'
          src = {LogoFreeCodeCamp}
          alt = 'Logo de freeCodeCamp' />
      </div>

      <div className='tareas-lista-principal'>
        <h1>Mis Tareas</h1>
        <ListaDeTareas />
      </div>

    </div>
  );
}

export default App;
