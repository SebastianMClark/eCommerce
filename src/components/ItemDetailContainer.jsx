import { getProductById } from "../data/FirestoreService";
import ItemCount from "./ItemCount";
import { useParams } from "react-router";
import { useState, useEffect } from "react";
import { Link } from "react-router";

function ItemDetailContainer() {
    const [itemData, setItemData] = useState({loading: true});
    const [added, setAdded] = useState(false);
    const {idParam} = useParams();

    useEffect(() => {
        getProductById(idParam).then(res => setItemData(res))
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

                    { added
                        ? <Link to="/cart"><button>Ir al carrito</button></Link>
                        : <ItemCount product={itemData} onAdd={() => setAdded(true)} />
                    }
                  </div>
            }
        </div>
    )
}

export default ItemDetailContainer;
