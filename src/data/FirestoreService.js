// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { collection, doc, getDoc, getDocs, getFirestore, query, where } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA-3g943DWOAcTl5KZWZdHVt1WebvWP3Bw",
  authDomain: "react-martes88080-91307.firebaseapp.com",
  projectId: "react-martes88080-91307",
  storageBucket: "react-martes88080-91307.firebasestorage.app",
  messagingSenderId: "368497288532",
  appId: "1:368497288532:web:6daf682e52cca5aaf9d4c1"
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

//getProductById (1:43:42)
export async function getProductById(idParam){
    const docRef = doc(db, "products", idParam) // Referencia de documento que esta en: base de datos, colleccion, identificador
    const docSnapshot = await getDoc(docRef);
    const docData = docSnapshot.data();
    return { ...docData, id: docData.id };
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

export default getData;