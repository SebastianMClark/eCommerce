import {useState, useEffect} from "react";

function ItemCount(){
    const [count, setCount] = useState(1);
    const [limit, setLimit] = useState(false);
    const maxValue = 10;

    console.log("🪄 Renderizando ItemCount...");

    useEffect(() => {
        console.log("🔎 Consultando Stock...");
    }, [limit])

    function sumar(){
        if (count < maxValue) {
            setCount(count + 1);
        }
        else {
            setLimit(true);
        }
    }

    function restar(){
        if (count > 1) {
            setCount(count - 1);
        }
    }

    return (
        <div className="item-count">   
            <button onClick= {restar} >-</button>
            <p>{count}</p>
            <button onClick= {sumar} >+</button>
            { limit ? <p>❌ Alcanzaste el límite de productos</p> : <></> }
        </div>
    )
}

export default ItemCount;