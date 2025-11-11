import './App.css';
import ItemCount from './components/ItemCount';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import NavBar from './components/NavBar';
import { BrowserRouter, Routes, Route } from 'react-router';
import { CartContextProvider } from './context/cartContext';
import CartContainer from './components/CartContainer';

function App() {
  return (
    <>
      <BrowserRouter> 
        <CartContextProvider>
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
            <Route path="/cart"
              element={ <CartContainer />}
            />
            <Route path="*"
              element={
                <div className="error-404">
                  <h2>Error 404: No se encontraron resultados</h2>
                  <img src="https://media1.tenor.com/m/2gyy4BcsLWsAAAAd/monkey-confused.gif" alt="Error 404"></img>
                </div>
              }
            />
          </Routes>
        </CartContextProvider>
      </BrowserRouter>
    </>
  )
}

export default App;
