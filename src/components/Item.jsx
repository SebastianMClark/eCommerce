function Item (props) {
  return (
    <div>
      <img src={props.img} width="200" />
      <h2>{props.titulo}</h2>
      <p>Precio: $ {props.precio}</p>
      <button>Ver detalle</button>
    </div>
  )
}

export default Item;