function Item (props) {
  return (
    <div>
      <img src={props.img} width="300" />
      <div className="info-corta">  
        <h2>{props.titulo}</h2>
        <p>Precio: $ {props.precio}</p>
        
        <div className="botones-item">
          <button>🔎</button>
          <button>🛒</button>
        </div>
      </div>
      
    </div>
  )
}

export default Item;