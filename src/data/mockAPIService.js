import vinos from "./data.js";

function getData() {
    return new Promise ( (resolve, reject) => {
        setTimeout( () => {
            resolve(vinos)
        }, 5000 )
    } )
}

export default getData