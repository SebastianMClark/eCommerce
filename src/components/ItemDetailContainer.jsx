import { getProductById } from "../data/mockAPIService";
import ItemCount from "./ItemCount";
import { useParams } from "react-router";
import { useState, useEffect } from "react";
import { Link } from "react-router";

// ? 1. Leer la URL -> id del producto 
// ? 2. useEffect -> Buscar el producto con el id de la URL
// ? 3. useState -> almacenar los datos del producto

function ItemDetailContainer() {
    const [itemData, setItemData] = useState({loading: true});
    const {idParam} = useParams();

    useEffect( () => {
        getProductById(idParam).then( res => setItemData(res))
    }, [idParam])

    return (
        <div className="item-detail">
            {
                itemData.loading
                ? <h3>Cargando...</h3>
                : <div>
                    <img width="300" src={itemData.img} alt="Item" />
                    <h4>{itemData.titulo}</h4>
                    <p>Precio: $ {itemData.precio}</p>
                    <p>{itemData.desc}</p>
                    <ItemCount />
                    <Link to="/"><h4>🛒 Agregar al carrito 🛒</h4></Link>
                  </div>
            }
        </div>
    )
}

export default ItemDetailContainer;