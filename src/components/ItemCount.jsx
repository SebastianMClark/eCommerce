import { useState, useEffect, useContext } from "react";
import cartContext from "../context/cartContext"; // Se escribe sin brackets porque es un import 'named'

function ItemCount( {product} ){
    const { addItem } = useContext(cartContext) //{ cart: cartItems, addItem }

    const [count, setCount] = useState(1);
    const [limit, setLimit] = useState(false);
    const maxValue = 10;

    console.log("🪄 Renderizando ItemCount...");

    // Tarea de montaje (se ejecuta al cambiar limit)
    useEffect(() => {
        console.log("🔎 Consultando Stock...");
    }, [limit])

    // Tarea de actualización (se ejecuta cada vez que count o limit cambian, pero sin volver a consultar stock)
    useEffect(() => {
        if (count === maxValue && !limit) {
            setLimit(true);
        } else if (count !== maxValue && limit) {
            setLimit(false);
        }
    }, [count, limit]);

    function sumar(){
        if (count < maxValue) {
            setCount(count + 1);
        }
    }

    function restar(){
        if (count > 1) {
            setCount(count - 1);
        }
    }

    function addToCart(){
        addItem( { ...product, cantidad: count } )
    }

    // null funciona igual que <></>
    return (
        <div className="item-count">  
            <div className="contador">
                <button onClick= {restar} >-</button>
                <p>{count}</p>
                <button onClick= {sumar} >+</button>
            </div>

            { limit ? (
                <div className="msg-limite">
                    <br />
                    <p>❌ Alcanzaste el límite de productos</p>
                </div>
            )  : null }

            <button onClick={addToCart} style={{ marginTop: "20px", padding: "10px 20px" }}> Agregar al carrito </button>
        </div>
    )
}

// otra forma de escribir el ternario: { limit && <div>mensaje</div> }
// si la primera parte (limit) es true, evalúa y devuelve lo que está después del &&

export default ItemCount;