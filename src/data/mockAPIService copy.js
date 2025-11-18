/* import vinos from "./data.js";

function getData() {
    return new Promise ( (resolve, reject) => {
        setTimeout( () => {
            resolve(vinos)
        }, 1000 )
    } )
}

// ? Array.find()

export function getProductById(idParam){
    return new Promise( (resolve) => {
        const itemRequested = vinos.find( (item) => String(item.id) === idParam)
        setTimeout( ()=> {resolve(itemRequested)}, 1000)
    })
}

export function getProductsByCategory(catParam){
    return new Promise ( (resolve, reject) => {
        const itemsRequested = vinos.filter( (item) => item.categoria === catParam)
        if (itemsRequested.length === 0) {
            reject ("No se encontraron productos")
        }
        setTimeout( ()=> {resolve(itemsRequested)}, 1000)
    })
}

export default getData */