import { useContext, useState } from "react";
import cartContext from "../context/cartContext";
import { createBuyOrder } from "../data/FirestoreService";
import CheckoutForm from "./CheckoutForm";

function CartContainer(){
    const { cart, clearCart, getTotalPrice, removeItem } = useContext(cartContext);
    const [orderCreated, setOrderCreated] = useState(false);

    async function handleCheckout(formData){
        const orderData= {
            buyer: formData,
            cart,
            total: getTotalPrice(),
            date: new Date(),
        }
        const response = await createBuyOrder(orderData);
        // alert(`Gracias por tu compra. Id de orden: ${response.id}`) // No es comilla es ALT+96
        // sweet-alert, toast, toastify
        //renderizado condicional
        setOrderCreated(response.id)
        clearCart();
    }

    if(orderCreated){
        return <section  style={{ color: "white", paddingTop: "40px" }}>
            <h2>Gracias por tu compra</h2>
            <p>Este es el id: {orderCreated}</p>
        </section>
    }

    return <section>
        <h1 style= {{marginTop: "40px"}}>Tu carrito de compras</h1>
        <div>
            { cart.map( item => <div className="cart-item" key={item.id}>
                <hr></hr>
                <img width="150" src={ item.img }></img>
                <h3>{ item.titulo }</h3>
                <p>$ { item.precio }</p>
                <p>Cantidad: {item.cantidad}</p>
                <button onClick={() => removeItem(item.id)}>Eliminar</button>
            </div>)}
        </div>
        <div>
            <h4>Total de tu compra: ${getTotalPrice()}</h4>
        </div>
        
        <CheckoutForm handleCheckout={handleCheckout}/>

    </section>
}

export default CartContainer;