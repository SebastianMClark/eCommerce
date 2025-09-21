import CartWidget from "./CartWidget";
import dvLogo from '../assets/belnuit-logo-1.png';

function NavBar() {
  return (
    <nav className="nav-bar">
        <a href="/"><img src={dvLogo} width="200" alt="Logo" /></a>
        <div className="categorias">
            <a href="/" className="active">Tintos</a>
            <a href="/">Blancos</a>
            <a href="/">Rosados</a>
            <a href="/">Aperitivos</a>
        </div>
        <CartWidget />
    </nav>
  )
}
export default NavBar;