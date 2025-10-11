import Item from "./Item";
import vinos from "../data/data.js";
import getData from "../data/mockAPIService.js";
import { useEffect } from "react";

function ItemListContainer(props) {
  //then/catch para promesas
  //async/await para funciones asincrónicas
  //promesas: pending, resolved, rejected
  //getData().then( res => console.log(res) ).catch( err => console.log(err) );

  // ejemplo clase
  // getData()
  // .then( (data) => console.log(data) )
  // .catch()

  useEffect( () => {
    console.log("⌛ Promesa pendiente...");

    getData()
      .then( (data) => { 
        console.log("✅ Promesa cumplida");
        console.log(data); /* acá se cargarían los productos */
      })
      .catch( (err) => console.log(err) );
  } ), []
  

  return (
    <section className="item-list">
        <h2>{props.greeting}</h2>
        <div className="items">
          {
            vinos.slice(0, 4).map( item => (
            <Item
              key={item.id} /* índice para que React lo identifique (no se pasa como prop) */
              id={item.id} /* id para el botón detalle (se pasa como prop) */
              titulo={item.titulo}
              img={item.img}
              precio={item.precio}
              uva={item.uva}
            /> ))
          }
        </div>
    </section>
  )
}

export default ItemListContainer;