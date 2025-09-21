function Item (props) {
  return (
    <div>
      <img src={props.img} width="200" />
      <h2>{props.title}</h2>
      <p>Precio: {props.price}</p>
      <button>Ver detalle</button>
    </div>
  )
}

export default Item;