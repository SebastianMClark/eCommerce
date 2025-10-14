import Item from "./Item";

import getData, { getProductsByCategory } from "../data/mockAPIService.js";
import { useEffect, useState } from "react";
import { useParams } from "react-router";

function ItemListContainer(props) {
  const [vinos, setVinos] = useState([]);
  const { catParam } = useParams();
  
  // getData simula fetch
  useEffect( () => {
    if ( catParam ) {
      getProductsByCategory(catParam)
      .then ( (data) => setVinos(data))
    }
    else {
      getData()
      .then( (data) => { 
        console.log("✅ Datos recibidos", data);
        setVinos(data);
      })
      .catch( (err) => console.log(err) );
    }
  }, [catParam]);
  

  return (
    <section className="item-list">
        <h2>{props.greeting}</h2>
        <div className="items">
          {
            vinos.slice(0, 10).map( item =>
            <Item
              key={item.id} /* índice para que React lo identifique (no se pasa como prop) */
              /* id={item.id} id para el botón detalle (se pasa como prop)
              titulo={item.titulo}
              img={item.img}
              precio={item.precio}
              uva={item.uva} */
              { ...item}
            /> )
          }
        </div>
    </section>
  )
}

export default ItemListContainer;