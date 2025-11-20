//Crear el contexto
import {createContext, useState} from "react";
const cartContext = createContext({ cart: [] }); // Crear contexto

// Crear custom provider
export function CartContextProvider(props){
    const [cartItems, setCartItems] = useState([])
    function addItem(item){
        //const newCartItems = [ ...cartItems ] // Otra forma (shallow copy)
        // ? const nreCartItems = JSON.parse(JSON.stringigy(cartItems)) // Deep copy (más complejo)
        // setCartItems ( [ ...cartItems, item ]) // Sugar syntax
        const newCartItems = structuredClone(cartItems)
        newCartItems.push(item)
        setCartItems(newCartItems)
    }

    function countItemsInCart(){
        let totalItems = 0;
        cartItems.forEach( (item) => totalItems += item.cantidad );
        return totalItems;
    }

    function getTotalPrice(){
        let total = 0;
        cartItems.forEach( (item) => {
            total += item.precio * item.cantidad;
        });

        return total;
    }

    function removeItem(id){
        const updatedCart = cartItems.filter(item => item.id !== id);
        setCartItems(updatedCart);
    }

    function clearCart(){
        setCartItems([]);
    }

    return (
        <cartContext.Provider value={ { cart: cartItems, addItem, countItemsInCart, removeItem, clearCart, getTotalPrice } }>
            { props.children }
        </cartContext.Provider>
    )
}

export default cartContext; // Al importar en otro componente se escribe sin brackets porque es un export 'named'