import { useContext } from "react";
import cartContext from "../context/cartContext";

function CartContainer(){
    const { cart } = useContext(cartContext);

    return <section>
        <h1 style= {{marginTop: "40px"}}>Tu carrito de compras</h1>
        <div>
            { cart.map( item => <div className="cart-item" key={item.id}>
                <hr></hr>
                <img width="150" src={ item.img }></img>
                <h3>{ item.titulo }</h3>
                <p>$ { item.precio }</p>
                <p>Cantidad: {item.cantidad}</p>
                <button>Eliminar</button>
            </div>)}
        </div>
        <div>
            <h4>Total de tu compra: $0</h4>
            <button>Ir a pagar</button>
        </div>
    </section>
}

export default CartContainer;