import './App.css';
import ItemCount from './components/ItemCount';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import NavBar from './components/NavBar';
import { BrowserRouter, Routes, Route } from 'react-router';

function App() {
  return (
    <>
      <BrowserRouter> 
        <NavBar />
        <Routes>
          <Route path="/"
            element={ <ItemListContainer greeting="Bienvenido a nuestra vinoteca. ¡Salud!" /> } 
          />
          <Route path="/detail/:idParam"
            element={ <ItemDetailContainer />}
          />
          <Route path="/categoria/:catParam"
            element={ <ItemListContainer greeting="Categoría de Productos" />}
          />
          <Route path="*"
            element={ <h2>Error 404: No se encontraron resultados</h2>}
          />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;
