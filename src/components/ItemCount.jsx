import {useState} from "react";

function ItemCount(){
    let [count, setCount] = useState(1);
    const maxValue = 10;

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

    return (
        <div className="item-count">   
            <button onClick= {restar} >-</button>
            <p>{count}</p>
            <button onClick= {sumar} >+</button>
        </div>
    )
}

export default ItemCount;