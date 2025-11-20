// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { addDoc, collection, doc, getDoc, getDocs, getFirestore, query, where } from "firebase/firestore";
import vinos from "./data";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FS_APIKEY,
  authDomain: import.meta.env.VITE_FS_AUTH,
  projectId: import.meta.env.VITE_FS_PROJECTID,
  storageBucket: import.meta.env.VITE_FS_BUCKET,
  messagingSenderId: "368497288532",
  appId: import.meta.env.VITE_FS_APPID
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

//getData() (1:30:55)
async function getData(){ // Le ponemos async para poder usar await. Si no lo hago se guarda una promesa en lugar de los datos
    const productsRef = collection(db, "products")
    const productsSnapshot = await getDocs(productsRef)
    const docs = productsSnapshot.docs;
    const dataDocs = docs.map( item => {
        return { ...item.data(), id: item.id } // El id va aparte porque se toma el automatico de firestore
    } )
    return dataDocs;
} // Ahora al llamar getData nos retorna una promesa (usar await)

//getProductById (1:43:42), (2:21:00)
export async function getProductById(idParam){
    const docRef = doc(db, "products", idParam) // Referencia de documento que esta en: base de datos, colleccion, identificador
    const docSnapshot = await getDoc(docRef);
    const docData = docSnapshot.data();
    const idDoc = docSnapshot.id
    return { ...docData, id: idDoc };
}

//getProductsByCategory (1:52:14)
export async function getProductsByCategory(catParam) {
    const productsRef = collection(db, "products")
    const q = query( productsRef, where( "categoria", "==", catParam )) // Segundo parametro es la condicion
    const productsSnapshot = await getDocs(q)
    const docs = productsSnapshot.docs;
    const dataDocs = docs.map( item => {
        return { ...item.data(), id: item.id }
    } )
    return dataDocs;
}

export async function createBuyOrder(orderData){
    const ordersRef = collection(db, "orders") //la coleccion orders se crea automaticamente en Firestore
    const newDoc = await addDoc(ordersRef, orderData) //addDoc retorna una promesa (hover para mas info) asi que le ponemos await
    return newDoc;
}

export async function exportProducts(){
    const productsRef = collection(db, "products")
    for(let item of vinos){
        delete item.id; // borro id para usar el de firestore
        const newDoc = await addDoc(productsRef, item)
        console.log("doc creado", newDoc.id)
    }
}

export default getData;