import dvLogo from '../assets/belnuit-logo-1.png';

import CartWidget from "./CartWidget";
import { Link } from "react-router";

function NavBar() {
  return (
    <nav className="nav-bar">
        <Link to="/"><img src={dvLogo} width="200" alt="Logo" /></Link>
        <div className="categorias">
            <Link to="/categoria/tinto">Tintos</Link>
            <Link to="/categoria/blanco">Blancos</Link>
            <Link to="/categoria/rosado">Rosados</Link>
        </div>
        <CartWidget />
    </nav>
  )
}
export default NavBar;