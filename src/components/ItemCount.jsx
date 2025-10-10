import {useState, useEffect} from "react";

function ItemCount(){
    const [count, setCount] = useState(1);
    const [limit, setLimit] = useState(false);
    const maxValue = 10;

    console.log("🪄 Renderizando ItemCount...");

    // Tarea de montaje (se ejecuta al cambiar limit)
    useEffect(() => {
        console.log("🔎 Consultando Stock...");
    }, [limit])

    // Tarea de actualización (se ejecuta cada vez que count o limit cambian, pero sin volver a consultar stock)
    useEffect(() => {
        if (count === maxValue && !limit) {
            setLimit(true);
        } else if (count !== maxValue && limit) {
            setLimit(false);
        }
    }, [count, limit]);

    function sumar(){
        if (count < maxValue) {
            setCount(count + 1);
        }
    }

    function restar(){
        if (count > 1) {
            setCount(count - 1);
        }
    }

    // null funciona igual que <></>
    return (
        <div className="item-count">  
            Contador
            <div className="contador">
                <button onClick= {restar} >-</button>
                <p>{count}</p>
                <button onClick= {sumar} >+</button>
            </div>

            { limit ? (
                <div className="msg-limite">
                    <br />
                    <p>❌ Alcanzaste el límite de productos</p>
                </div>
            )  : null }
        </div>
    )
}

// otra forma de escribir el ternario: { limit && <div>mensaje</div> }
// si la primera parte (limit) es true, evalúa y devuelve lo que está después del &&

export default ItemCount;