# React + Vite

Clonar el repositorio
git clone https://github.com/SebastianMClark/eCommerce.git

Acceder al directorio del proyecto
cd eCommerce

Instalar las dependencias necesarias
npm install

Iniciar el servidor de desarrollo
npm run dev

Abrir el proyecto en el navegador
http://localhost:5173/

# Pre-Entrega 1

- Crear el proyecto utilizando Vite JS
- Crear el componente ItemListContainer y pasarle una prop "greeting"
- Crear NavBar con un menu de navegación con: Logo, categorias, y CartWidget
- Creat CartWidget con una imagen/icono/emoji del carrito de compras

# Pre-Entrega 2

 - Instalar react-router (npm i react-router)
 - Configurar en el componente App la navegación con los componentes: BrowserRouter, Routes, Route
 - Genera links con el componente Link para poder navegar: tanto en NavBar como en Item (ver detalle)
 - Crear ItemDetailContainer, mostrando los detalles de un producto
 - Crear Item, que representa la Card de cada producto dentro del listado
 - En ItemDetailContainer, leer la URL con useParams(), obtener el ID y buscar un unico producto con ese ID
 - EN ItemListContainer, leer la URL con useParams(), obtener la cteogria y buscar un listado de productos segun esa categoria
 - IMPORTANTE: Tanto ItemDetail como ItemList, deben leer los datos de forma asíncrona ( useEffect - useState )

# Comandos GIT

- git init
- git add .
- git commit -m "Primer entrega"
- git branch -M "main"
- git remote add origin (url-repo)
- git push -u origin main

# Guía de instalación de proyectos con Vite

Crear el proyecto
npm create vite@latest nombre-del-proyecto

Seleccionar las opciones de configuración
Framework: React
Variant: JavaScript

Acceder al directorio del proyecto
cd nombre-del-proyecto

Instalar las dependencias necesarias
npm install

Iniciar el servidor de desarrollo
npm run dev

Abrir el proyecto en el navegador
http://localhost:5173/