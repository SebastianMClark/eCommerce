import { useContext } from "react";
import cartContext from "../context/cartContext"; // Se escribe sin brackets porque es un import 'named'
import { Link } from "react-router";

function CartWidget() {
  const { countItemsInCart } = useContext( cartContext );
  const total = countItemsInCart();
  

  return (
    <div className="div-carrito">
      <Link to="cart">
        🛒 { total > 0 ? total : "" }
      </Link>
    </div>
  )
}

export default CartWidget;