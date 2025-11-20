import { Link } from "react-router";
export default function Item (props) {
  /* const texto = `Soy el producto ${props.title}` */
  /* console.log(texto) */
  
  return (
    <div>
      <img src={props.img} width="300" />
      <div className="info-corta">  
        <h2>{props.titulo}</h2>
        <p>Precio: $ {props.precio}</p>
        <p>Categoría: {props.categoria}</p>
        
        <div className="botones-item">
          <Link to={ `/detail/${props.id}` }>
            <button>🔎 Detalle</button>
          </Link>
        </div>
      </div>
      
    </div>
  )
}