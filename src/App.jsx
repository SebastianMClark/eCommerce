import './App.css'
import ItemCount from './components/ItemCount';
import ItemListContainer from './components/ItemListContainer'
import NavBar from './components/NavBar'

function App() {
  return (
    <>
      <NavBar />
      <ItemCount />
      <ItemListContainer greeting="Bienvenido a nuestra vinoteca. ¡Salud!" />
      
    </>
  )
}

export default App;
