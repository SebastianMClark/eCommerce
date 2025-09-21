import Item from "./Item";

function ItemListContainer(props) {
  return (
    <section className="item-list-container">
        <h2>{props.greeting}</h2>
        <div className="items">
          <Item 
              img="https://acdn-us.mitiendanube.com/stores/001/384/985/products/malbec-argentino-20181-fd1b245d8f8a86f20f16642039177680-640-0.webp"
              title="Vino Tinto Malbec"
              price="$1234" />
          
          <Item 
              img="https://viners.com.ar/cdn/shop/files/casillero-del-diablo-cabernet-sauvignon-2023-vino-concha-y-toro-150990.jpg?v=1728551916&width=640"
              title="Vino Tinto Cabernet Sauvignon"
              price="$1234" />

          <Item 
              img="https://shop.gustoargentino.com/cdn/shop/products/estancia-mendoza-vino-tinto-merlot-malbec-1.jpg?v=1741175560&width=640"
              title="Vino Tinto Merlot"
              price="$1234" />
        </div>
    </section>
    
  )
}

export default ItemListContainer;