import Item from "./Item";
import vinos from "../data/data.js";

function ItemListContainer(props) {
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