import Item from "./Item";
import vinos from "../data/data.js";

function ItemListContainer(props) {
  return (

    <section className="item-list">
        <h2>{props.greeting}</h2>
        <div className="items">
          {
            vinos.slice(0, 10).map( item => (
            <Item
              titulo={item.titulo}
              img={item.img}
              precio={item.precio}
            /> ))
          }
        </div>
    </section>
    
  )
}

export default ItemListContainer;